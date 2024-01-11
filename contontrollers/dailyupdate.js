import mongoose from "mongoose";
import components from '../models/components.js'
import seeker from "../models/User.js";

 export const saveIndianEmployerData = async (data) => {
    try {
      // Create an instance of the IndianEmployer model with the provided data
      const compInstance = new components(data);
  
      // Save the data to the MongoDB database
      const savedData = await compInstance.save();
  
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  



  const componentStats = {
    skilltraining: 0,
    jobsforwomangovt: 0,
    jobsforwomanpvt: 0,
    notifications: 0,
    disability: 0,
    armedforcesgirl: 0,
    armedforcesboy: 0,
    localservices: 0,
    counselling: 0,
    pvtjobs: 0,
    footer: 0,
    downloads: 0,
    govtjobs: 0,
    home: 0,
  };
  
  export const updateuserTimer = async(req,res)=>{
  const currentDate = new Date(req.body.date).toISOString().split('T')[0];
  
  try {
    const user = await seeker.findOne({ email: 'user1@example.com' });
  
    console.log(user);
  
    const todayEntry = user.componenttime.find((entry) => entry.date.toISOString().split('T')[0] === currentDate);
  
    if (todayEntry) {
      // Update existing entry
      Object.keys(componentStats).forEach((key) => {
        todayEntry[key] += req.body[key] || 0;
      });
    } else {
      // Add new entry
      const newEntry = {
        date: new Date(),
      };
  
      Object.keys(componentStats).forEach((key) => {
        newEntry[key] = req.body[key] || 0;
      });
  
      user.componenttime.push(newEntry);
    }
  
    await user.save();
    console.log('User component time updated successfully');
    res.status(200).send('User component time updated successfully');
  } catch (error) {
    console.error('Error updating user component time:', error.message);
    res.status(500).send('Internal Server Error');
  }
  
}
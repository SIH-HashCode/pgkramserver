import mongoose from "mongoose";
import components from '../models/components.js'

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
  
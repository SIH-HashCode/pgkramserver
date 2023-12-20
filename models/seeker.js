import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  
  age: { type: String, required:  true },
  email: { type: String, required: true },
  
  state: { type: String, required:  true },
  
  city: { type: String, required:  true },
  
  tehsil: { type: String, required:  true },
  
  sex: { type: String, required:  true },
  
  education: { type: String, required:  true },
  
  course: { type: String, required:  true },
  
  maritialstatus: { type: String},
  skills: {
    type: [String], 
  },
  intrest: {
    type: [String], 
  },
  componenttime: {
    type: [String], 
    default:[]
  },
  componenttime: [
    {
      skilltraining: { type: String, required:  true },
  
      jobsforwomangovt: { type: String, required:  true },
      
      jobsforwomanpvt: { type: String, required:  true },
      
      notifications: { type: String, required:  true },
      
      disability: { type: String, required:  true },
      
      armedforcesgirl: { type: String, required:  true },
      
      armedforcesboy: { type: String, required:  true },
      
      localservices: { type: String, required:  true},
      
      counselling: { type: String, required:  true},
      
      pvtjobs: { type: String, required:  true },
      
      footer: { type: String, required:  true },
      
      downloads: { type: String, required:  true },
      govtjobs: { type: String, required: true },
      
      home: { type: String, required: true },
      date: {
        type: Date,
        default: Date.now,
      },
    
    },
  ],
  phoneno: { type: String, required:  true },
  password: { type: String, required: true },
  id: { type: String },

});
// {type:[String],default:[]}
export default mongoose.model("Seeker", userSchema);
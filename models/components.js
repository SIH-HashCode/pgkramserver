import mongoose from "mongoose";

const userSchema = mongoose.Schema({
 
  
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

});
export default mongoose.model("Components", userSchema);
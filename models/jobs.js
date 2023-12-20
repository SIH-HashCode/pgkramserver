import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    provider: {
        type: mongoose.Types.ObjectId,
        ref: 'IndianEmployer', 
      },
  title: { type: String, required:  true },
  
  description: { type: String, required:  true },
  
  state: { type: String, required:  true },
  
  salarytype: { type: String, required:  true },
  
  type: { type: String, required:  true },
  
  salary: { type: String, required:  true },
  
  education: { type: String, required:  true },
  
  gender: { type: String, required:  true },
  
  vaccancy: { type: String, required:  true },
  
  maxage: { type: String, required:  true },
  
  ispwd: { type: String, required:  true },
  
  disabilitytype: { type: String, required:  true },
  
  interview: { type: String, required:  true },
  
  skills: {
    type: [String], 
  },
  expirience: {
    type: [String], 
  },

  location: {
    type: [String], 
  },
  id: { type: String },

});
// {type:[String],default:[]}
export default mongoose.model("Jobs", userSchema);
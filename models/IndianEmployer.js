import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  companyname: { type: String, required:  true },
  
  category: { type: String, required:  true },
  
  email: { type: String, required: true },
  
  state: { type: String, required:  true },
  
  location: { type: String, required:  true },
  
  websitelink: { type: String},
  
  id: { type: String },

});


export default mongoose.model("IndianEmployer", userSchema);
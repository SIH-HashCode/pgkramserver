import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  
  age: { type: String, required:  true },
  email: { type: String, required: true },
  
  state: { type: String, required:  true },
  
  location: { type: String, required:  true },
  
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
  phoneno: { type: String, required:  true },
  password: { type: String, required: true },
  id: { type: String },

});
// {type:[String],default:[]}
export default mongoose.model("Seeker", userSchema);
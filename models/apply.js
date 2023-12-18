import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    provider: {
        type: mongoose.Types.ObjectId,
        ref: 'IndianEmployer', 
      },
      applier: {
        type: mongoose.Types.ObjectId,
        ref: 'Seeker', 
      },
      date: {
        type: Date,
        required: true,
        
      },
  status: { type: String, required:  true },
 
  id: { type: String },

});
// {type:[String],default:[]}
export default mongoose.model("Seeker", userSchema);
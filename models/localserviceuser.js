import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  phoneno: { type: String, required: true },
  state: { type: String, required: true },
  servicerange: { type: String, required: true },
  education: { type: String, required: true },
  gender: { type: String, required: true },
  course: { type: String, required: true },
  maxage: { type: String, required: true },
  ispwd: { type: String, required: true },
  disabilitytype: { type: String, required: true },
  servicetype: { type: String, required: true },
  servicename: {
    type: [String],
  },
  experience: {
    type: [String],
  },
  location: {
    type: [String],
  },
  service: [
    {
      servicename: { type: String, required: true },
      servicetype: { type: String, required: true },
      servicerange: { type: String, required: true },
      serviceprice: { type: String, required: true },
      servicedetail: { type: String, required: true },
    },
  ],
  id: { type: String },
});

export default mongoose.model("LocalServiceUser", userSchema);

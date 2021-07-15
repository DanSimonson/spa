import mongoose from "mongoose";
//required: true
//create Schema
const messageSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;

import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const eventSchema = new Schema({
  title: String,
  date: Date,
  venue: String,
  description: String,
  url: String,
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;

import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const eventSchema = new Schema({
  title: String,
  date: Date,
  venue: String,
  description: String,
  url: String,
  price: String,
  organiser: String,
  user: String,
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;

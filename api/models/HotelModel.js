import mongoose from "mongoose";

// Schema //
const Schema = mongoose.Schema;
const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
    required: true,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  fetured: {
    type: Boolean,
    default: false,
  },
});

// Model //
export default mongoose.model("HotelModel", HotelSchema);

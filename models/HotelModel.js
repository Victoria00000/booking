// Schema //
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const HotelSchema = new Schema({
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

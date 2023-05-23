import { Router } from "express";
import HotelModel from "../models/HotelModel.js";

export const routerHotels = Router();

// create //
routerHotels.post("/", async (req, res) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update //
routerHotels.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete //
routerHotels.delete("/:id", async (req, res) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get 1 hotel //
routerHotels.get("/:id", async (req, res) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all hotels //
routerHotels.get("/", async (req, res, next) => {
  console.log("get all hotels");

  try {
    const hotels = await HotelModel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
});

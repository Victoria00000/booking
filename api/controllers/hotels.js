import HotelModel from "../models/HotelModel.js";

// Controllers for  hotels //

// create a new hotel //
export const createNewHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// update the hotel by id //
export const updateHotel = async (req, res, next) => {
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
    next(error);
  }
};

// delete the hotel by id //
export const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    next(error);
  }
};

// get 1 hotel by id //
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// get all hotels //
export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;

  try {
    const Limit = req.query.limit || 5;

    const hotels = await HotelModel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
    }).limit(Number(Limit));
    console.log(Limit);
    console.log(typeof Limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// get hotels by city //
export const getCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return HotelModel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

// get hotels by type //
export const getCountByType = async (req, res, next) => {
  try {
    const hotelCount = await HotelModel.countDocuments({ type: "hotel" });
    const apartmentCount = await HotelModel.countDocuments({
      type: "apartment",
    });
    const resortCount = await HotelModel.countDocuments({ type: "resort" });
    const villaCount = await HotelModel.countDocuments({ type: "villa" });
    const cabinCount = await HotelModel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

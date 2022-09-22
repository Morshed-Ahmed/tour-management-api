const mongoose = require("mongoose");
const { Schema } = mongoose;

const tourSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tours."],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [3, "Name must be lest 3 characters."],
      maxLength: [100, "Name too large."],
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: [true, "Please provide image url"],
    },
    bookingDay: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this tours."],
      min: [0, "Price can't be negative"],
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;

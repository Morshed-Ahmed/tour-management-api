const mongoose = require("mongoose");
const { Schema } = mongoose;

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this tours."],
    trim: true,
    unique: [true, "Name must be unique."],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide a price for this tours."],
  },
});

const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;

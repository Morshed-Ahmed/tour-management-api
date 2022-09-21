const Tours = require("../model/Tours");

exports.getTours = async (req, res, next) => {
  try {
    const result = await Tours.find();
    res.status(200).json({
      successful: true,
      message: "Data find successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not find",
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const result = await Tours.create(req.body);
    res.status(200).json({
      successful: true,
      message: "Data create successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

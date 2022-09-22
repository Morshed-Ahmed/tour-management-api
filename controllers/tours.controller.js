const Tours = require("../model/Tours");
const {
  getToursService,
  createTourService,
  detailsTourService,
  updateTourService,
} = require("../services/tour.service");

exports.getTours = async (req, res, next) => {
  try {
    const { fields, limit } = req.query;
    const queries = {};
    // if (field) {
    //   const fields = field.split(",").join(" ");
    //   queries.fields = fields;
    //   console.log(fields);
    // }
    if (fields) {
      const field = fields.split(",").join(" ");
      queries.field = field;
      // console.log(field);
    }
    if (limit) {
      console.log(limit);
    }

    const result = await getToursService(queries);
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
    const result = await createTourService(req.body);
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

exports.detailsTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await detailsTourService(id);
    res.status(200).json({
      successful: true,
      //   message: "Data create successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data details is not find",
      error: error.message,
    });
  }
};

exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const result = await Tours.updateOne({ _id: id }, { $set: req.body });
    const result = await updateTourService(id, req.body);
    res.status(200).json({
      successful: true,
      message: "Data update successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data update fail",
      error: error.message,
    });
  }
};

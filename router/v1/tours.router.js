const express = require("express");
const router = express.Router();

const tourController = require("../../controllers/tours.controller");

router.route("/").get(tourController.getTours).post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.detailsTour)
  .patch(tourController.updateTour);

module.exports = router;

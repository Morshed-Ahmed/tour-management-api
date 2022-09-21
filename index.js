const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

const tourRouter = require("./router/v1/tours.router");

app.use(express.json());
app.use(cors());

// database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log(`Database connection is successfully`);
  })
  .catch((error) => {
    console.log("No connection");
  });

app.use("/tours", tourRouter);

app.get("/", (req, res) => {
  res.send("Tour Management Api Ready...!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

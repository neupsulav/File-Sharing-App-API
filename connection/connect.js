const mongoose = require("mongoose");

const connectDB = async (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Successfully Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;

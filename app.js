const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./connection/connect");
const noRoute = require("./middlewares/noRoute");

//port
const port = process.env.port || 3000;

//no routes
app.use(noRoute);

//listen
const listen = async () => {
  await connectDB(process.env.mongoURI);
  app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
  });
};

listen();

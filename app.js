const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./connection/connect");
const noRoute = require("./middlewares/noRoute");
const errorHandlerMiddleware = require("./middlewares/ErrorHandlerMiddleware");
const uploadRouter = require("./routers/files");

//port
const port = process.env.port || 3000;

//routes
app.use("/api/file", uploadRouter);

//error handler middleware
app.use(errorHandlerMiddleware);

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

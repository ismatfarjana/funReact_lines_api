const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("🎃 🎃 🎃 🎃 🎃 🎃 Connected to MongoDB!🎃 🎃 🎃 🎃 🎃 🎃 🎃");
  })
  .catch(err => {
    console.error("Error connecting to mongoDB", err);
  });

app.use(express.json());

const linesRoute = require("./routes/lines_route");
app.use("/api/lines", linesRoute);

const port = process.env.PORT || 3300;
//listening to port
app.listen(port, () => {
  console.log(
    `🌻 🌻 🌻 Express API listening on port http://localhost:${port} !🌻 🌻 🌻`
  );
});

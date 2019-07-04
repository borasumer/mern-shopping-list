const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const items = require("./routes/api/items");

const app = express();

//! Bodyparser middleware
app.use(bodyParser.json());

//! MongoDB Connection
const uri = process.env.DB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(`ERROR: ${err}`));

app.use("/api/items", items);

//! Server Connection
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

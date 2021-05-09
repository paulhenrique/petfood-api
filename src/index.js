const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//database
const database = require("./database");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server is up in", process.env.PORT);
});

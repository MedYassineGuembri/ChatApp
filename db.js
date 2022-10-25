const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.lqadrck.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("database connected");
  }
);

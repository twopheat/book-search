var mongoose = require("mongoose");
var db = require("../models/transaction.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true
});


var budgetSeed = [];
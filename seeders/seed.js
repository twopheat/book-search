var mongoose = require("mongoose");
var db = require("../models/book.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true
});


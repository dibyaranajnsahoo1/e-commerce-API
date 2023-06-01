const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to database
mongoose.connect("mongodb://127.0.0.1/E-Commerce", { useNewUrlParser: true });
// mongodb+srv://ranjandibya:lalu@cluster0.owtudao.mongodb.net/?retryWrites=true&w=majority

const db = mongoose.connection;

//not connect
db.on("error", console.error.bind(console, "Not connect to MongoDb  Try again"));

// if connection is successful
db.once("open", () => {
  console.log("Connected with Data-base succsesfully");
});

module.exports = db;

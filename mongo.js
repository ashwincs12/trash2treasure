const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dealers", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("collection", newSchema);

const data = {
  email: "ashwin@gmail.com",
  password: "123",
};

collection.insertMany([data]);

module.exports = collection;

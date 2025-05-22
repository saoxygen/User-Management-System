const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Optional: exit app if DB fails
  }
};


module.exports = connectDB;
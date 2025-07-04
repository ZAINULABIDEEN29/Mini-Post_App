import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not set.");
    }
    const connectionInstance = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: ${connectionInstance.connection.host} / ${connectionInstance.connection.name}`
    );
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process on failure
  }
};

export { connectDB };
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/blogsitedb");
    console.log('db is connected')
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
        type:mongoose.Schema.Types.ObjectId, //mongodb the id is not type:String but an obj
        ref: 'User',
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);

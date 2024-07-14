import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  data: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("File", fileSchema);

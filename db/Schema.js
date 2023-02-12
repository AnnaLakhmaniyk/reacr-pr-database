import mongoose from "mongoose"

const lessonsSchema = new mongoose.Schema()
export const Data = mongoose.model("lessons", lessonsSchema)

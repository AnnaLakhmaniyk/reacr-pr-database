import mongoose from "mongoose"

const DB_URL = `mongodb+srv://testlesson:testlesson@cluster0.1jxl14z.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", false)
export const connectMongo = async () => {
  return await mongoose.connect(DB_URL, { dbName: "collection" })
}

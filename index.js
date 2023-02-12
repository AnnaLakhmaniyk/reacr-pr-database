import express from "express"
import cors from "cors"
import router from "./src/routers.js"
import { connectMongo } from "./src/db/conection.js"

const PORT = 3038
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)

async function startApp() {
  try {
    await connectMongo()
    app.listen(PORT, () => console.log("Server running. Use our API on port " + PORT))
  } catch (e) {
    console.log(e)
  }
}
startApp()

import Router from "express"
import { getData, getDataById, getDataByName } from "./controllersData.js"

const router = new Router()

router.get("/lessons", getData)
router.get("/lessons/:id", getDataById)
router.get("/lessons/search/:name", getDataByName)

export default router

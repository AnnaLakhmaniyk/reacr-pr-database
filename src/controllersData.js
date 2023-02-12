import { Data } from "./db/Schema.js"

export const getData = async (req, res) => {
  const data = await Data.find({}).lean()
  const respond = []
  data.map(({ content_course, ...other }) => respond.push(other))

  res.json(respond)
}
export const getDataById = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Data.findById(id)
    if (!data) {
      throw new Error()
    }
    return res.status(200).json(data)
  } catch (e) {
    return res.status(404).json({ message: "Not found" })
  }
}

export const getDataByName = async (req, res) => {
  try {
    const { name } = req.params
    const data = await Data.find({ name: { $regex: name, $options: "ix" } }).lean()
    const respond = []
    data.map(({ _id, name }) => respond.push({ _id, name }))

    if (!data || !data.length) {
      throw new Error()
    }
    return res.status(200).json(respond)
  } catch (e) {
    return res.status(404).json({ message: "Not found" })
  }
}

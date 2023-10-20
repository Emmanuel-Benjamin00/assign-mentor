import express from "express"
import dotenv from "dotenv"
import Approutes from "./src/routes/index.js"

dotenv.config()

const PORT = process.env.PORT
const app = express()


app.use(express.json())
app.use('/',Approutes)

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))
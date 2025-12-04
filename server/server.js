import express from "express"
import taskroutes from "./routes/task.routes.js"
import cors from "cors"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())
app.use("/api" , taskroutes)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

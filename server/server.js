import express from "express"
import taskroutes from "./routes/task.router.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use("/api" , taskroutes)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

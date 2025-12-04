import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "server", "storage", "alltasks.json")
console.log(filePath)

function checkFileExists() {
    const storageDir = path.dirname(filePath)

    if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true })
    }

    if (!fs.existsSync(filePath)) {
        const defaultData = JSON.stringify({ tasks: [] }, null, 2)
        fs.writeFileSync(filePath, defaultData)
    }
}

export function readfile() {
    checkFileExists()
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data).tasks
}

export function writefile() {
    checkFileExists()
    const data = { tasks }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}


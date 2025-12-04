import express from "express";
import { getTasks , createTasks , updateTasks , deleteTasks } from "../controller/user.controllers.js"; 

const router = express.Router()

router.get("/tasks", getTasks)

router.post("/tasks", createTasks)

router.patch("/tasks:id" , updateTasks)

router.delete("/tasks:id" , deleteTasks)

export default router;


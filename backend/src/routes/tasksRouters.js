import express from 'express';
import { createTask, deleteTasks, getAllTasks, updateTask } from '../controllers/tasksControllers.js';

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTasks);

export default router;
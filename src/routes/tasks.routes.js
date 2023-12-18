import { Router } from "express";
import { authenticationRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authenticationRequired, getTasks);
router.get("/tasks/:id", authenticationRequired, getTask);
router.post(
  "/tasks",
  authenticationRequired,
  validateSchema(createTaskSchema),
  createTask
);
router.delete("/tasks/:id", authenticationRequired, deleteTask);
router.put("/tasks/:id", authenticationRequired, updateTask);
export default router;

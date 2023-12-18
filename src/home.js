import express from "express";
import morgan from "morgan";
import authenticationRoutes from "./routes/authentication.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from './routes/tasks.routes.js'

//configures code relating to express/backend
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authenticationRoutes);
app.use("/api", taskRoutes);
export default app;

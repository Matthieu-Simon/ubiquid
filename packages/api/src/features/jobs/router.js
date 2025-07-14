import { Router } from "express";
import { list } from "./controllers/list.js";
import { createJob } from "./controllers/createJob.js";

const JobsRouter = Router();

JobsRouter.get("/list", list);
JobsRouter.post("/", createJob);

export default JobsRouter;

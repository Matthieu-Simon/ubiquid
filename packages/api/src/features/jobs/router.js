import { Router } from "express";
import { list } from "./controllers/list.js";
import { createJob } from "./controllers/createJob.js";
import { updateJob } from "./controllers/updateJob.js";

const JobsRouter = Router();

JobsRouter.get("/list", list);
JobsRouter.post("/", createJob);
JobsRouter.put("/:id", updateJob);

export default JobsRouter;

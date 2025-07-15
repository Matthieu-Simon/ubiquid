import { Router } from "express";
import { list } from "./controllers/list.js";
import { createJob } from "./controllers/createJob.js";
import { updateJob } from "./controllers/updateJob.js";
import { deleteJob } from "./controllers/deleteJob.js";

const JobsRouter = Router();

JobsRouter.get("/list", list);
JobsRouter.post("/", createJob);
JobsRouter.put("/:id", updateJob);
JobsRouter.delete("/:id", deleteJob);

export default JobsRouter;

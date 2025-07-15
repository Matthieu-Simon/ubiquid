import { JSONFilePreset } from "lowdb/node";
import jobs from "./jobs.json" with { type: "json" };

const defaultData = { jobs: jobs };

const db = await JSONFilePreset("db.json", defaultData);

export { db };

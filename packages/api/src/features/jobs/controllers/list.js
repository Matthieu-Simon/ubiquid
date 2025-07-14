import { db } from "../../../../db/db.js";

export const list = (req, res) => {
  res.json(db.data.jobs);
};

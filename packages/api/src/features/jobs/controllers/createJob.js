import { db } from "../../../../db/db.js";

export const createJob = async (req, res) => {
  try {
    const { jobType, remoteType, companyName, contractType, location, salary } = req.body;
    if(!jobType || !companyName || !location || !contractType || !salary || !remoteType) {
      return res.status(400).json({
        message: "Tous les champs doivent être remplis !"
      });
    }

    const maxId = db.data.jobs.length > 0
    ? Math.max(...db.data.jobs.map(job => job.id)) : 0;

    const newJob = {
      id: maxId + 1,
      jobType,
      remoteType,
      companyName,
      location,
      contractType,
      salary: parseInt(salary),
      createdAt: new Date().toISOString()
    };

    db.data.jobs.push(newJob);

    await db.write();

    res.status(201).json({
      message: "Annonce créée avec succés",
      job: newJob
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'annonce",
      error: error.message
    });
  }
}
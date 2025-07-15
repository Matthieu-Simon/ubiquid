import { db } from "../../../../db/db.js";

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    
    const jobIndex = db.data.jobs.findIndex(job => job.id === parseInt(id));

    if (jobIndex === -1) {
      return res.status(404).json({ message: "Offre non trouvée" });
    }

    db.data.jobs[jobIndex] = {
      ...db.data.jobs[jobIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    await db.write();

    res.status(200).json({ 
      message: "Annonce modifiée avec succés", 
      job: db.data.jobs[jobIndex] 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Erreur lors de la modification", 
      error: error.message 
    });
  }
}
import { db } from "../../../../db/db.js";

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const jobIndex = db.data.jobs.findIndex(job => job.id === parseInt(id));

    if (jobIndex === -1) {
      return res.status(404).json({ message: "Offre non trouvée" });
    }

    db.data.jobs.splice(jobIndex, 1);

    await db.write();

    res.status(200).json({ message: "Annonce supprimée avec succés" });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression de l'annonce",
      error: error.message
    })
  }
};
import { useState, useEffect } from "react"
import Button from "./Button";
import Close from "../../public/crossIcon.svg";
import Arrow from "../../public/arrow.svg";

const JobModal = ({ onClose, job, fetchJobs }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({
    jobType: "",
    companyName: "",
    location: "",
    salary: "",
    contractType: "",
    remoteType: "",
  });

  useEffect(() => {
    if (job) {
      setFormData({
        jobType: job.jobType || "",
        companyName: job.companyName || "",
        location: job.location || "",
        salary: job.salary || "",
        contractType: job.contractType || "",
        remoteType: job.remoteType || "",
      })
    } else {
      setFormData({
        jobType: "",
        companyName: "",
        location: "",
        salary: "",
        contractType: "",
        remoteType: "",
      })
    }
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDeleting) return;

    try {
      if(job?.id) {
        const response = await fetch(`http://localhost:3000/jobs/${job.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Erreur lors de la modification.");
        const data = await response.json();
        console.log("Annonce modifiée :", data);
        alert("Votre annonce a bien été modifiée !");
      } else {
        if(!job?.id) {
          console.log("Envoi en POST avec formData :", formData);
        }

        const response = await fetch("http://localhost:3000/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Erreur lors de la création");

        const data = await response.json();
        console.log("Annonce créée :", data);
        alert("Votre annonce a bien été créée !");
      }

      onClose();
      fetchJobs();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert(error.message);
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true);
    if (!job) return;

    const confirmDelete = window.confirm("Supprimer cette offre ?");

    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/jobs/${job.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erreur lors de la suppression.");
      const data = await response.json();
      console.log("Suppresions réussie :", data);
      alert("Votre annonce a bien été supprimée !");
      onClose();
      fetchJobs();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[920px] m-auto bg-white shadow-modal rounded-2xl px-8 py-10 flex flex-col justify-between">
        <div>
          <div className="relative m-4">
            <h2 className="text-center font-medium text-2xl text-[var(--color-secondary)]">
              Modifier une offre d'emploi
            </h2>
            <Button 
              onClick={onClose}
              className="bg-[var(--color-primary)] p-1 rounded-full absolute top-0 right-0 cursor-pointer" 
              children={<img src={Close} alt="close" />}
            />
          </div>
        
          <form onSubmit={handleSubmit} className="flex flex-col text-[var(--color-secondary)] gap-4">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="jobType" className="text-lg">
                Nom du poste
              </label>
              <div className="relative">
                <select 
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={(e) => setFormData({
                    ...formData, jobType: e.target.value
                  })}
                  className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] appearance-none w-full cursor-pointer"
                  required
                >
                  <option disabled value="">Choisir un poste</option>
                  <option value="fullstack">Dev Fullstack</option>
                  <option value="front">Dev Frontend</option>
                  <option value="back">Dev Backend</option>
                  <option value="manager">Project / Product Management</option>
                </select>
                <img 
                  src={Arrow}
                  alt="dropdown arrow"
                  className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 p-1 bg-[#F1EEFC] rounded-full"
                />
              </div>
              
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="companyName" className="text-lg">Entreprise</label>
              <input 
                type="text" 
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({
                  ...formData, companyName: e.target.value
                })}
                placeholder="Entreprise"
                className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] placeholder-[var(--color-secondary)]"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="location" className="text-lg">Ville</label>
              <input 
                type="text" 
                id="location"
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({
                  ...formData, location: e.target.value
                })}
                placeholder="Ville"
                className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] placeholder-[var(--color-secondary)]"
                required
              />
            </div>

            
            <div className="flex flex-col gap-2.5">
              <label htmlFor="contractType" className="text-lg">Type de contrat</label>
              <div className="relative ">
                <select 
                  id="contractType"
                  name="contractType"
                  value={formData.contractType}
                  onChange={(e) => setFormData({
                    ...formData, contractType: e.target.value
                  })}
                  className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] appearance-none w-full cursor-pointer"
                  required
                >
                  <option disabled value="">Type de contrat</option>
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                  <option value="stage">Stage</option>
                </select>
                <img 
                  src={Arrow}
                  alt="dropdown arrow"
                  className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 p-1 bg-[#F1EEFC] rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="salary" className="text-lg">Salaire</label>
              <input
                type="text" 
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={(e) => setFormData({
                  ...formData, salary: e.target.value
                })}
                placeholder="Salaire"
                className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] placeholder-[var(--color-secondary)]"
                required
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="remoteType" className="text-lg">Télétravail</label>
              <div className="relative">
                <select 
                  id="remoteType"
                  name="remoteType" 
                  value={formData.remoteType}
                  onChange={(e) => setFormData({
                    ...formData, remoteType: e.target.value
                  })}
                  className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] appearance-none w-full cursor-pointer"
                  required
                >
                  <option disabled value="">Type de télétravail</option>
                  <option value="fullRemote">Télétravail total</option>
                  <option value="partial">Télétravail partiel</option>
                  <option value="ponctual">Télétravail ponctuel</option>
                  <option value="">Non spécifié</option>
                </select>
                <img 
                  src={Arrow}
                  alt="dropdown arrow"
                  className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 p-1 bg-[#F1EEFC] rounded-full"
                />
              </div>
            </div>

            <div className="relative mt-8">
              <div className="absolute left-0 top-0">
                <Button 
                  onClick={handleDelete}
                  children="Supprimer"
                  className="text-[#FC573B] font-medium text-lg cursor-pointer hover:bg-[#FC573B] hover:text-white rounded-xl px-2 py-2 "
                />
              </div>
              
              <div className="mx-auto w-fit">
                <Button 
                  type="submit"
                  children="Enregistrer l'annonce"
                  className="bg-[var(--color-primary)] hover:bg-[#8661EC] text-white w-[219px] h-[38px] rounded-xl px-4 py-2 gap-2 shadow-button cursor-pointer"
                />
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default JobModal;
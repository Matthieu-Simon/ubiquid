import Button from "./Button";
import Close from "../../public/crossIcon.svg";
import Arrow from "../../public/arrow.svg";

const JobModal = ({ onClose }) => {
  return (
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
        
        <form className="flex flex-col text-[var(--color-secondary)] gap-4">
          <div className="flex flex-col gap-2.5">
            <label htmlFor="jobType" className="text-lg">
              Nom du poste
            </label>
            <div className="relative">
              <select 
                id="jobType"
                name="jobType"
                className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] appearance-none w-full cursor-pointer"
                required
              >
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
                className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] appearance-none w-full cursor-pointer"
                required
              >
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
                className="rounded-lg px-4 py-2.5 border border-[var(--color-primary)] text-[var(--color-secondary)] appearance-none w-full cursor-pointer"
                required
              >
                <option value="fullRemote">Télétravail total</option>
                <option value="partial">Télétravail partiel</option>
                <option value="ponctual">Télétravail ponctuel</option>
                <option value="null">Non spécifié</option>
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
                children="Supprimer"
                className="text-[#FC573B] font-medium text-lg cursor-pointer hover:bg-[#FC573B] hover:text-white rounded-xl px-2 py-2 "
              />
            </div>
            
            <div className="mx-auto w-fit">
              <Button 
                children="Enregistrer l'annonce"
                className="bg-[var(--color-primary)] hover:bg-[#8661EC] text-white w-[219px] h-[38px] rounded-xl px-4 py-2 gap-2 shadow-button cursor-pointer"
              />
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
};

export default JobModal;
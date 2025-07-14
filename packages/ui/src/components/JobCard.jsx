import Button from "./Button";
import Separator from "../../public/separator.svg"

const JobCard = ({ jobType, remoteType, companyName, location, contractType, salary, createdAt }) => {

  const formattedJob = (() => {
    if (jobType === "manager") return "Manager";
    const capitalized = jobType.charAt(0).toUpperCase() + jobType.slice(1);
    return `Dev ${capitalized}`;
  })();

  const formattedContract = (() => {
    if (!contractType) return "";
    if (contractType.toLowerCase() === "stage") return "Stage";
    return contractType.toUpperCase();
  })();

  const formattedRemote = (() => {
    if (remoteType === "partial") return "Télétravail partiel";
    if (remoteType === "fullRemote") return "Télétravail total";
    return null;
  })();

  const formattedSalary = (salary / 1000).toFixed(1);

  const daysAgo = Math.floor((Date.now() - new Date(createdAt)) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white p-5 mb-4 flex justify-between items-center rounded-[10px]">
      <div className="w-[384px] h-[76px] gap-6 flex items-center">
        <div className="h-20 w-20 rounded-[6px] p-5 gap-2.5 bg-[#F1EEFC] text-center">
          <span className="text-[#7650E0] text-4xl font-semibold">{companyName[0]}</span>
        </div>
        <div className="w-[284px] h-[62px] gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-medium text-lg text-[#0E0E2C] w-[119px]">
            {formattedJob}
            </span>
            {remoteType && (
              <span className="bg-[#F1EEFC] text-[#7650E0] font-normal w-[155px] rounded-xl px-2.5 py-2">{formattedRemote}</span>
            )}
          </div>
          <div className="w-[265px] flex justify-between gap-2 text-lg font-normal text-[#505053]">
            <span>{companyName}</span> - <span>{location}</span>
            <img src={Separator} alt="separator" className="w-20" /> 
            <span className="text-lg font-normal">
            {formattedContract}
            </span>
          </div>
        </div>
      </div>
      <div className="w-[327px] flex items-center gap-28">
        <div className="w-[110px] gap-3.5 flex flex-col">
          <span className="text-[#0E0E2C] text-lg font-normal w-16">
              Salaire
              <span className="text-[#7650E0] font-medium text-lg w-11">{formattedSalary}K</span>
          </span>
          
          <span className="text-[#505053]">il y'a {daysAgo} jours</span>
        </div>
        <Button 
          className="w-[105px] h-[38px] border border-[#7650E0] rounded-xl bg-[#E9E2FF] text-[#7650E0] font-medium text-lg gap-2"
          content="Modifier"
        />
      </div>
    </div>
  )
}

export default JobCard;
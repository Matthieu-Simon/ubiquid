import Button from "./Button";
import Separator from "../../public/separator.svg"

const JobCard = ({ jobType, remoteType, companyName, location, contractType, salary, createdAt }) => {

  const formattedJob = (() => {
    switch (jobType) {
      case "manager":
        return "Projet / Product Management";
      case "back":
        return "Dev Backend";
      case "front":
        return "Dev Frontend";
      case "fullstack":
        return "Dev Fullstack"
      default:
        return `Dev ${jobType.charAt(0).toUpperCase() + jobType.slice(1)}`;
    }
  })();

  const formattedContract = (() => {
    if (!contractType) return "";
    if (contractType.toLowerCase() === "stage") return "Stage";
    return contractType.toUpperCase();
  })();

  const { formattedRemote, remoteStyle } = (() => {
    switch (remoteType) {
      case "partial":
        return { formattedRemote: "Télétravail partiel", remoteStyle: "bg-[#F1EEFC] text-[#7650E0]"};
      case "fullRemote":
        return { formattedRemote: "Télétravail partiel", remoteStyle: "bg-[#E5F3FE] text-[#0074FF]"}
      case "ponctual":
        return { formattedRemote: "Télétravail partiel", remoteStyle: "bg-[#FFF8E5] text-[#F0BA1C]"}
      default:
        return { formattedRemote: "null", remoteStyle: ""}
    }
  })();

  const formattedSalary = (salary / 1000).toFixed(1);

  const daysAgo = Math.floor((Date.now() - new Date(createdAt)) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white p-5 mb-4 flex justify-between items-center rounded-[10px]">
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 rounded-[6px] p-5 gap-2.5 bg-[#F1EEFC] text-center">
          <span className="text-[#7650E0] text-4xl font-semibold">{companyName[0]}</span>
        </div>
        <div className="h-[62px] gap-2">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="font-medium text-lg text-[#0E0E2C]">
            {formattedJob}&nbsp;
            {remoteType && (
              <span className={`rounded-xl px-2.5 py-2 text-center ${remoteStyle}`}>{formattedRemote}</span>
            )}
            </span>
          </div>
          <div className="w-[265px] flex justify-between gap-2 text-lg text-[#505053]">
            <span>{companyName}</span> - <span>{location}</span>
            <img src={Separator} alt="separator" className="w-20" /> 
            <span>{formattedContract}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-28">
        <div className="w-[110px] gap-3.5 flex flex-col">
          <span className="text-[#0E0E2C] text-lg w-16">
              Salaire&nbsp;
              <span className="text-[#7650E0] font-medium text-lg w-11">{formattedSalary}K</span>
          </span>
          
          <span className="text-[#505053]">il y a {daysAgo} jours</span>
        </div>
        <Button 
          className="w-[105px] h-[38px] border border-[#7650E0] rounded-xl bg-[#E9E2FF] text-[#7650E0] font-medium text-lg gap-2 cursor-pointer"
          children="Modifier"
        />
      </div>
    </div>
  )
}

export default JobCard;
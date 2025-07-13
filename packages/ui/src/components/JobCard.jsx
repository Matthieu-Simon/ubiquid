import Button from "./Button";
import Separator from "../../public/separator.svg"

const JobCard = ({ job, remoteType, enterprise, location, contractType, salary, duration }) => {
  return (
    <div className="bg-white p-5 mb-4 flex justify-between items-center rounded-[10px]">
      <div className="w-[384px] h-[76px] gap-6 flex items-center">
        <div className="h-20 w-20 rounded-[6px] p-5 gap-2.5 bg-[#F1EEFC] text-center">
          <span className="text-[#7650E0] text-4xl font-semibold">T</span>
        </div>
        <div className="w-[284px] h-[62px] gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-medium text-lg text-[#0E0E2C] w-[119px]">{job}</span>
            <span className="bg-[#F1EEFC] text-[#7650E0] font-normal w-[155px] rounded-xl px-2.5 py-2">{remoteType}</span>
          </div>
          <div className="w-[265px] flex justify-between gap-2 text-lg font-normal text-[#505053]">
            <span>{enterprise}</span> - <span>{location}</span>
            <img src={Separator} alt="separator" className="w-20" /> 
            <span className="text-lg font-normal">{contractType}</span>
          </div>
        </div>
      </div>
      <div className="w-[327px] flex items-center gap-28">
        <div className="w-[110px] gap-3.5 flex flex-col">
          <span className="text-[#0E0E2C] text-lg font-normal w-16">
              Salaire
              <span className="text-[#7650E0] font-medium text-lg w-11">{salary}K</span>
          </span>
          
          <span className="text-[#505053]">il y'a {duration} jours</span>
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
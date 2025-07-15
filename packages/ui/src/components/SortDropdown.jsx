import Arrow from "../../public/arrow.svg";

const SortDropdown = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-normal text-[#0E0E2C]">Trier par :</span> 
      <div className="flex items-center gap-2 text-[#7650E0]">
        <span className="font-semibold">Date</span>
        <img src={Arrow} alt="open" className="w-3.5 h-2" /> 
      </div>
    </div>
  )
}

export default SortDropdown;
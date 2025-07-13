import Arrow from "../../public/arrow.svg";

const FilterDropdown = ({ theme }) => {
  return (
    <div className="flex justify-between items-center gap-1 w-[128px] h-[41px] rounded-[8px] px-3 py-2.5 bg-white shadow-md">
      <span className="font-medium text-[#0E0E2C]">{theme}</span>
      <div className="flex items-center justify-center bg-[#F1EEFC] w-5 h-5 rounded-full">
        <img src={Arrow} alt="open" className="w-2.5 h-1.5" />
      </div>
    </div>
  )
}

export default FilterDropdown;
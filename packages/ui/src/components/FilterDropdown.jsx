import Arrow from "../../public/arrow.svg";

const FilterDropdown = ({ 
  theme, 
  options, 
  selected = [], 
  onChange, 
  isOpen, 
  onToggle 
}) => {
  const getModalWidth = () => {
    if (theme === "Poste" || theme === "Remote") {
      return "w-[324px]";
    } else if (theme === "Contrat") {
      return "w-[119px]";
    }
    return "w-[324px]";
  };

  return (
    <div className="relative flex items-center justify-between w-[128px] h-[41px] rounded-[8px] px-3 py-2.5 bg-white shadow-md cursor-pointer">
      <button 
        className="flex items-center gap-8 text-[#7650E0] font-semibold" 
        onClick={() => onToggle(theme)}
      >
        {theme}
        <img src={Arrow} alt="open" className="w-3.5 h-2" />
      </button>
      

      {isOpen && (
        <div className={`absolute ${getModalWidth()} top-12 left-0 bg-white rounded shadow-md px-4 py-2 gap-10 z-10`}>
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => onChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown;
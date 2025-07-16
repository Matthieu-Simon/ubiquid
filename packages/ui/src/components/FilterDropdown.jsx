import Arrow from "../../public/arrow.svg";
import Check from "../../public/check.svg";
import Button from "./Button";

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
    <div className="relative flex items-center justify-between h-[41px] rounded-[8px] px-3 py-2.5 bg-white shadow-md">
      <Button className="flex items-center gap-8 text-[#7650E0] font-semibold" 
        onClick={() => onToggle(theme)}>
        {theme}
        <img src={Arrow} alt="open" className="w-3.5 h-2 cursor-pointer" />
      </Button>

      {isOpen && (
        <div className={`absolute ${getModalWidth()} top-12 left-0 bg-white rounded shadow-md px-4 py-2 gap-10 z-10`}>
          {options.map((option) => (
            <label key={option} className="relative flex items-center gap-2 py-1 cursor-pointer">
              <input
                type="checkbox"
                id={option}
                checked={selected.includes(option)}
                onChange={() => onChange(option)}
                className="peer hidden"
              />
              <span className="w-4 h-4 flex items-center justify-center border border-[#7650E0] rounded-sm bg-white peer-checked:bg-[#7650E0]">
                <img 
                  src={Check}
                  alt="check"
                  className="w-3 h-3  peer-checked:block"
                />
              </span>
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown;
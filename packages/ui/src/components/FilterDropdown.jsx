import { useState } from "react";
import Arrow from "../../public/arrow.svg";

const FilterDropdown = ({ theme, options, selected = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between w-[128px] h-[41px] rounded-[8px] px-3 py-2.5 bg-white shadow-md cursor-pointer">
      <button 
        className="flex items-center gap-8 text-[#7650E0] font-semibold" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme}
        <img src="/arrow.svg" alt="open" className="w-3.5 h-2" />
      </button>
      

      {isOpen && (
        <div className="absolute top-8 left-0 bg-white border rounded shadow-md p-2 z-10">
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
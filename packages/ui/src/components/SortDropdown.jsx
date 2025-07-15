import { useState } from "react";
import Arrow from "../../public/arrow.svg";
import Button from "./Button";

const SortDropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Date");

  const sortOptions = [
    { value: "date_desc", label: "Date" },
    { value: "salary_desc", label: "Salaire" }
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option.label);
    onSortChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center gap-2">
      <span className="text-[#0E0E2C]">Trier par :</span>

      <div 
        className="flex items-center gap-2 text-[#7650E0] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{selectedSort}</span>
        <img src={Arrow} alt="open" className="w-3.5 h-2" /> 
      </div>

      {isOpen && (
        <div className="absolute flex flex-col top-8 right-0 bg-white rounded shadow-md py-2 pr-6 pl-4 z-10 min-w-[120px] ">
          {sortOptions.map((option) => (
            <Button 
              key={option.value}
              className="hover:text-[#7650E0] cursor-pointer text-left"
              onClick={() => handleSortSelect(option)}
              content={option.label}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown;
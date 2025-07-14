import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";
import TagFilter from "./TagFilter";

const filterOptions = {
  Poste: ["Dev Frontend", "Dev Backend", "Dev Fullstack", "Project / Product Management"],
  Contrat: ["CDI", "CDD", "Stage"],
  Remote: ["Télétravail total", "Télétravail partiel", "Télétravail ponctuel", "Non spécifié"],
};

const FilterContent = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Poste: [],
    Contrat: [],
    Remote: []
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[category];
      const alreadySelected = currentValues.includes(value);

      const updatedValues = alreadySelected ? currentValues.filter((v) => v !== value) : [...currentValues, value];

      return {
        ...prev,
        [category]: updatedValues
      };
    });
  };

  const removeTag = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value)
    }));
  };

  return (
    <div>
      <div className="flex justify-between py-2.5">
        <div className="flex gap-5">
          {Object.entries(filterOptions).map(([category, options]) => (
            <FilterDropdown 
              key={category}
              theme={category}
              options={options}
              selected={selectedFilters[category]}
              onChange={(value) => handleFilterChange(category, value)}
            />
          ))}
        </div>
        <SortDropdown />
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {Object.entries(selectedFilters).flatMap(([category, values]) => values.map((value) => (
          <TagFilter 
            key={`${category}-${value}`}
            content={value} 
            onRemove={() => removeTag(category, value)}
          />
        )))}
      </div>
    </div>
  )
}

export default FilterContent;
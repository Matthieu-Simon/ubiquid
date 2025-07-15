import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";
import TagFilter from "./TagFilter";

const FilterContent = () => {
  return (
    <div>
      <div className="flex justify-between py-2.5">
        <div className="flex gap-5">
          <FilterDropdown theme="Poste" />
          <FilterDropdown theme="Contrat" />
          <FilterDropdown theme="Télétravail" />
        </div>
        <SortDropdown />
      </div>
      <TagFilter content="Dev Fullstack" />
    </div>
  )
}

export default FilterContent;
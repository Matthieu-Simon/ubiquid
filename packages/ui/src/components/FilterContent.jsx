import SortDropdown from "./SortDropdown";
import TagFilter from "./TagFilter";

const FilterContent = () => {
  return (
    <div>
      <div>
        <SortDropdown />
      </div>
      <TagFilter content="Dev Fullstack" />
    </div>
  )
}

export default FilterContent;
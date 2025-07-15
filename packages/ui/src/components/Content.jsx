import FilterContent from "./FilterContent";
import Header from "./Header";
import JobContent from "./JobContent";

const Content = () => {
  return (
    <main className="p-12 m-auto">
      <Header />
      <FilterContent />
      <JobContent />
    </main>
  )
}

export default Content;
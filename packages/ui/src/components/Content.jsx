import { useState } from "react";
import FilterContent from "./FilterContent";
import Header from "./Header";
import JobContent from "./JobContent";
import JobModal from "./JobModal";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="p-12 m-auto">
      <Header onAddJob={openModal} />
      <FilterContent />
      <JobContent onEditJob={openModal} />
      {isModalOpen && <JobModal onClose={closeModal} />}
    </main>
  )
}

export default Content;
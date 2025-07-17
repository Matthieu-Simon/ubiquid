import { useEffect, useState } from "react";
import FilterContent from "./FilterContent";
import Header from "./Header";
import JobContent from "./JobContent";
import JobModal from "./JobModal";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = (job = null) => {
    setSelectedJob(job);
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false)
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:3000/jobs/list");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main className="p-12 m-auto">
      <Header onAddJob={openModal} />
      <FilterContent />
      <JobContent onEditJob={openModal} jobs={jobs} isloading={isLoading} />
      {isModalOpen && (
        <JobModal 
          job={selectedJob}
          onClose={closeModal} 
          fetchJobs={fetchJobs}
        />
      )}
    </main>
  )
}

export default Content;
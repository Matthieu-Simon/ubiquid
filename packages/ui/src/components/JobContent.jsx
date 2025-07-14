import { useState, useEffect } from "react";
import JobCard from "./JobCard"

const JobContent = () => {
  const [jobs, setJobs] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/jobs/list")
    .then((res) => res.json())
    .then((data) => {
      setJobs(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des jobs :", error);
      setIsLoading(false);
    });
  }, []);

  if (isloading) return <p>Chargement...</p>;

  return (
    <div className="py-5">
      {jobs.map((job) => (
        <JobCard 
          key={job.id}
          jobType={job.jobType.match(/(fullstack|front|back)/i)
        ? `Dev ${job.jobType}`
        : job.jobType}
          remoteType={job.remoteType}
          companyName={job.companyName}
          location={job.location}
          contractType={job.contractType}
          salary={(job.salary / 1000).toFixed(1) + "K"}
          duration={Math.floor((Date.now() - new Date(job.createdAt)) / (1000 * 60 * 60 * 24))}
        />
      ))}
    </div>
  )
}

export default JobContent;
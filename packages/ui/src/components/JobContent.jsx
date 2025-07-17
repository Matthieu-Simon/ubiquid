import JobCard from "./JobCard";

const JobContent = ({ onEditJob, jobs, isLoading }) => {
  if (isLoading) return <p>Chargement...</p>;

  return (
    <div className="py-5 mt-5">
      {jobs.map((job) => (
        <JobCard 
          key={job.id}
          jobType={job.jobType}
          remoteType={job.remoteType}
          companyName={job.companyName}
          location={job.location}
          contractType={job.contractType}
          salary={job.salary}
          createdAt={job.createdAt}
          onEdit={() => onEditJob(job)}
        />
      ))}
    </div>
  )
}

export default JobContent;
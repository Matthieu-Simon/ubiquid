import JobCard from "./JobCard"

const JobContent = () => {
  return (
    <div className="py-5">
      <JobCard 
        job="Dev Fullstack"
        remoteType="Télétravail Partiel"
        enterprise="Tiktok" 
        location="Paris"
        contractType="CDD" 
        salary="35.5"
        duration="2"
      />
      <JobCard 
        job="Dev Fullstack"
        remoteType="Télétravail Partiel"
        enterprise="Tiktok" 
        location="Paris"
        contractType="CDD" 
        salary="35.5"
        duration="2"
      />
    </div>
  )
}

export default JobContent;
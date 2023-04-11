import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const JobCatagory = () => {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetch('jobData.json')
    .then(res=> res.json())
    .then(data => setJobs(data))
  },[])
  // console.log(jobs);
  return (
    <div className="my-container my-10">
      <h2 className="text-center font-bold text-3xl">Job Category List</h2>
      <p className="text-center text-gray-500 mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {
          jobs.map(job=> <Job
          key={job.id}
          job={job}
          />)
        }
      </div>
    </div>
  );
};

export default JobCatagory;

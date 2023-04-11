import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleJobDeteils from '../singleJobDeteils';

const Jobdeteils = () => {

  const Job_Deteils = useLoaderData()
  let JobId = useParams()
  const [jobDeteils, setJobDeteils] = useState([])
  useEffect(()=> {
    const saveJob = [];
    const jobDeteils = Job_Deteils.find(job => job.id == JobId.id)
    if(jobDeteils){
      saveJob.push(jobDeteils)
      setJobDeteils(saveJob)
    }
  },[])
  return (
    <div>
      {
        jobDeteils.map(job=> <SingleJobDeteils key={job.id}  job={job}/>)
      }
    </div>
  );
};

export default Jobdeteils;
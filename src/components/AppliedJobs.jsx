import React, { useContext, useEffect, useState } from 'react';
import { getJobApplied } from '../utilities/fakedb';
import { JobsContext } from '../App';
import AppliedJobData from './AppliedJobData/AppliedJobData';

const AppliedJobs = () => {
  const [localData, setLocalData] = useState([]);
  const [jobData] = useContext(JobsContext)

  useEffect(()=> {
    const saveJob = []
    // const jobid = jobData.find(job=> job.id == localdata.find())
  },[])
  return (
    <div>
      <h2 className='text-center my-20 font-bold text-4xl'>Applied Jobs</h2>
      <div>
      {
        jobData.map(job=> <AppliedJobData key={job.id} job={job}/>)
      }
      </div>
    </div>
  );
};

export default AppliedJobs;
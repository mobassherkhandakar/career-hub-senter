import React, { useContext, useEffect, useState } from 'react';
import { getJobApplied } from '../utilities/fakedb';
import { JobsContext } from '../App';

const AppliedJobs = () => {
  const [localData, setLocalData] = useState([]);
  const [jobData] = useContext(JobsContext)
const remenig = jobData.map(job=> job.id);
// console.log(remenig.id);

  // useEffect(()=> {
  //   const storedData = getJobApplied();
  //   if(storedData){

  //   }
  // },[])
  return (
    <div>
      <h1>this is a Applied Jobs page</h1>
    </div>
  );
};

export default AppliedJobs;
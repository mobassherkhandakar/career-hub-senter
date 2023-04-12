import React, { useContext, useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { JobsContext } from "../App";
import AppliedJobData from "./AppliedJobData/AppliedJobData";

const AppliedJobs = () => {
  const [jobData] = useContext(JobsContext);
  const [filter,setFilter] = useState([])
  const [savelocal, setSavelocal] = useState([]);
  useEffect(() => {
    const getLocalDB = getShoppingCart();
    let saveData = [];
    for (const id in getLocalDB) {
      const newLocalData = jobData.find((data) => data.id == id);
      if (newLocalData) {
        saveData.push(newLocalData);
      }
    }
    setSavelocal(saveData);
  }, [jobData]);
  const handleFilter = (e) => {
    let filterItem = e.target.value;
    let filterJob;
    if(filterItem === 'All'){
      setFilter(savelocal)
    }
    else if(filterItem === 'Remote'){
      filterJob= savelocal.filter(sl => sl.remote_or_onsite === 'Remote' )
      setFilter(filterJob)
    }
    else if(filterItem === 'Onsite'){
      filterJob = savelocal.filter(sl => sl.remote_or_onsite=== 'Onsite')
      setFilter(filterJob)
    }

  }

  return (
    <div>
      <h2 className="text-center my-20 font-bold text-4xl">Applied Jobs</h2>
      <div>
      <div className="text-end w-4/5 ">
        <select onChange={handleFilter} name="filter" >
          <option selected>Filter by</option>
          <option value="All">All</option>
          <option value="Onsite">Onsite</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
        {filter.map((job) => (
          <AppliedJobData key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

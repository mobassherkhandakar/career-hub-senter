import React, { useContext, useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { JobsContext } from "../App";
import AppliedJobData from "./AppliedJobData/AppliedJobData";

const AppliedJobs = () => {
  const [jobData] = useContext(JobsContext);
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
  return (
    <div>
      <h2 className="text-center my-20 font-bold text-4xl">Applied Jobs</h2>
      <div>
      <div className="text-end w-4/5 ">
        <select name="filter" >
          <option value="All">Filter by</option>
          <option value="All">All</option>
          <option value="onsite">Onsite</option>
          <option value="onsite">Remote</option>
        </select>
      </div>
        {savelocal.map((job) => (
          <AppliedJobData key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

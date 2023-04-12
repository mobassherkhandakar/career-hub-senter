import React, { useContext, useState } from "react";
import { JobsContext } from "../../App";
import SingleJob from "../SingleJob/SingleJob";
import { Button } from "flowbite-react";

const Futured = () => {
  const [jobData] = useContext(JobsContext);
  const [showAll, setShowAll] = useState(false)
  const handelShowAll =()=> {
    setShowAll(true)
  }

  return (
    <div className="my-conatiner">
      <h1 className="text-center font-bold text-3xl">Featured Jobs</h1>
      <p className="text-center text-gray-500 mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid my-container justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {
          jobData?.slice(0, showAll ? 6 : 4).map(sj => <SingleJob
          key={sj.id}
          singleJob={sj}
          />)
        }
      </div>
      <div className="flex justify-center my-10">
        {
          !showAll && <span onClick={handelShowAll}><Button gradientDuoTone="purpleToBlue">Show More</Button></span>
        }
      </div>
    </div>
  );
};

export default Futured;

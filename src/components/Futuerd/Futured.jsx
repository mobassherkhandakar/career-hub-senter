import React, { useContext } from "react";
import { JobsContext } from "../../App";
import SingleJob from "../SingleJob/SingleJob";
import { Button } from "flowbite-react";

const Futured = () => {
  const [jobData, setJobData] = useContext(JobsContext);

  return (
    <div className="my-conatiner">
      <h1 className="text-center font-bold text-3xl">Featured Jobs</h1>
      <p className="text-center text-gray-500 mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid my-container justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {
          jobData.map(sj => <SingleJob
          key={sj.id}
          singleJob={sj}
          />)
        }
      </div>
      <div className="flex justify-center my-10">
        <Button gradientDuoTone="purpleToBlue">Show More</Button>
      </div>
    </div>
  );
};

export default Futured;

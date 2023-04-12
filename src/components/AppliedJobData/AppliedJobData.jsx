import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJobData = ({ job }) => {
  const {
    id,
    title,
    company_name,
    company_logo,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;
  return (
    <>
    
    <div className="w-3/5 mx-auto border-4 my-4 rounded-md flex justify-between items-center  h-auto p-5 ">
      <div className="flex items-center gap-5">
        <div>
          <img src={company_logo} alt="" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-5 my-2">
            <p className="my-outline">{remote_or_onsite}</p>
            <p className="my-outline">{fulltime_or_parttime}</p>
          </div>
          <div className="flex gap-4 items-center text-gray-500 my-5">
            <p className="flex justify-between items-center">
              <MapPinIcon className="w-7 text-[#757575]" />
              {location}
            </p>
            <p className="flex mt-2 items-center">
              <CurrencyDollarIcon className="w-5 text-[#757575]" />
              <span className="font-semibold text-xl">Salary:</span> &nbsp;{" "}
              {salary}
            </p>
          </div>
        </div>
      </div>
      <div>
          <Link to={`/jobdeteils/${id}`}>
            <Button gradientDuoTone="purpleToBlue">View Details</Button>
          </Link>
        </div>
    </div>
    </>
  );
};

export default AppliedJobData;

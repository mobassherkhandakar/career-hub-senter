import { Button } from "flowbite-react";
import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const SingleJob = ({ singleJob }) => {
  const {
    id,
    company_logo,
    title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = singleJob;
  return (
    <div className="border-2 p-10 h-auto">
      <div>
        <img src={company_logo} alt="" />
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <h3  className="text-gray-500">{company_name}</h3>
      <div className="flex gap-5 my-3">
        <Button outline={true} gradientDuoTone="purpleToBlue">
          {remote_or_onsite}
        </Button>
        <Button outline={true} gradientDuoTone="purpleToBlue">
          {fulltime_or_parttime}
        </Button>
      </div>
      <div className="flex gap-9 text-gray-500 my-5">
        <p className="flex justify-between items-center">
          <MapPinIcon className="w-7 text-[#757575]" />
          {location}
        </p>
        <p className="flex justify-between items-center">
          <CurrencyDollarIcon className="w-7 text-[#757575]" />
          {salary}
        </p>
      </div>
      <div>
        <Button gradientDuoTone="purpleToBlue">View Details</Button>
      </div>
    </div>
  );
};

export default SingleJob;

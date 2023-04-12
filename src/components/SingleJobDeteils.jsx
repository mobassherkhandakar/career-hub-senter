import "./SingleJobDeteils.css";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakedb";

const SingleJobDeteils = ({ job }) => {
  const {
    id,
    description,
    responsibility,
    salary,
    educational_requirements,
    experiences,
    contact,
    title,
    location,
  } = job;

  const localstorageHandeler = (id) => {
    addToDb(id);
  };

  return (
    <div className="mt-15">
      <h1 className="text-center font-bold text-4xl ">Job Details</h1>

      <div className="my-card flex mt-20 justify-center">
        <div className="jobDeteils w-[840px] ">
          <p className="py-3">
            <span className="font-semibold text-xl ">Description: </span>
            {description}
          </p>
          <p className="py-3">
            {" "}
            <span className="font-semibold text-xl ">Responsibility: </span>
            {responsibility}
          </p>
          <p className="py-3">
            {" "}
            <span className="font-semibold text-xl ">
              Educational Requirements:{" "}
            </span>
            <br />
            {educational_requirements}
          </p>
          <p className="py-3">
            {" "}
            <span className="font-semibold text-xl ">
              Experiences:{" "}
            </span> <br /> {experiences}
          </p>
        </div>
        <div className="jobInfo  w-96">
          <div className="information p-5">
            <div>
              <p className="font-semibold  text-xl divide-y ">Job Details</p>
            </div>
            <hr />
            <p className="flex mt-2 items-center">
              <CurrencyDollarIcon className="w-5 text-[#757575]" />
              <span className="font-semibold text-xl">Salary:</span> &nbsp;{" "}
              {salary}
            </p>
            <p className="flex mt-2 items-center">
              <CalendarDaysIcon className="w-5 text-[#757575]" />
              <span className="font-semibold text-xl">
                Job Title:
              </span> &nbsp; {title}
            </p>
            <div>
              <p className="font-semibold py-5  text-xl divide-y ">
                Contract information
              </p>
            </div>
            <hr />
            <p className="flex mt-2 items-center">
              <PhoneIcon className="w-5 text-[#757575]" />
              <span className="font-semibold text-xl">Phone:</span> &nbsp;{" "}
              {contact.phone}
            </p>
            <p className="flex mt-2 items-center">
              <EnvelopeIcon className="w-5 text-[#757575]" />
              <span className="font-semibold text-xl">Email:</span> &nbsp;{" "}
              {contact.email}
            </p>
            <p className="flex mt-2 items-center">
              <MapPinIcon className="w-5 text-[#757575]" />
              <span className="font-semibold text-xl">
                Address:
              </span> &nbsp; {location}
            </p>
          </div>
          <div className=" w-full  mt-3 ">
            <p
              onClick={() => localstorageHandeler(id)}
              className=" cursor-pointer w-full flex my-btn justify-center items-center text-center btn"
            >
              Apply Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobDeteils;

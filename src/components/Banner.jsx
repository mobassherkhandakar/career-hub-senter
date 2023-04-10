import { Button } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="my-container banner ">
      <div className="banner-conatiner flex justify-between md:flex-row sm:flex-col items-center">
        <div>
          <h2 className="text-7xl w-auto font-bold">One Step Closer To Your Dream Job</h2>
          <p className="my-5 text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <p><Button gradientDuoTone="purpleToBlue">Get Started</Button></p>
        </div>
        <div className="w-full">
          <img className="w-screen" src="../../public/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

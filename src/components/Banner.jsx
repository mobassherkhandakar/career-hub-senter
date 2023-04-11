import { Button } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="my-container banner ">
      <div className="banner-conatiner grid justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div>
          <h2 className=" text-3xl md:text-4xl lg:text-7xl  font-bold">One Step Closer To Your Dream Job</h2>
          <p className="my-5 w-full text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <p><Button gradientDuoTone="purpleToBlue">Get Started</Button></p>
        </div>
        <div className="w-full">
          <img className="w-screen" src="https://i.ibb.co/kcgSrvw/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

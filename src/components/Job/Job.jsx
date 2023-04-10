import React from 'react';
import './Job.css'

const Job = ({job}) => {
  const {jobs,logo, title} = job;
  // console.log(logo);
  return (
    <div className='card border-2 p-10 '>
      <img className='w-14 h-14 mb-4' src={logo} alt="" />
      <h2 className='font-semibold text-xl'>{title}</h2>
      <p className='text-gray-500'>{jobs}</p>
    </div>
  );
};

export default Job;
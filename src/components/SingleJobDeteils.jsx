import React from 'react';

const SingleJobDeteils = ({job}) => {
  const { company_logo,title} = job; 
  console.log(company_logo);
  // const {id, company_logo, title,company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = job; 
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default SingleJobDeteils;
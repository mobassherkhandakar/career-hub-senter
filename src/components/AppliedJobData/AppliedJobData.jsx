import React from 'react';

const AppliedJobData = ({job}) => {
  const {id, title, company_name,company_logo,remote_or_onsite,fulltime_or_parttime,salary,location} = job;
  return (
    <div className='w-3/5 mx-auto border-4 rounded-md  h-64 mt-6'>
      <h1>{title}</h1>
    </div>
  );
};

export default AppliedJobData;
import React from 'react';
import Banner from './Banner';
import JobCatagory from './JobCatagory/JobCatagory';
import Futured from './Futuerd/Futured';

const Home = () => {
  return (
    <div>
      <Banner/>
      <JobCatagory/>
      <Futured/>
    </div>
  );
};

export default Home;
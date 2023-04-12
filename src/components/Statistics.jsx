import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const data = [
  {
    name: "Assinment 1",
    marks: 57,
  },
  {
    name: "Assinment 2",
    marks: 60,
  },
  {
    name: "Assinment 3",
    marks: 60,
  },
  {
    name: "Assinment 4",
    marks: 58,
  },
  {
    name: "Assinment 5",
    marks: 60,
  },
  {
    name: "Assinment 6",
    marks: 45,
  },
  {
    name: "Assinment 7",
    marks: 60,
  }
];
const Statistics = () => {
  return (
    <div className='my-container'>
      <h1 className='text-center font-bold text-5xl my-20'>Statistics</h1>
      <div>
      <AreaChart
      width={1250}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
      </div>
      <p className='text-center font-semibold text-xl my-8'>Fig: All Assignment Marks of the Course</p>
    </div>
  );
};

export default Statistics;
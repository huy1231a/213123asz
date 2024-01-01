"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Finance = () => {
  return (
    <div
      className="bg-white p-6 rounded-2xl"
      style={{ width: 520, height: 562 }}
    >
      <div className="flex justify-between p-1">
        <div className="text-2xl font-bold text-[#303972]">School Finance</div>
        <div className="flex gap-4">
          <div className="flex gap-3 justify-center items-start">
            <div className="stroke-2 w-3 h-3 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  fill="white"
                  stroke="#FCC43E"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#A098AE] text-sm font-normal">This Week</p>
              <h1 className="text-[#303972] font-bold text-lg">1.245</h1>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-start">
            <div className="stroke-2 w-3 h-3 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <circle
                  cx="6.07104"
                  cy="6.5"
                  r="4.5"
                  fill="white"
                  stroke="#FB7D5B"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#A098AE] text-sm font-normal">Last Week</p>
              <h1 className="text-[#303972] font-bold text-lg">1.356</h1>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#FB7D5B" />
          <Bar dataKey="uv" fill="#FCC43E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Finance;

"use client";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const data = [
  {
    name: "Jan",
    ThisWeek: 4000,
    LastWeek: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    ThisWeek: 3000,
    LastWeek: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    ThisWeek: 2000,
    LastWeek: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    ThisWeek: 2780,
    LastWeek: 3908,
    amt: 2000,
  },
  {
    name: "May",
    ThisWeek: 1890,
    LastWeek: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    ThisWeek: 2390,
    LastWeek: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    ThisWeek: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    ThisWeek: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    ThisWeek: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    ThisWeek: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    ThisWeek: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    ThisWeek: 3490,
    LastWeek: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <>
      <div
        className="bg-white p-5 rounded-2xl mt-6"
        style={{ width: 1080, height: 479 }}
      >
        <div className="flex justify-between p-5">
          <div className="text-[#303972] text-2xl font-bold">
            School Performance
          </div>
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
        <ResponsiveContainer width="100%" height="75%">
          <LineChart
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
            <Line
              type="monotone"
              dataKey="ThisWeek"
              stroke="#FCC43E"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="LastWeek" stroke="#FB7D5B" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;

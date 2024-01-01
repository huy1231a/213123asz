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
import FooterFinace from "./uiLast";

const Finance = () => {
  const data = [
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
  return (
    <>
      <div className="flex gap-8 p-5">
        <div className="w-[360px] bg-white h-[172px] rounded-2xl flex justify-center items-center">
          <div className="flex gap-6 items-center justify-center">
            <div className="w-[72px] h-[72px] bg-[#4D44B5] rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_18_602)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.9288 38.75H8.75C6.67875 38.75 5 37.0713 5 35V24.5863C5 22.7738 6.29625 21.2213 8.07875 20.8975C10.7212 20.4163 15.2775 19.5875 17.855 19.12C19.2737 18.8612 20.7263 18.8612 22.145 19.12C24.7225 19.5875 29.2788 20.4163 31.9213 20.8975C33.7038 21.2213 35 22.7738 35 24.5863C35 27.3125 35 32.0825 35 35C35 37.0713 33.3212 38.75 31.25 38.75H17.9288ZM29.785 23.05L29.79 23.0563C30.0088 23.3838 30.06 23.795 29.9287 24.1662L29.0462 26.6662C28.9312 26.9925 28.685 27.2575 28.3675 27.3963L26.7075 28.12L27.3675 29.4412C27.5525 29.81 27.5425 30.2462 27.3425 30.6075L24.2075 36.25H31.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L29.785 23.05ZM26.3663 22.4275L21.6975 21.5788C20.575 21.375 19.425 21.375 18.3025 21.5788L13.6337 22.4275L12.6363 23.9238L13.13 25.3213L15.5 26.3537C15.8138 26.4912 16.0575 26.7512 16.175 27.0737C16.2925 27.3962 16.2712 27.7525 16.1175 28.0588L15.1625 29.9688L18.6525 36.25H21.3475L24.8375 29.9688L23.8825 28.0588C23.7288 27.7525 23.7075 27.3962 23.825 27.0737C23.9425 26.7512 24.1862 26.4912 24.5 26.3537L26.87 25.3213L27.3638 23.9238L26.3663 22.4275ZM10.215 23.05L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25H15.7925L12.6575 30.6075C12.4575 30.2462 12.4475 29.81 12.6325 29.4412L13.2925 28.12L11.6325 27.3963C11.315 27.2575 11.0688 26.9925 10.9538 26.6662L10.0712 24.1662C9.94 23.795 9.99125 23.3838 10.21 23.0563L10.215 23.05ZM28.75 30V32.5C28.75 33.19 29.31 33.75 30 33.75C30.69 33.75 31.25 33.19 31.25 32.5V30C31.25 29.31 30.69 28.75 30 28.75C29.31 28.75 28.75 29.31 28.75 30ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_602">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <p className="text-lg font-normal text-[#A098AE]">
                Total Students
              </p>
              <h1 className="text-4xl font-bold leading-normal text-[#303972]">
                932
              </h1>
              <p className="text-lg font-normal text-[#A098AE]">
                <span className="text-[#4CBC9A] font-semibold">+10%</span> than
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] bg-white h-[172px] rounded-2xl flex justify-center items-center">
          <div className="flex gap-6 items-center justify-center">
            <div className="w-[72px] h-[72px] bg-[#FB7D5B] rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_18_611)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 35C5 37.0713 6.67875 38.75 8.75 38.75H31.25C33.3212 38.75 35 37.0713 35 35C35 32.0825 35 27.3125 35 24.5863C35 22.7738 33.7038 21.2213 31.9213 20.8975C29.2788 20.4163 24.7225 19.5875 22.145 19.12C20.7263 18.8612 19.2737 18.8612 17.855 19.12C15.2775 19.5875 10.7212 20.4163 8.07875 20.8975C6.29625 21.2213 5 22.7738 5 24.5863V35ZM22.885 21.795L24.7612 28.9288C25.0075 29.865 24.6775 30.8588 23.92 31.4638C23.28 31.9738 22.2713 32.7788 21.5713 33.3388C20.6525 34.0713 19.3475 34.0713 18.4287 33.3388C17.7287 32.7788 16.72 31.9738 16.08 31.4638C15.3225 30.8588 14.9925 29.865 15.2388 28.9288L17.115 21.795L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25C13.98 36.25 26.02 36.25 31.25 36.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L22.885 21.795ZM20.2038 21.4288C20.0675 21.425 19.9325 21.425 19.7962 21.4288L17.6663 29.5312L19.9887 31.3837C19.995 31.39 20.005 31.39 20.0113 31.3837L22.3337 29.5312L20.2038 21.4288ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_611">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <p className="text-lg font-normal text-[#A098AE]">
                Total Students
              </p>
              <h1 className="text-4xl font-bold leading-normal text-[#303972]">
                932
              </h1>
              <p className="text-lg font-normal text-[#A098AE]">
                <span className="text-[#FF4550] font-semibold">-0,5% </span>{" "}
                than last month
              </p>
            </div>
          </div>
        </div>
        <div className="w-[675px] bg-white h-[172px] rounded-2xl flex justify-center items-center">
          <div className="flex gap-6 items-center justify-center">
            <div className="w-[72px] h-[72px] bg-[#FCC43E] rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M36.2365 21.8435C33.9956 21.0315 31.5096 21.212 29.4077 22.3374L25.9812 23.8788C25.7043 22.3007 24.4923 21.1148 22.9963 21.0692C22.9875 21.069 17.8587 21.0111 17.8587 21.0111C13.7535 19.885 11.0862 21.332 9.56458 22.7579C9.25338 23.0496 8.9797 23.3498 8.73885 23.646C8.32825 23.2038 7.60347 23.0856 7.07492 23.3762L2.41928 25.9354C1.81543 26.2674 1.5527 26.9956 1.80594 27.6358L6.35586 39.1377C6.65483 39.8934 7.57364 40.2274 8.29056 39.8333L12.9462 37.2742C13.3826 37.0343 13.6395 36.5873 13.6536 36.1162H20.6022C21.7356 36.1162 22.8546 35.8185 23.8382 35.2553C23.8382 35.2553 36.9065 27.7589 36.9803 27.6919C38.8104 26.027 38.8668 22.7966 36.2365 21.8435C37.2858 22.2237 33.9956 21.0315 36.2365 21.8435ZM8.33218 36.688L4.7968 27.7508L7.03304 26.5216L10.5684 35.4588L8.33218 36.688ZM35.2316 25.5773L22.4747 32.8826C21.9054 33.2087 21.2578 33.381 20.6019 33.381H12.6919L10.036 26.667C10.2636 26.2034 10.7117 25.4342 11.4394 24.7522C12.93 23.3555 14.8946 22.998 17.2791 23.6898C17.3983 23.7244 17.5218 23.7427 17.6459 23.7441L22.918 23.8034C23.0526 23.815 23.3011 24.1143 23.3011 24.5679C23.3011 25.035 23.0445 25.3327 22.9103 25.3327H17.7302V28.0679H22.9103C23.552 28.0679 24.1492 27.8509 24.6463 27.4791L30.5779 24.8109C30.6094 24.7968 30.6401 24.7815 30.6704 24.765C32.0933 23.9914 33.7815 23.8636 35.3018 24.4145C35.9035 24.6327 35.4688 25.3364 35.2316 25.5773ZM27 19.7079C21.5669 19.7079 17.1467 15.2874 17.1467 9.85393C17.1467 4.42051 21.5668 0 27 0C32.4331 0 36.8532 4.42051 36.8532 9.85393C36.8532 15.2874 32.433 19.7079 27 19.7079ZM27 2.73521C23.0775 2.73521 19.8864 5.92863 19.8864 9.85393C19.8864 13.7792 23.0776 16.9727 27 16.9727C30.9225 16.9727 34.1136 13.7791 34.1136 9.85393C34.1136 5.92872 30.9224 2.73521 27 2.73521Z"
                  fill="white"
                />
                <path
                  d="M27.6362 8.73923C26.5469 8.29188 26.4627 8.09966 26.4627 7.87684C26.4627 7.73453 26.5333 7.40368 27.1876 7.40368C27.7862 7.40368 28.532 7.73966 29.058 8.0859L29.7897 6.16795C29.2673 5.83539 28.6324 5.54966 28.0388 5.45829V4.21103H26.0879V5.57966C24.9289 5.94496 24.2147 6.87146 24.2147 8.02479C24.2147 9.55231 25.4368 10.2343 26.6304 10.6991C27.5841 11.0828 27.664 11.3765 27.664 11.6217C27.664 11.9989 27.3164 12.2426 26.7785 12.2426C26.077 12.2426 25.2614 11.838 24.6903 11.3952L23.9863 13.3439C24.5686 13.7954 25.2426 14.0933 26.0009 14.2045V15.4969H27.964V14.0901C29.1592 13.7095 29.9242 12.7193 29.9242 11.5354C29.9242 9.87812 28.7015 9.1706 27.6362 8.73923Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-normal text-[#A098AE]">
                School Balance
              </p>
              <h1 className="text-4xl font-bold leading-normal text-[#303972]">
                $123,456
              </h1>
              <p className="text-lg font-normal text-[#A098AE]">
                <span className="text-[#4CBC9A] font-semibold">+23%</span> than
                last month
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="285"
                height="75"
                viewBox="0 0 285 75"
                fill="none"
              >
                <path
                  d="M2 55.9575C19.4134 55.9575 27.7877 33.0683 48.7538 31.6368C67.9618 30.3254 76.3211 73.7264 95.5077 72.191C117.28 70.4486 121.123 33.2601 142.739 30.3789C161.163 27.923 170.859 41.7006 189.492 41.7006C213.147 41.7006 216.492 5.41625 236.246 2.19464C254.213 -0.735515 265.383 30.4528 283 26.1856"
                  stroke="#4CBC9A"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
              <div className="mt-[-72px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="281"
                  height="83"
                  viewBox="0 0 281 83"
                  fill="none"
                >
                  <path
                    d="M46.7538 29.8409C25.7877 31.2822 17.4134 54.3291 0 54.3291V83H26.4275H280.971L281 24.3522C263.383 28.6488 252.213 -2.75435 234.246 0.195981C214.492 3.43978 211.147 39.974 187.492 39.974C168.859 39.974 159.163 26.1015 140.739 28.5743C119.123 31.4754 115.28 68.9199 93.5077 70.6743C74.3211 72.2203 65.9618 28.5204 46.7538 29.8409Z"
                    fill="url(#paint0_linear_29_2)"
                    fill-opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_29_2"
                      x1="140.5"
                      y1="0"
                      x2="140.5"
                      y2="83"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4CBC9A" />
                      <stop offset="1" stop-color="#4CBC9A" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 w-[1455px] h-[479px] bg-white rounded-2xl ml-5">
        <div className="flex justify-between p-5">
          <div className="text-[#303972] text-2xl font-bold">
            Balance Analytics
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
      <FooterFinace />
    </>
  );
};

export default Finance;

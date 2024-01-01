import Image from "next/image";
import React from "react";

const CurrentFoodsMenu = () => {
  const data = [
    {
      title: "Beef Steak with Fried Potato",
      des: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "Pancake with Honey",
      des: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "Japanese Beef Ramen",
      des: "Lorem ipsum dolor sit amet...",
    },
  ];
  return (
    <>
      <h1 className="mt-5 text-2xl font-bold text-[#303972]">
        Current Foods Menu
      </h1>
      {data.map((item) => (
        <>
          <div className="flex flex-col gap-3">
            <div className="w-80 h-40 flex items-center justify-center bg-[#C1BBEB] rounded-2xl mt-5"></div>
            <div className="flex flex-col gap-1 ml-1">
              <h1 className="text-lg font-semibold text-[#363B64]">
                {item.title}
              </h1>
              <p className="text-sm font-normal text-[#A098AE]">{item.des}</p>
            </div>
          </div>
        </>
      ))}
      <div className="flex items-center justify-center mt-6">
        <button className="w-80 h-16 flex-shrink-0 bg-[#4D44B51A] rounded-full">
          <p className="text-[#4D44B5] text-lg font-semibold font-">
            View More
          </p>
        </button>
      </div>
    </>
  );
};

export default CurrentFoodsMenu;

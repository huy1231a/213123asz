import Image from "next/image";
import React from "react";
import { dataInfo } from "../getData";

const MessageStudent = () => {
  return (
    <>
      <h1 className="mt-4 text-2xl font-bold text-[#303972]">Messages</h1>
      {dataInfo.map((item) => (
        <>
          <div className="flex justify-between mt-4 p-2">
            <div className="flex gap-3">
              <Image
                src={item.img}
                alt="icon"
                width={49}
                height={49}
                className="rounded-full"
              />
              <div className="space-x-0 flex flex-col gap-2">
                <h1 className="text-sm font-semibold text-[#303972] mt-1">
                  {item.name}
                </h1>
                <p className="text-sm font-normal text-[#A098AE]">
                  {item.text}
                </p>
              </div>
            </div>
            <div className={`text-sm font-normal text-[#A098AE]`}>12:24PM</div>
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

export default MessageStudent;

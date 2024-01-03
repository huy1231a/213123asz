import React from "react";
import Image from "next/image";

export interface DataProp {
  group?: string;
  logo: string;
  class: string;
  title: string;
  time: string;
  mes: string;
  hasMes?: boolean;
}
const Info = (prop: DataProp) => {
  return (
    <>
      <div className="flex justify-between p-3">
        <div className="flex items-center gap-3">
          <Image
            src={prop.logo}
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg leading-normal text-[#303972]">
              {prop.class}
            </h1>
            <p className="font-normal text-sm leading-normal text-[#A098AE]">
              {prop.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-normal text-sm leading-normal text-[#A098AE]">
            {prop.time}
          </p>
          <div className="flex justify-end">
            <div className="w-6 h-6 bg-[#FB7D5B] rounded-full">
              <h1 className="text-white flex items-center justify-center">
                {prop.mes}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#C1BBEB]">
        <hr />
      </div>
    </>
  );
};

export default Info;

import React from "react";
import Menu from "./menu";

const Food = () => {
  return (
    <>
      <div className="w-[1475px] h-[1135px] bg-white rounded-2xl p-5">
        <div className="flex justify-between p-5">
          <div className="text-[#303972] font-bold leading-normal text-4xl">
            Food Menu
          </div>
          <div className="flex">
            <ul className="flex gap-8 border-b-4 p-3">
              <li className="self-stretch ">All Menus</li>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Snack</li>
            </ul>
          </div>
        </div>
        <div className="p-8">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Food;

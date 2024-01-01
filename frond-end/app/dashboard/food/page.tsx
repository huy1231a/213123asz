import React from "react";

const Food = () => {
  return (
    <>
      <div className="w-[1475px] h-[1135px] bg-white rounded-2xl p-5">
        <div className="flex justify-between p-5">
          <div>Food Menu</div>
          <div className="flex">
            <ul className="flex gap-8 border-b-4 p-3">
              <li className="self-stretch ">All Menus</li>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Snack</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;

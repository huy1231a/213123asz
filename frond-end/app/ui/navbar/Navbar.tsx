import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1>DashBoard</h1>
        <div>
          <input
            className="rounded-2xl focus:outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-[10vh] bg-green-700 w-full flex  absolute">
        <div className="w-[12%] bg-yellow-50">logo</div>
        <div className="flex text-amber-500 w-[88%] font-semibold">
          <ul className="flex space-x-12 justify-center items-center w-full ">
            <Link to="/home">
              <li className="">
                Home
              </li>
            </Link>
            
            <Link to="/home">
              <li className="">
                WeedObot
              </li>
            </Link>
            <Link to="/home">
              <li className="">
                My Farm & Bot
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Weed & Crop Information
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Herbicide Guide
              </li>
            </Link>
            
            <Link to="/home">
              <li className="">
              Govt. Guidelines
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Farmer Stories
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Support
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

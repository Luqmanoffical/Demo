import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FiMail, FiSettings } from "react-icons/fi";
import { BsCalendar, BsPerson } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import i1 from "../../../assets/Vector.png"
import i2 from "../../../assets/Vector2.png"
const SideBar = () => {
  return (
    <div className="h-screen font-urbanist w-24 flex flex-col items-center py-6 shadow-lg">
      <div className="space-y-10">

        <Link to="/dashboard" className="group flex flex-col items-center">
          <RxDashboard className="text-2xl text-gray-400 group-hover:text-indigo-600" />
          <span className="text-xs pt-2 text-gray-400 group-hover:text-indigo-600">DASHBOARD</span>
        </Link>

        <Link to="/inbox" className="group flex flex-col items-center ">
         <div className="relative">
          <FiMail className="text-2xl text-gray-400 group-hover:text-indigo-600" />
          <span className="absolute bottom-3 left-4 w-5 h-5 text-white bg-red-400  border-2 border-white flex items-center justify-center rounded-full">2</span>
      
          </div><span className="text-xs pt-2 text-gray-400 group-hover:text-indigo-600">INBOX</span>
        </Link>

        <Link to="/schedule" className="group flex flex-col items-center">
        <img src={i2} alt="i1" />
          <span className="text-xs pt-2 text-gray-400 group-hover:text-indigo-600">SCHEDULE</span>
        </Link>

        <Link to="/reviews" className="group flex flex-col items-center relative">
          <div className="relative">
<img src={i1} alt="i2" />
          <span className="absolute bottom-3 left-4 w-5 h-5 text-white bg-red-400  border-2 border-white flex items-center justify-center rounded-full">6</span>
      
          </div>
          <span className="text-xs pt-2 text-gray-400 group-hover:text-indigo-600">REVIEWS</span>
        </Link>

        <Link to="/settings" className="group flex flex-col items-center mt-auto">
          <FiSettings className="text-2xl text-indigo-600" />
          <span className="text-xs pt-2 text-indigo-600">SETTINGS</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FiMail, FiSettings } from "react-icons/fi";
import { BsCalendar, BsPerson } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="h-screen bg-gray-50 w-20 flex flex-col items-center py-6 shadow-lg">
      <div className="space-y-10">

        <Link to="/dashboard" className="group flex flex-col items-center">
          <MdDashboard className="text-2xl text-gray-500 group-hover:text-indigo-600" />
          <span className="text-xs text-gray-500 group-hover:text-indigo-600">DASHBOARD</span>
        </Link>

        <Link to="/inbox" className="group flex flex-col items-center relative">
          <FiMail className="text-2xl text-gray-500 group-hover:text-indigo-600" />
          <span className="text-xs text-gray-500 group-hover:text-indigo-600">INBOX</span>
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">2</span>
        </Link>

        <Link to="/schedule" className="group flex flex-col items-center">
          <BsCalendar className="text-2xl text-gray-500 group-hover:text-indigo-600" />
          <span className="text-xs text-gray-500 group-hover:text-indigo-600">SCHEDULE</span>
        </Link>

        <Link to="/reviews" className="group flex flex-col items-center relative">
          <BsPerson className="text-2xl text-gray-500 group-hover:text-indigo-600" />
          <span className="text-xs text-gray-500 group-hover:text-indigo-600">REVIEWS</span>
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">6</span>
        </Link>

        <Link to="/settings" className="group flex flex-col items-center mt-auto">
          <FiSettings className="text-2xl text-indigo-600" />
          <span className="text-xs text-indigo-600">SETTINGS</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

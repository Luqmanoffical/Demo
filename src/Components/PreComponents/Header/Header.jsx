import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import profile from "../../../assets/profile.png";
import { GoBell, GoSearch  } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const handleLogout = () => {
    alert("You clicked the Logout button");
    setDropdownOpen(false);
  };

  return (
    <div className="  p-4 flex justify-between items-center flex-wrap md:flex-nowrap">
      
      <h1 className="font-semibold text-2xl text-black">Cosmediate</h1>

      <div className="relative flex items-center mx-4 w-full md:w-96">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-10 pr-4 bg-gray-100 text-black rounded-2xl placeholder-gray-400 focus:outline-none border border-gray-300 focus:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        />
        <GoSearch className="absolute left-3 text-gray-400" />
      </div>

      <div className="relative flex items-center space-x-4">

<div

>     <button
  className="text-indigo-500 hover:text-blue-400 transition-all duration-300 ease-in-out relative"
  onClick={() => setNotificationsOpen(!isNotificationsOpen)}
>
  <GoBell size={25} />
  <span
    className="absolute top-0 right-0 w-3 h-3 bg-red-400 rounded-full border-2 border-white"
  ></span>
</button>

      {isNotificationsOpen && (
        <div className="absolute right-8 top-14 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-3">
              <p className="text-sm text-gray-700">System update completed</p>
              <span className="text-xs text-gray-500">1 hour ago</span>
            </li>
            <li className="px-4 py-3">
              <p className="text-sm text-gray-700">New user registered: Sarah</p>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </li>
            <li className="px-4 py-3 text-center">
              <Link to="/" className="text-blue-500 hover:underline">
                View All Notifications
              </Link>
            </li>
          </ul>
        </div>
      )}
</div>
    
        <button
          className="flex items-center text-black py-2 px-4 rounded hover:bg-gray-100 transition-all duration-300 ease-in-out"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <img
            src={profile}
            alt="User Avatar"
            className="rounded-full h-10 w-10 mr-3"
          />
          <div>
            <p className="text-sm text-gray-600">Tim Bouwman</p>
            <p className="text-xs text-gray-400">Aestec Amsterdam</p>
          </div>
          <div className='pl-8 text-gray-400'>
          <IoIosArrowDown/>
          </div>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-14 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <ul>
              <li>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-start px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

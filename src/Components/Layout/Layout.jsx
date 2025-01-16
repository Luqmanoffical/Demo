
import React from 'react';

import Sidebar from '../PreComponents/SiderBar/SideBar';
import Header from '../PreComponents/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex bg-gray-50 overflow-hidden  h-screen">
   <div className="flex-1 flex flex-col whitespace-nowrap">
   <Header />
    <div className="flex-1 flex    ">

     <Sidebar /> 
     <div className="flex-1 bg-white rounded-3xl overflow-y-auto custom-scroll">
     <main   id="scrollable-container" className="flex-1 custom-scroll overflow-y-auto ">
          <Outlet />
        </main>
     </div>
     </div>
      
        
      </div>
    </div>
  );
}

export default Layout;

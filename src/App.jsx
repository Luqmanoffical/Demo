import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Dashboard from "./Components/Dashboard/Dashboard";
import Inbox from "./Components/Inbox/Inbox";
import Schedule from "./Components/Schedule/Schedule";
import Reviews from "./Components/Reviews/Reviews";
import Settings from "./Components/Settings/Settings";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
   
   <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

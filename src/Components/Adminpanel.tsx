import React from 'react';

import { Link } from 'react-router-dom';

function Adminpanel() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="flex items-center space-x-4 text-xl py-8 text-blue-900">
        Admin Panel
      </div>
      <div className="border border-black p-12 flex flex-col border-t-4 border-b-1 border-l-4">
        <Link to="/Employemenu"> 
          <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
            Employee Menu
          </button>
        </Link>
        <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
          Leave Tracker
        </button>
        <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
          Login/Logout Employee
        </button>
        <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
          View Login and Logout
        </button>
        <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
          View Attendance
        </button>
        <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
          View Out of Range
        </button>
        <button className="my-1 bg-indigo-500 px-12 py-4 text-white text-left">
          Reports
        </button>
      </div>
      <button className="my-1 bg-indigo-500 px-12 py-4 text-white absolute bottom-0 right-0">
        Log Out
      </button>
    </div>
  );
}

export default Adminpanel;

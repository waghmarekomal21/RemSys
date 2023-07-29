import React from 'react';

function Header() {
  return (
    <nav className="border-black border-t-2 border-b-2">
        {/* <img src="src/assets/logo.png" alt="Logo" className="h-8 w-8 flex items-center space-x-4" /> */}
          <div className="flex flex-col items-center justify-center ">

              {/* Logo */}
              <div className="flex items-center space-x-4 text-xl py-8 text-blue-900">
              RemSys Smart Attendance System
              </div>
          </div>
      </nav>
      
    
  );
}

export default Header;

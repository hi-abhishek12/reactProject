import React, { useState } from "react";
import Input from "./Input";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Navbar({toggleSidebar}) {
  
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow">
        <Bars3Icon
          className="h-6 w-6 text-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        />

        {/* Input with search icon */}
        <div className="relative w-full max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border 
        border-gray-300 shadow-md bg-white text-gray-700 focus:outline-none
        focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>
     
    </>
  );
}

export default Navbar;

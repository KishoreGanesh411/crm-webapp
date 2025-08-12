import React from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      {/* Search bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircleIcon className="h-8 w-8 text-gray-600" />
          <span className="text-sm font-medium">John Smith</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

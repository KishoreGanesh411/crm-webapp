import React from "react";
import { NavLink } from "react-router-dom";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <div className="h-16 flex items-center justify-center text-lg font-bold border-b">
        NextAdmin
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard/lead-entry"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-indigo-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <ClipboardDocumentListIcon className="h-5 w-5 mr-3" />
              Lead Entry Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

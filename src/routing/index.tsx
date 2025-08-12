import React from "react";
import Sidebar from "../component/layout/sidebar/sidebar";
import Header from "../component/layout/header/Header";
import { Outlet } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppRouter;

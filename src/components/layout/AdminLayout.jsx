import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";
import Topbar from "../admin/Tapbar";
import { AdminThemeProvider, useAdminTheme } from "../../contexts/AdminThemeContext";

const AdminLayoutContent = () => {
  const { isDarkMode } = useAdminTheme();

  return (
    <div className={`flex flex-col lg:flex-row min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0a0f1e]' : 'bg-slate-50'
    }`}>
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 p-4 sm:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AdminLayout = () => {
  return (
    <AdminThemeProvider>
      <AdminLayoutContent />
    </AdminThemeProvider>
  );
};

export default AdminLayout;
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Relies on its internal fixed positioning */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onCollapse={setIsSidebarCollapsed}
      />
      
      {/* Main Content Area - Occupies remaining width, allows vertical scroll for its content */}
      <div className="flex flex-col flex-1 relative overflow-hidden">
        {/* Navbar - Fixed to the top */}
        <div className="flex-none fixed top-0 w-full z-20 transition-all duration-300 ease-in-out"
             style={{ left: isSidebarCollapsed ? '5rem' : '16rem', width: isSidebarCollapsed ? 'calc(100% - 5rem)' : 'calc(100% - 16rem)' }}> {/* Adjust left and width based on sidebar width */}
          <Navbar 
            toggleSidebar={toggleSidebar} 
            isSidebarCollapsed={isSidebarCollapsed}
          />
        </div>

        {/* Main Content with Padding - Scrolls independently, below the navbar, next to sidebar */}
        <main className="flex-1 overflow-y-auto p-6 pt-20 bg-white transition-all duration-300 ease-in-out"
              style={{ marginLeft: isSidebarCollapsed ? '5rem' : '16rem' }}> {/* Adjust left margin based on sidebar width */}
          <div>
            {/* Temporary placeholder - will be removed once confirmed */}
            {/* <h2>Dashboard Content Should Be Here</h2> */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
} 
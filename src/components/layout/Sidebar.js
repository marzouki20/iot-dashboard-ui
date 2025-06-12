import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSettings, FiPlusCircle, FiDatabase, FiAlertCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Sidebar({ isOpen, onClose, onCollapse }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: FiHome },
    { name: 'Add Device', path: '/dashboard/add-device', icon: FiPlusCircle },
    { name: 'Data', path: '/dashboard/data', icon: FiDatabase },
    { name: 'Alerts', path: '/dashboard/alerts', icon: FiAlertCircle },
    { name: 'Settings', path: '/dashboard/settings', icon: FiSettings },
  ];

  useEffect(() => {
    onCollapse(isCollapsed);
  }, [isCollapsed, onCollapse]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        <div className="h-full flex flex-col">
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            {!isCollapsed && (
              <h1 className="text-xl font-semibold text-gray-800">
                <span className="text-yellow-500">IoT</span> Dashboard
              </h1>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {isCollapsed ? <FiChevronRight className="h-5 w-5" /> : <FiChevronLeft className="h-5 w-5" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-yellow-50 text-yellow-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`} />
                {!isCollapsed && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className={`p-4 border-t border-gray-200 ${isCollapsed ? 'text-center' : ''}`}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow-sm">
                  <span className="text-white font-medium">A</span>
                </div>
              </div>
              {!isCollapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
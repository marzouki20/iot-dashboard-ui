import React from 'react';

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/70 via-white/50 to-transparent"></div>

      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src="/auth-background.jpg"
          alt="Authentication background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-white text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to IoT Dashboard</h1>
            <p className="text-lg">Monitor and control your IoT devices from anywhere</p>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg relative z-10">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              {title}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
} 
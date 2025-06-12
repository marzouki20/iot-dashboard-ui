import React, { useState } from 'react';
import { FiThermometer, FiDroplet, FiClock, FiPower, FiPlus, FiAlertCircle, FiDatabase, FiSettings, FiRefreshCw } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MainPage() {
  const [selectedDevice, setSelectedDevice] = useState('device1');
  const [devices] = useState([
    { id: 'device1', name: 'Living Room Sensor', status: 'online', lastConnection: '2 mins ago' },
    { id: 'device2', name: 'Kitchen Monitor', status: 'offline', lastConnection: '1 hour ago' },
    { id: 'device3', name: 'Bedroom Sensor', status: 'online', lastConnection: '5 mins ago' },
  ]);

  // Chart data
  const chartData = {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [23, 24, 25, 24, 23, 24, 25],
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Humidity (%)',
        data: [60, 62, 65, 63, 64, 65, 65],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temperature and Humidity Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            <FiPlus className="mr-2 h-5 w-5" />
            Add Device
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            <FiRefreshCw className="mr-2 h-5 w-5" />
            Refresh
          </button>
        </div>
      </div>

      {/* Device Selector */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-xs">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Device</label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
            >
              {devices.map(device => (
                <option key={device.id} value={device.id}>{device.name}</option>
              ))}
            </select>
          </div>
          <div className="ml-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Temperature Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <FiThermometer className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Temperature</p>
              <p className="text-2xl font-semibold text-gray-900">24°C</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600">Normal</span>
            </div>
          </div>
        </div>

        {/* Humidity Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <FiDroplet className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Humidity</p>
              <p className="text-2xl font-semibold text-gray-900">65%</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600">Optimal</span>
            </div>
          </div>
        </div>

        {/* Connection Status Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <FiPower className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Connection</p>
              <p className="text-2xl font-semibold text-gray-900">Online</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Last Update</span>
              <span className="text-gray-900">2 mins ago</span>
            </div>
          </div>
        </div>

        {/* Port Status Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <FiClock className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Port Status</p>
              <p className="text-2xl font-semibold text-gray-900">Open</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Last Change</span>
              <span className="text-gray-900">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-[300px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Device Status</h3>
          <div className="space-y-4">
            {devices.map((device) => (
              <div key={device.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full mr-3 ${device.status === 'online' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{device.name}</p>
                    <p className="text-sm text-gray-500">Last connection: {device.lastConnection}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  device.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {device.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <FiAlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
          <span className="text-lg font-medium text-gray-900">View Alerts</span>
        </button>
        <button className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <FiDatabase className="h-6 w-6 text-blue-600 mr-3" />
          <span className="text-lg font-medium text-gray-900">View All Data</span>
        </button>
        <button className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
          <FiSettings className="h-6 w-6 text-gray-600 mr-3" />
          <span className="text-lg font-medium text-gray-900">Device Settings</span>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              <li className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center ring-8 ring-white">
                      <FiPower className="h-5 w-5 text-green-600" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <p className="text-sm text-gray-500">Device connected</p>
                      <p className="mt-0.5 text-sm text-gray-900">Living Room Sensor</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>2 minutes ago</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center ring-8 ring-white">
                      <FiThermometer className="h-5 w-5 text-yellow-600" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <p className="text-sm text-gray-500">Temperature alert</p>
                      <p className="mt-0.5 text-sm text-gray-900">Temperature above threshold</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>1 hour ago</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

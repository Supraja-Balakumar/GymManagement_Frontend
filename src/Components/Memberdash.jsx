import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-blue-800 text-white w-64 h-full p-4">
        <div className="text-2xl font-bold mb-6">GYMFIT</div>
        <ul>
          <li className="mb-4">
            <Link to="/memberdash" className="hover:text-gray-400">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/slotspage" className="hover:text-gray-400">View Classes</Link>
          </li>
          <li className="mb-4">
            <Link to="/workoutplans" className="hover:text-gray-400">Workout Plans</Link>
          </li>
          <li className="mb-4">
            <Link to="/paymentview" className="hover:text-gray-400">Payment</Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="hover:text-gray-400">Profile</Link>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <div className="mb-4">
              <span className="font-medium">Name:</span> John Doe
            </div>
            <div className="mb-4">
              <span className="font-medium">Email:</span> johndoe@example.com
            </div>
            <div>
              <span className="font-medium">Membership:</span> Gold Plan
            </div>
          </div>

          {/* Membership Status Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Membership Status</h2>
            <div className="mb-4">
              <span className="font-medium">Start Date:</span> January 1, 2024
            </div>
            <div className="mb-4">
              <span className="font-medium">End Date:</span> June 30, 2024
            </div>
            <div>
              <span className="font-medium">Status:</span> Active
            </div>
          </div>

          {/* Upcoming Classes Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
            <ul>
              <li className="mb-2">Yoga - Monday, 7 AM</li>
              <li className="mb-2">HIIT - Wednesday, 6 PM</li>
              <li className="mb-2">Pilates - Friday, 8 AM</li>
            </ul>
            <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
          </div>

          {/* Recent Activities Card */}
          <div className="bg-white shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul>
              <li className="mb-2">Completed Yoga class on September 10, 2024</li>
              <li className="mb-2">Paid membership fee on September 5, 2024</li>
              <li className="mb-2">Booked a personal training session on September 1, 2024</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

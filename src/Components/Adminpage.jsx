// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Route, Routes, Link, Outlet } from 'react-router-dom';
// // // import Managetrainers from './Managetrainers';


// // // const Dashboard = () => {
// // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // //   const dropdownRef = useRef(null);

// // //   // Toggle dropdown menu
// // //   const toggleDropdown = () => {
// // //     setIsDropdownOpen(!isDropdownOpen);
// // //   };

// // //   // Close the dropdown if clicked outside of it
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsDropdownOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="flex h-screen">
// // //       {/* Sidebar */}
// // //       <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5">
// // //         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
// // //         <ul>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/home" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">🏠</span> Dashboard
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/profile" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">👤</span> Manage Members
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/managetrainers" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">📄</span> Manage Trainers
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/manageclasses" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">👥</span> Manage Classes
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/comments" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">💬</span> Reports
// // //             </Link>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="w-4/5 p-5">
// // //         {/* Top Navigation Bar */}
// // //         <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-5">
// // //           {/* Left Side: Menu and Search */}
// // //           <div className="flex items-center space-x-4">
// // //             <button className="text-gray-500 hover:text-gray-700">
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth="2"
// // //                   d="M4 6h16M4 12h16m-7 6h7"
// // //                 ></path>
// // //               </svg>
// // //             </button>
// // //             <div className="flex items-center border border-gray-300 rounded-full px-4 py-1">
// // //               <svg
// // //                 className="w-4 h-4 text-gray-500 mr-2"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth="2"
// // //                   d="M21 21l-4.35-4.35M11 5a7 7 0 100 14 7 7 0 000-14z"
// // //                 ></path>
// // //               </svg>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search..."
// // //                 className="outline-none text-gray-600 w-full"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Right Side: Notification and Profile */}
// // //           <div className="relative flex items-center space-x-4" ref={dropdownRef}>
// // //             <button className="text-gray-500 hover:text-gray-700">
// // //               <svg
// // //                 className="w-6 h-6"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth="2"
// // //                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.158c0 .538-.214 1.055-.595 1.437L4 17h5"
// // //                 ></path>
// // //               </svg>
// // //             </button>

// // //             {/* Profile Icon Button */}
// // //             <button onClick={toggleDropdown} className="relative">
// // //               <svg
// // //                 className="w-8 h-8 text-gray-700 hover:text-gray-900"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth="2"
// // //                   d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
// // //                 ></path>
// // //               </svg>
// // //             </button>

// // //             {/* Dropdown Menu */}
// // //             {isDropdownOpen && (
// // //               <div className="absolute right-0 mt-10 w-40 bg-white rounded-lg shadow-lg py-2 z-20">
// // //                 <button
// // //                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
// // //                   onClick={() => console.log('View Profile')}
// // //                 >
// // //                   View Profile
// // //                 </button>
// // //                 <button
// // //                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
// // //                   onClick={() => console.log('Logout')}
// // //                 >
// // //                   Logout
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {/* Main Dashboard Content */}
// // //         <div>

          
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;



// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Link, Outlet } from 'react-router-dom';

// // // const Dashboard = () => {
// // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // //   const dropdownRef = useRef(null);

// // //   // Toggle dropdown menu
// // //   const toggleDropdown = () => {
// // //     setIsDropdownOpen(!isDropdownOpen);
// // //   };

// // //   // Close the dropdown if clicked outside of it
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsDropdownOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="flex h-screen">
// // //       {/* Sidebar */}
// // //       <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5">
// // //         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
// // //         <ul>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/home" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">🏠</span> Dashboard
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/managemember" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">👤</span> Manage Members
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/adminpage/managetrainers" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">📄</span> Manage Trainers
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">👥</span> Manage Classes
// // //             </Link>
// // //           </li>
// // //           <li className="mb-4">
// // //             <Link to="/dashboard/comments" className="flex items-center text-white hover:text-gray-300">
// // //               <span className="mr-2">💬</span> Reports
// // //             </Link>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="w-4/5 p-5">
// // //         {/* Top Navigation Bar */}
        

// // //         {/* Main Dashboard Content */}
// // //         <div>
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;



// // import React, { useState, useRef, useEffect } from 'react';
// // import { Link, Outlet } from 'react-router-dom';

// // const Dashboard = () => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   // Toggle dropdown menu
// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   // Close the dropdown if clicked outside of it
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <div className="flex h-screen">
// //       {/* Sidebar */}
// //       <div className="w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
// //         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
// //         <ul>
// //           <li className="mb-4">
// //             <Link to="/adminpage" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">🏠</span> Dashboard
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/managemember" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">👤</span> Manage Members
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/managetrainers" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">📄</span> Manage Trainers
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">👥</span> Manage Classes
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/adminreports" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">💬</span> Reports
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="w-4/5 p-5 bg-gradient-to-b from-blue-100 to-blue-300">
// //         {/* Top Navigation Bar */}
// //         <div className="flex justify-between items-center mb-6">
// //           <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
// //           <button
// //             onClick={toggleDropdown}
// //             className="bg-gradient-to-r from-green-400 to-teal-400 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 transition"
// //           >
// //             Notifications
// //           </button>
// //           {isDropdownOpen && (
// //             <div ref={dropdownRef} className="absolute top-16 right-5 bg-white shadow-lg rounded-lg w-64">
// //               <div className="p-4">
// //                 <h3 className="font-semibold text-gray-700">Notifications</h3>
// //                 {/* Replace with dynamic notifications */}
// //                 <ul>
// //                   <li className="text-gray-600 mb-2">New member signup</li>
// //                   <li className="text-gray-600 mb-2">Class schedule updated</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Main Dashboard Content */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {/* Statistics Cards */}
// //           <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
// //             <h3 className="text-lg font-semibold">Total Members</h3>
// //             <p className="text-3xl font-bold">120</p>
// //           </div>
// //           <div className="bg-gradient-to-r from-teal-400 to-green-500 p-6 rounded-lg shadow-lg text-white">
// //             <h3 className="text-lg font-semibold">Active Classes</h3>
// //             <p className="text-3xl font-bold">8</p>
// //           </div>
// //           <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 p-6 rounded-lg shadow-lg text-white">
// //             <h3 className="text-lg font-semibold">Total Trainers</h3>
// //             <p className="text-3xl font-bold">15</p>
// //           </div>

// //           {/* Recent Activity */}
// //           <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-lg shadow-lg">
// //             <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
// //             <ul>
// //               <li className="text-gray-600 mb-2">Member Jane Doe booked a new class</li>
// //               <li className="text-gray-600 mb-2">Trainer John Smith updated their profile</li>
// //               <li className="text-gray-600 mb-2">New report available for review</li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Render child routes */}
// //         <div className="mt-6">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useState, useRef, useEffect } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const Dashboard = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [memberCount, setMemberCount] = useState(null); // State for member count
//   const dropdownRef = useRef(null);

//   // Toggle dropdown menu
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Fetch member count from the backend
//   const fetchMemberCount = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/member/count'); // Update URL as needed
//       if (response.ok) {
//         const count = await response.json();
//         setMemberCount(count);
//       } else {
//         console.error('Failed to fetch member count');
//       }
//     } catch (error) {
//       console.error('Error fetching member count:', error);
//     }
//   };

//   // Close the dropdown if clicked outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Fetch member count on component mount
//   useEffect(() => {
//     fetchMemberCount();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
//         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
//         <ul>
//           <li className="mb-4">
//             <Link to="/adminpage" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">🏠</span> Dashboard
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/managemember" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">👤</span> Manage Members
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/managetrainers" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">📄</span> Manage Trainers
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">👥</span> Manage Classes
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/adminreports" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">💬</span> Reports
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-4/5 p-5 bg-gradient-to-b from-blue-100 to-blue-300">
//         {/* Top Navigation Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
//           <button
//             onClick={toggleDropdown}
//             className="bg-gradient-to-r from-green-400 to-teal-400 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 transition"
//           >
//             Notifications
//           </button>
//           {isDropdownOpen && (
//             <div ref={dropdownRef} className="absolute top-16 right-5 bg-white shadow-lg rounded-lg w-64">
//               <div className="p-4">
//                 <h3 className="font-semibold text-gray-700">Notifications</h3>
//                 {/* Replace with dynamic notifications */}
//                 <ul>
//                   <li className="text-gray-600 mb-2">New member signup</li>
//                   <li className="text-gray-600 mb-2">Class schedule updated</li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Main Dashboard Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Statistics Cards */}
//           <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
//             <h3 className="text-lg font-semibold">Total Members</h3>
//             <p className="text-3xl font-bold">{memberCount !== null ? memberCount : 'Loading...'}</p>
//           </div>
//           <div className="bg-gradient-to-r from-teal-400 to-green-500 p-6 rounded-lg shadow-lg text-white">
//             <h3 className="text-lg font-semibold">Active Classes</h3>
//             <p className="text-3xl font-bold">8</p>
//           </div>
//           <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 p-6 rounded-lg shadow-lg text-white">
//             <h3 className="text-lg font-semibold">Total Trainers</h3>
//             <p className="text-3xl font-bold">15</p>
//           </div>

//           {/* Recent Activity */}
//           <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
//             <ul>
//               <li className="text-gray-600 mb-2">Member Jane Doe booked a new class</li>
//               <li className="text-gray-600 mb-2">Trainer John Smith updated their profile</li>
//               <li className="text-gray-600 mb-2">New report available for review</li>
//             </ul>
//           </div>
//         </div>

//         {/* Render child routes */}
//         <div className="mt-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(null); // State for member count
  const [trainerCount, setTrainerCount] = useState(null); // State for trainer count
  const dropdownRef = useRef(null);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fetch member count from the backend
  const fetchMemberCount = async () => {
    try {
      const response = await fetch('http://localhost:8000/member/count'); // Update URL as needed
      if (response.ok) {
        const count = await response.json();
        setMemberCount(count);
      } else {
        console.error('Failed to fetch member count');
      }
    } catch (error) {
      console.error('Error fetching member count:', error);
    }
  };

  // Fetch trainer count from the backend
  const fetchTrainerCount = async () => {
    try {
      const response = await fetch('http://localhost:8000/trainers/count'); // Update URL as needed
      if (response.ok) {
        const count = await response.json();
        setTrainerCount(count);
      } else {
        console.error('Failed to fetch trainer count');
      }
    } catch (error) {
      console.error('Error fetching trainer count:', error);
    }
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fetch member and trainer counts on component mount
  useEffect(() => {
    fetchMemberCount();
    fetchTrainerCount();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
        <ul>
          <li className="mb-4">
            <Link to="/adminpage" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">🏠</span> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/managemember" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">👤</span> Manage Members
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/managetrainers" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">📄</span> Manage Trainers
            </Link>
          </li>
          {/* <li className="mb-4">
            <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">👥</span> Manage Classes
            </Link>
          </li> */}
          <li className="mb-4">
            <Link to="/adminreports" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">💬</span> Reports
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-5 bg-gradient-to-b from-blue-100 to-blue-300">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">ADMIN DASHBOARD</h2>
          <button
            onClick={toggleDropdown}
            className="bg-gradient-to-r from-green-400 to-teal-400 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 transition"
          >
            Notifications
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute top-16 right-5 bg-white shadow-lg rounded-lg w-64">
              <div className="p-4">
                <h3 className="font-semibold text-gray-700">Notifications</h3>
                {/* Replace with dynamic notifications */}
                <ul>
                  <li className="text-gray-600 mb-2">New member signup</li>
                  <li className="text-gray-600 mb-2">Class schedule updated</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Statistics Cards */}
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold">Total Members</h3>
            <p className="text-3xl font-bold">{memberCount !== null ? memberCount : 'Loading...'}</p>
          </div>
          {/* <div className="bg-gradient-to-r from-teal-400 to-green-500 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold">Active Classes</h3>
            <p className="text-3xl font-bold">8</p>
          </div> */}
          <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold">Total Trainers</h3>
            <p className="text-3xl font-bold">{trainerCount !== null ? trainerCount : 'Loading...'}</p>
          </div>

          {/* Recent Activity */}
          {/* <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
            <ul>
              <li className="text-gray-600 mb-2">Member Jane Doe booked a new class</li>
              <li className="text-gray-600 mb-2">Trainer John Smith updated their profile</li>
              <li className="text-gray-600 mb-2">New report available for review</li>
            </ul>
          </div> */}
        </div>

        {/* Render child routes */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

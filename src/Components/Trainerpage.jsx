// // // // import React, { useState } from 'react';
// // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// // // // const Trainerpage = () => {
// // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // //   const toggleDropdown = () => {
// // // //     setIsDropdownOpen(!isDropdownOpen);
// // // //   };

// // // //   return (
// // // //     <div className="flex h-screen">
// // // //       {/* Sidebar */}
// // // //       <aside className="bg-blue-800 text-white w-64 h-full p-4">
// // // //         <div className="text-2xl font-bold mb-6">GYMFIT</div>
// // // //         <ul>
// // // //           <li className="mb-4">
// // // //             <a href="#" className="hover:text-gray-400">Dashboard</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="#" className="hover:text-gray-400">View Schedules</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="#" className="hover:text-gray-400">Manage Classes</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="/paymentview" className="hover:text-gray-400">Profile</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="#" className="hover:text-gray-400"></a>
// // // //           </li>
// // // //         </ul>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="flex-1 p-4 relative">
// // // //         <div className="absolute top-4 right-4">
// // // //           <div className="relative">
// // // //             <AccountCircleIcon
// // // //               fontSize="large"
// // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // //               onClick={toggleDropdown}
// // // //             />
// // // //             {isDropdownOpen && (
// // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // //                 <ul>
// // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">View Profile</li>
// // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // //                 </ul>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         {/* Your main content */}
// // // //         <h1 className="text-2xl font-bold">Welcome to Trainer Page</h1>
// // // //         {/* Additional content can be added here */}
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Trainerpage;




// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // const TrainerDashboard = () => {
// //   const [profile, setProfile] = useState({});
// //   const [schedule, setSchedule] = useState([]);
// //   const [clientProgress, setClientProgress] = useState([]);
// //   const [upcomingClasses, setUpcomingClasses] = useState([]);
// //   const [performanceMetrics, setPerformanceMetrics] = useState({});

// //   useEffect(() => {
// //     // Fetch trainer dashboard data from backend
// //     const fetchDashboardData = async () => {
// //       try {
// //         // Retrieve trainerId from sessionStorage
// //         const trainerid = sessionStorage.getItem('trainerid');
// //         if (!trainerid) {
// //           console.error('Trainer ID not found in session storage');
// //           return;
// //         }

// //         // Fetch data using the trainerId
// //         const [profileRes, scheduleRes, progressRes, classesRes, metricsRes] = await Promise.all([
// //           axios.get(`http://localhost:8000/trainer/profile/${trainerid}`), // Fetch profile using trainerId
// //           axios.get('http://localhost:8000/trainer/schedule'),
// //           axios.get('http://localhost:8000/trainer/client-progress'),
// //           axios.get('http://localhost:8000/trainer/upcoming-classes'),
// //           axios.get('http://localhost:8000/trainer/performance-metrics'),
// //         ]);

// //         setProfile(profileRes.data);
// //         setSchedule(scheduleRes.data);
// //         setClientProgress(progressRes.data);
// //         setUpcomingClasses(classesRes.data);
// //         setPerformanceMetrics(metricsRes.data);
// //       } catch (error) {
// //         console.error('Error fetching trainer dashboard data:', error);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   return (
// //     <div className="flex h-screen">
// //       {/* Sidebar */}
// //       <div className="fixed top-0 bottom-0 w-1/5 bg-gradient-to-b from-teal-700 to-teal-500 text-white p-5">
// //         <h1 className="text-2xl font-bold mb-10">Trainer Dashboard</h1>
// //         <ul>
// //           <li className="mb-4">
// //             <Link to="/trainer/profile" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">👤</span> Profile
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/trainer/schedule" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">📅</span> Schedule
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/trainermanagemember" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">💪</span> Managemember
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/trainer/classes" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">🗓️</span> Upcoming Classes
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/trainer/feedback" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">📝</span> Feedback
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 bg-gray-900 min-h-screen p-6 ml-[20%]">
// //         <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>

// //         {/* Profile Summary */}
// //         <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
// //           <h2 className="text-2xl font-bold text-white mb-4">Profile Summary</h2>
// //           <div className="text-gray-200">
// //             <p><strong>Name:</strong> {profile.trainername || 'Loading...'}</p>
// //             <p><strong>Email:</strong> {profile.trainerEmail || 'Loading...'}</p>
// //             <p><strong>Phone:</strong> {profile.phonenumber || 'Loading...'}</p>
// //             <p><strong>Specialization:</strong> {profile.specialization || 'Loading...'}</p>
// //           </div>
// //         </div>

// //         {/* Weekly Schedule */}
// //         <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
// //           <h2 className="text-2xl font-bold text-white mb-4">Weekly Schedule</h2>
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
// //               <thead className="bg-gray-700">
// //                 <tr>
// //                   <th className="py-3 px-4 border-b border-gray-600">Day</th>
// //                   <th className="py-3 px-4 border-b border-gray-600">Time</th>
// //                   <th className="py-3 px-4 border-b border-gray-600">Class</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {schedule.length > 0 ? (
// //                   schedule.map((item, index) => (
// //                     <tr key={index} className="bg-gray-800 hover:bg-gray-700">
// //                       <td className="py-3 px-4 border-b border-gray-700">{item.day}</td>
// //                       <td className="py-3 px-4 border-b border-gray-700">{item.time}</td>
// //                       <td className="py-3 px-4 border-b border-gray-700">{item.className}</td>
// //                     </tr>
// //                   ))
// //                 ) : (
// //                   <tr>
// //                     <td colSpan="3" className="py-3 px-4 text-center border-b border-gray-700">No classes scheduled</td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Client Progress */}
// //         {/* <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
// //           <h2 className="text-2xl font-bold text-white mb-4">Client Progress</h2>
// //           <div className="text-gray-200">
// //             <ul>
// //               {clientProgress.length > 0 ? (
// //                 clientProgress.map((client, index) => (
// //                   <li key={index} className="mb-4">
// //                     <p><strong>Client:</strong> {client.clientName}</p>
// //                     <p><strong>Progress:</strong> {client.progress}%</p>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <p>No progress data available.</p>
// //               )}
// //             </ul>
// //           </div>
// //         </div> */}

// //         {/* Upcoming Classes */}
// //         {/* <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
// //           <h2 className="text-2xl font-bold text-white mb-4">Upcoming Classes</h2>
// //           <div className="text-gray-200">
// //             <ul>
// //               {upcomingClasses.length > 0 ? (
// //                 upcomingClasses.map((item, index) => (
// //                   <li key={index} className="mb-4">
// //                     <p><strong>Class:</strong> {item.className}</p>
// //                     <p><strong>Date:</strong> {item.date}</p>
// //                     <p><strong>Time:</strong> {item.time}</p>
// //                   </li>
// //                 ))
// //               ) : (
// //                 <p>No upcoming classes.</p>
// //               )}
// //             </ul>
// //           </div>
// //         </div> */}

// //         {/* Performance Metrics */}
// //         {/* <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
// //           <h2 className="text-2xl font-bold text-white mb-4">Performance Metrics</h2>
// //           <div className="text-gray-200">
// //             <p><strong>Client Satisfaction:</strong> {performanceMetrics.clientSatisfaction || 'Loading...'}</p>
// //             <p><strong>Class Attendance:</strong> {performanceMetrics.classAttendance || 'Loading...'}</p>
         
// //           </div>
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrainerDashboard;



// import React, { useState, useEffect } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';

// const TrainerDashboard = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [profile, setProfile] = useState(() => {
//     // Initialize state from sessionStorage or set to null
//     const savedProfile = sessionStorage.getItem('trainerProfile');
//     return savedProfile ? JSON.parse(savedProfile) : null;
//   });

//   useEffect(() => {
//     if (!profile) {
//       const trainerid = sessionStorage.getItem('trainerid');
//       if (trainerid) {
//         const fetchProfile = async () => {
//           try {
//             // Replace with your actual API endpoint and method
//             const response = await fetch(`http://localhost:8000/trainer/${trainerid}`);
//             if (!response.ok) throw new Error('Failed to fetch trainer profile');
//             const data = await response.json();
//             setProfile(data);
//             sessionStorage.setItem('trainerProfile', JSON.stringify(data));
//           } catch (error) {
//             console.error('Error fetching trainer profile:', error);
//           }
//         };

//         fetchProfile();
//       }
//     }
//   }, [profile]);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleProfileClick = () => {
//     setIsModalOpen(true); // Open the modal
//     setIsDropdownOpen(false); // Close dropdown
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-64 h-full p-4">
//         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
//         <ul>
//           <li className="mb-4">
//             <Link to="/trainer/dashboard" className="hover:text-gray-400">Dashboard</Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/trainer/schedule" className="hover:text-gray-400">View Schedule</Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/trainer/manage-clients" className="hover:text-gray-400">Manage Clients</Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/trainer/classes" className="hover:text-gray-400">Upcoming Classes</Link>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="hover:text-gray-400">Logout</a>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
//         <div className="absolute top-4 right-4">
//           <div className="relative">
//             <AccountCircleIcon
//               fontSize="large"
//               className="cursor-pointer text-gray-800 hover:text-gray-600"
//               onClick={toggleDropdown}
//             />
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
//                 <ul>
//                   <li
//                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
//                     onClick={handleProfileClick}
//                   >
//                     View Profile
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
//           Dashboard
//         </h1>

//         {/* User Profile Card */}
//         <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
//           <div className="mb-4">
//             <span className="font-medium">Name:</span> {profile ? profile.trainername : 'Loading...'}
//           </div>
//           <div className="mb-4">
//             <span className="font-medium">Email:</span> {profile ? profile.trainerEmail : 'Loading...'}
//           </div>
//           <div>
//             <span className="font-medium">Specialization:</span> {profile ? profile.specialization : 'Loading...'}
//           </div>
//           <button
//             className="mt-4 text-blue-600 hover:underline"
//             onClick={handleProfileClick}
//           >
//             View Full Profile
//           </button>
//         </div>

//         {/* Additional Content Sections */}
//         {/* Similar to the previous component, add sections as needed */}
//         {/* For example: Membership Status, Upcoming Classes, etc. */}

//         {/* Modal */}
//         {isModalOpen && profile && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg p-6 w-1/3 relative">
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                 onClick={closeModal}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
//               <h1 className="text-2xl font-bold mb-4 text-gray-800">Trainer Profile</h1>
//               <p><strong>Specialization:</strong> {profile.specialization}</p>
//               <p><strong>Name:</strong> {profile.trainername}</p>
//               <p><strong>Email:</strong> {profile.trainerEmail}</p>
//               <p><strong>Phone:</strong> {profile.phonenumber}</p>
//               <p><strong>Address:</strong> {profile.address}</p>
//               <p><strong>City:</strong> {profile.city}</p>
//               <p><strong>Experience:</strong> {profile.experience}</p>
//               <p><strong>Qualifications:</strong> {profile.qualifications}</p>
//               {/* Add more fields as necessary */}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default TrainerDashboard;


import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Trainerpage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState(() => {
    // Initialize state from sessionStorage or set to null
    const savedProfile = sessionStorage.getItem('trainerProfile');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const trainerid = sessionStorage.getItem('trainerid');
      if (trainerid) {
        try {
          const response = await fetch(`http://localhost:8000/trainers/${trainerid}`);
          if (!response.ok) {
            // If the response is not ok, throw an error with status
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setProfile(data);
          sessionStorage.setItem('trainerProfile', JSON.stringify(data)); // Save profile in sessionStorage
        } catch (error) {
          // Log error and provide user feedback
          console.error('Error fetching trainer profile:', error.message);
          alert('Failed to fetch trainer profile. Please try again later.');
        }
      } else {
        console.error('Trainer ID not found in session storage.');
        alert('Trainer ID not found. Please log in again.');
      }
    };

    fetchProfile();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 h-full p-4">
        <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
        <ul>
          <li className="mb-4">
            <a href="/trainerpage" className="hover:text-gray-400">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="/trainerschedule" className="hover:text-gray-400">View Schedule</a>
          </li>
          <li className="mb-4">
            <a href="/memberschedule" className="hover:text-gray-400">Members Schedule</a>
          </li>
          {/* <li className="mb-4">
            <a href="/trainerclasses" className="hover:text-gray-400">Upcoming Classes</a>
          </li> */}
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
        <div className="absolute top-4 right-4">
          <div className="relative">
            <AccountCircleIcon
              fontSize="large"
              className="cursor-pointer text-gray-800 hover:text-gray-600"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={handleProfileClick}
                  >
                    View Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Trainer Profile Card */}
          <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Trainer Profile</h2>
            <div className="mb-4">
              <span className="font-medium">Name:</span> {profile ? profile.trainername : 'Loading...'}
            </div>
            <div className="mb-4">
              <span className="font-medium">Email:</span> {profile ? profile.trainerEmail : 'Loading...'}
            </div>
            <div>
              <span className="font-medium">Specialization:</span> {profile ? profile.specialization : 'Loading...'}
            </div>
            <button
              className="mt-4 text-blue-600 hover:underline"
              onClick={handleProfileClick}
            >
              View Full Profile
            </button>
          </div>

          {/* Membership Status Card
          <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
            <div className="mb-4">
              <span className="font-medium">Start Date:</span> January 1, 2024
            </div>
            <div className="mb-4">
              <span className="font-medium">End Date:</span> June 30, 2024
            </div>
            <div>
              <span className="font-medium">Status:</span> Active
            </div>
          </div> */}

          {/* Upcoming Classes Card */}
          {/* <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
            <ul>
              <li className="mb-2">Yoga - Monday, 7 AM</li>
              <li className="mb-2">HIIT - Wednesday, 6 PM</li>
              <li className="mb-2">Pilates - Friday, 8 AM</li>
            </ul>
            <Link to="/trainerclasses" className="text-blue-600 hover:underline">View All Classes</Link>
          </div> */}

          {/* Image After Upcoming Classes */}
          {/* <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg" // Replace with your image path
              alt="Fitness"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
            />
          </div> */}

          {/* Centered Heading */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Enhance Your Fitness Journey</h2>
            <p className="mt-2 text-gray-600">Explore more resources and tips to help you achieve your fitness goals.</p>
          </div>

          {/* Gym Tips Card */}
          <div className="bg-teal-100 border-2 border-teal-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-teal-600">Gym Tips</h2>
            <ul>
              <li className="mb-2">Stay hydrated before and after workouts.</li>
              <li className="mb-2">Warm up properly to prevent injuries.</li>
              <li className="mb-2">Focus on proper form and technique.</li>
              <li className="mb-2">Balance your workout routine with rest days.</li>
            </ul>
          </div>

          {/* Nutrition Advice Card */}
          <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-yellow-600">Nutrition Advice</h2>
            <ul>
              <li className="mb-2">Incorporate a variety of fruits and vegetables into your diet.</li>
              <li className="mb-2">Consume lean proteins to support muscle recovery.</li>
              <li className="mb-2">Monitor your portion sizes and avoid overeating.</li>
              <li className="mb-2">Consider consulting with a nutritionist for personalized advice.</li>
            </ul>
          </div>

          {/* Additional Card */}
          <div className="bg-gray-100 border-2 border-gray-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-600">Fitness Resources</h2>
            <ul>
              <li className="mb-2">Access to exclusive workout videos and tutorials.</li>
              <li className="mb-2">Download our fitness app for personalized workout plans.</li>
              <li className="mb-2">Join our community forum for support and motivation.</li>
              <li className="mb-2">Receive weekly newsletters with tips and updates.</li>
            </ul>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && profile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-1/3 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Trainer Profile</h1>
              <p><strong>Name:</strong> {profile.trainername}</p>
              <p><strong>Email:</strong> {profile.trainerEmail}</p>
              <p><strong>Specialization:</strong> {profile.specialization}</p>
              <p><strong>Phone:</strong> {profile.phonenumber}</p>
              <p><strong>Age:</strong> {profile.age}</p>
              {/* <p><strong>City:</strong> {profile.city}</p> */}
              {/* Add more fields as necessary */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Trainerpage;


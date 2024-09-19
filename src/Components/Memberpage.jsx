// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // // // // // import Slotspage from './Slotspage';

// // // // // // // // const Memberpage = () => {
// // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // //   const [memberDetails, setMemberDetails] = useState(null);

// // // // // // // //   const toggleDropdown = () => {
// // // // // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // // // // //   };

// // // // // // // //   const handleProfileClick = async () => {
// // // // // // // //     const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage

// // // // // // // //     if (memberid) {
// // // // // // // //       try {
// // // // // // // //         // Replace with your actual API endpoint and method
// // // // // // // //         const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // // // // // //         if (!response.ok) throw new Error('Failed to fetch user details');
// // // // // // // //         const data = await response.json();
// // // // // // // //         setMemberDetails(data);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error fetching user details:', error);
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     setIsDropdownOpen(false); // Close dropdown
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex h-screen">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <aside className="bg-blue-800 text-white w-64 h-full p-4">
// // // // // // // //         <div className="text-2xl font-bold mb-6">GYMFIT</div>
// // // // // // // //         <ul>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/" className="hover:text-gray-400">Dashboard</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout plans</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // // // // // //           </li>
// // // // // // // //         </ul>
// // // // // // // //       </aside>

// // // // // // // //       {/* Main Content */}
// // // // // // // //       <main className="flex-1 p-4 relative">
// // // // // // // //         <div className="absolute top-4 right-4">
// // // // // // // //           <div className="relative">
// // // // // // // //             <AccountCircleIcon
// // // // // // // //               fontSize="large"
// // // // // // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // // // // // //               onClick={toggleDropdown}
// // // // // // // //             />
// // // // // // // //             {isDropdownOpen && (
// // // // // // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // // // // // //                 <ul>
// // // // // // // //                   <li
// // // // // // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // // // // // //                     onClick={handleProfileClick}
// // // // // // // //                   >
// // // // // // // //                     View Profile
// // // // // // // //                   </li>
// // // // // // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // // // // // //                 </ul>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Conditionally Render Member Details or Slotspage */}
// // // // // // // //         {memberDetails ? (
// // // // // // // //           <div>
// // // // // // // //             <h1 className="text-2xl font-bold mb-4">Member Profile</h1>
// // // // // // // //             <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // // // // // //             <p><strong>Name:</strong> {memberDetails.name}</p>
// // // // // // // //             <p><strong>Email:</strong> {memberDetails.email}</p>
// // // // // // // //             <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // // // // // //             <p><strong>Address:</strong> {memberDetails.address}</p>
// // // // // // // //             <p><strong>City:</strong> {memberDetails.city}</p>
// // // // // // // //             <p><strong>Height:</strong> {memberDetails.height}</p>
// // // // // // // //             <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // // // // // //             <br></br>
// // // // // // // //             <h3 className="text-2xl font-bold mb-4">Emergency Contact information</h3>
// // // // // // // //             <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // // // // // //             <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // // // // // //             <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // // // // // //             {/* Add more fields as necessary */}
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div>
// // // // // // // //             <Slotspage />
// // // // // // // //             {/* <h1 className="text-2xl font-bold">Welcome to Member Page</h1> */}
// // // // // // // //             {/* Additional content can be added here */}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Memberpage;


// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // // // // // import Slotspage from './Slotspage';
// // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // const Memberpage = () => {
// // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // // // //   const [memberDetails, setMemberDetails] = useState(null);

// // // // // // // //   const toggleDropdown = () => {
// // // // // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // // // // //   };

// // // // // // // //   const handleProfileClick = async () => {
// // // // // // // //     const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage

// // // // // // // //     if (memberid) {
// // // // // // // //       try {
// // // // // // // //         // Replace with your actual API endpoint and method
// // // // // // // //         const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // // // // // //         if (!response.ok) throw new Error('Failed to fetch user details');
// // // // // // // //         const data = await response.json();
// // // // // // // //         setMemberDetails(data);
// // // // // // // //         setIsModalOpen(true); // Open the modal
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error fetching user details:', error);
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     setIsDropdownOpen(false); // Close dropdown
// // // // // // // //   };

// // // // // // // //   const closeModal = () => {
// // // // // // // //     setIsModalOpen(false);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className="flex h-screen bg-cover bg-center"
// // // // // // // //       style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// // // // // // // //     >
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <aside className="bg-blue-800 text-white w-64 h-full p-4">
// // // // // // // //         <div className="text-2xl font-bold mb-6">GYMFIT</div>
// // // // // // // //         <ul>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // // // // // //           </li>
// // // // // // // //           <li className="mb-4">
// // // // // // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // // // // // //           </li>
// // // // // // // //         </ul>
// // // // // // // //       </aside>

// // // // // // // //       {/* Main Content */}

// // // // // // // //       <main className="flex-1 p-6 bg-gray-100">
// // // // // // // //         <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //           {/* User Profile Card */}
// // // // // // // //           <div className="bg-white shadow-lg rounded-lg p-4">
// // // // // // // //             <h2 className="text-xl font-semibold mb-4">User Profile</h2>
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <span className="font-medium">Name:</span> John Doe
// // // // // // // //             </div>
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <span className="font-medium">Email:</span> johndoe@example.com
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <span className="font-medium">Membership:</span> Gold Plan
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Membership Status Card */}
// // // // // // // //           <div className="bg-white shadow-lg rounded-lg p-4">
// // // // // // // //             <h2 className="text-xl font-semibold mb-4">Membership Status</h2>
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // // // // // // //             </div>
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <span className="font-medium">End Date:</span> June 30, 2024
// // // // // // // //             </div>
// // // // // // // //             <div>
// // // // // // // //               <span className="font-medium">Status:</span> Active
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Upcoming Classes Card */}
// // // // // // // //           <div className="bg-white shadow-lg rounded-lg p-4">
// // // // // // // //             <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
// // // // // // // //             <ul>
// // // // // // // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // // // // // // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // // // // // // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // // // // // // //             </ul>
// // // // // // // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // // // // // // //           </div>

// // // // // // // //           {/* Recent Activities Card */}
// // // // // // // //           <div className="bg-white shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // // // // // // //             <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
// // // // // // // //             <ul>
// // // // // // // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // // // // // // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // // // // // // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // // // // // // //             </ul>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </main>

// // // // // // // //       <main className="flex-1 p-4 relative">
// // // // // // // //         <div className="absolute top-4 right-4">
// // // // // // // //           <div className="relative">
// // // // // // // //             <AccountCircleIcon
// // // // // // // //               fontSize="large"
// // // // // // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // // // // // //               onClick={toggleDropdown}
// // // // // // // //             />
// // // // // // // //             {isDropdownOpen && (
// // // // // // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // // // // // //                 <ul>
// // // // // // // //                   <li
// // // // // // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // // // // // //                     onClick={handleProfileClick}
// // // // // // // //                   >
// // // // // // // //                     View Profile
// // // // // // // //                   </li>
// // // // // // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // // // // // //                 </ul>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Conditionally Render Slotspage or Content */}
// // // // // // // //         {!memberDetails ? (
// // // // // // // //           <div>
// // // // // // // //             <Slotspage />
// // // // // // // //             {/* <h1 className="text-2xl font-bold">Welcome to Member Page</h1> */}
// // // // // // // //             {/* Additional content can be added here */}
// // // // // // // //           </div>
// // // // // // // //         ) : null}

// // // // // // // //         {/* Modal */}
// // // // // // // //         {isModalOpen && memberDetails && (
// // // // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // // // // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // // // // // // //               <button
// // // // // // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // // // // // // //                 onClick={closeModal}
// // // // // // // //               >
// // // // // // // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // // // // // // //                 </svg>
// // // // // // // //               </button>
// // // // // // // //               <h1 className="text-2xl font-bold mb-4">Member Profile</h1>
// // // // // // // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // // // // // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // // // // // // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // // // // // // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // // // // // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // // // // // // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // // // // // // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // // // // // // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // // // // // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // // // // // // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // // // // // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // // // // // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // // // // // //               {/* Add more fields as necessary */}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Memberpage;


// // // // // // import React, { useState } from 'react';
// // // // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // // // import Slotspage from './Slotspage';
// // // // // // import { Link } from 'react-router-dom';

// // // // // // const Memberpage = () => {
// // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // //   const [memberDetails, setMemberDetails] = useState(null);

// // // // // //   const toggleDropdown = () => {
// // // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // // //   };

// // // // // //   const handleProfileClick = async () => {
// // // // // //     const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage

// // // // // //     if (memberid) {
// // // // // //       try {
// // // // // //         // Replace with your actual API endpoint and method
// // // // // //         const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // // // //         if (!response.ok) throw new Error('Failed to fetch user details');
// // // // // //         const data = await response.json();
// // // // // //         setMemberDetails(data);
// // // // // //         setIsModalOpen(true); // Open the modal
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching user details:', error);
// // // // // //       }
// // // // // //     }

// // // // // //     setIsDropdownOpen(false); // Close dropdown
// // // // // //   };

// // // // // //   const closeModal = () => {
// // // // // //     setIsModalOpen(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// // // // // //       {/* Sidebar */}
// // // // // //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// // // // // //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// // // // // //         <ul>
// // // // // //           <li className="mb-4">
// // // // // //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4">
// // // // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4">
// // // // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4">
// // // // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4">
// // // // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //       </aside>

// // // // // //       {/* Main Content */}
// // // // // //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
// // // // // //         <div className="absolute top-4 right-4">
// // // // // //           <div className="relative">
// // // // // //             <AccountCircleIcon
// // // // // //               fontSize="large"
// // // // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // // // //               onClick={toggleDropdown}
// // // // // //             />
// // // // // //             {isDropdownOpen && (
// // // // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // // // //                 <ul>
// // // // // //                   <li
// // // // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // // // //                     onClick={handleProfileClick}
// // // // // //                   >
// // // // // //                     View Profile
// // // // // //                   </li>
// // // // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// // // // // //           Dashboard
// // // // // //         </h1>

// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //           {/* User Profile Card */}
// // // // // //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// // // // // //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// // // // // //             <div className="mb-4">
// // // // // //               <span className="font-medium">Name:</span> John Doe
// // // // // //             </div>
// // // // // //             <div className="mb-4">
// // // // // //               <span className="font-medium">Email:</span> johndoe@example.com
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <span className="font-medium">Membership:</span> Gold Plan
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Membership Status Card */}
// // // // // //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// // // // // //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// // // // // //             <div className="mb-4">
// // // // // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // // // // //             </div>
// // // // // //             <div className="mb-4">
// // // // // //               <span className="font-medium">End Date:</span> June 30, 2024
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <span className="font-medium">Status:</span> Active
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Upcoming Classes Card */}
// // // // // //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// // // // // //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// // // // // //             <ul>
// // // // // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // // // // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // // // // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // // // // //             </ul>
// // // // // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // // // // //           </div>

// // // // // //           {/* Recent Activities Card */}
// // // // // //           <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // // // // //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// // // // // //             <ul>
// // // // // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // // // // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // // // // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // // // // //             </ul>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Conditionally Render Slotspage or Content */}
// // // // // //         {!memberDetails ? (
// // // // // //           <div>
// // // // // //             {/* <Slotspage /> */}
// // // // // //             {/* <h1 className="text-2xl font-bold">Welcome to Member Page</h1> */}
// // // // // //             {/* Additional content can be added here */}
// // // // // //           </div>
// // // // // //         ) : null}

// // // // // //         {/* Modal */}
// // // // // //         {isModalOpen && memberDetails && (
// // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // // // // //               <button
// // // // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // // // // //                 onClick={closeModal}
// // // // // //               >
// // // // // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // // // // //                 </svg>
// // // // // //               </button>
// // // // // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// // // // // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // // // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // // // // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // // // // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // // // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // // // // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // // // // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // // // // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // // // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // // // // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // // // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // // // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // // // //               {/* Add more fields as necessary */}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Memberpage;


// // // // // import React, { useState } from 'react';
// // // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // // import { Link } from 'react-router-dom';

// // // // // const Memberpage = () => {
// // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [memberDetails, setMemberDetails] = useState(null);

// // // // //   const toggleDropdown = () => {
// // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // //   };

// // // // //   const handleProfileClick = async () => {
// // // // //     const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage

// // // // //     if (memberid) {
// // // // //       try {
// // // // //         // Replace with your actual API endpoint and method
// // // // //         const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // // //         if (!response.ok) throw new Error('Failed to fetch user details');
// // // // //         const data = await response.json();
// // // // //         setMemberDetails(data);
// // // // //         setIsModalOpen(true); // Open the modal
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching user details:', error);
// // // // //       }
// // // // //     }

// // // // //     setIsDropdownOpen(false); // Close dropdown
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setIsModalOpen(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// // // // //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// // // // //         <ul>
// // // // //           <li className="mb-4">
// // // // //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </aside>

// // // // //       {/* Main Content */}
// // // // //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
// // // // //         <div className="absolute top-4 right-4">
// // // // //           <div className="relative">
// // // // //             <AccountCircleIcon
// // // // //               fontSize="large"
// // // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // // //               onClick={toggleDropdown}
// // // // //             />
// // // // //             {isDropdownOpen && (
// // // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // // //                 <ul>
// // // // //                   <li
// // // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // // //                     onClick={handleProfileClick}
// // // // //                   >
// // // // //                     View Profile
// // // // //                   </li>
// // // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// // // // //           Dashboard
// // // // //         </h1>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {/* User Profile Card */}
// // // // //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
// // // // //             </div>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
// // // // //             </div>
// // // // //             <button
// // // // //               className="mt-4 text-blue-600 hover:underline"
// // // // //               onClick={handleProfileClick}
// // // // //             >
// // // // //               View Full Profile
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Membership Status Card */}
// // // // //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // // // //             </div>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">End Date:</span> June 30, 2024
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-medium">Status:</span> Active
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Upcoming Classes Card */}
// // // // //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // // // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // // // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // // // //             </ul>
// // // // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // // // //           </div>

// // // // //           {/* Recent Activities Card */}
// // // // //           <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // // // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // // // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // // // //             </ul>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Modal */}
// // // // //         {isModalOpen && memberDetails && (
// // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // // // //               <button
// // // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // // // //                 onClick={closeModal}
// // // // //               >
// // // // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// // // // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // // // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // // // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // // // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // // // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // // // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // // // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // // //               {/* Add more fields as necessary */}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Memberpage;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // // import { Link } from 'react-router-dom';

// // // // // const Memberpage = () => {
// // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [memberDetails, setMemberDetails] = useState(() => {
// // // // //     // Initialize state from sessionStorage or set to null
// // // // //     const savedDetails = sessionStorage.getItem('memberDetails');
// // // // //     return savedDetails ? JSON.parse(savedDetails) : null;
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     // Fetch and store member details if not in state
// // // // //     const fetchMemberDetails = async () => {
// // // // //       const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage
// // // // //       if (memberid && !memberDetails) {
// // // // //         try {
// // // // //           // Replace with your actual API endpoint and method
// // // // //           const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // // //           if (!response.ok) throw new Error('Failed to fetch user details');
// // // // //           const data = await response.json();
// // // // //           setMemberDetails(data);
// // // // //           sessionStorage.setItem('memberDetails', JSON.stringify(data)); // Save details in sessionStorage
// // // // //         } catch (error) {
// // // // //           console.error('Error fetching user details:', error);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     fetchMemberDetails();
// // // // //   }, [memberDetails]);

// // // // //   const toggleDropdown = () => {
// // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // //   };

// // // // //   const handleProfileClick = () => {
// // // // //     setIsModalOpen(true); // Open the modal
// // // // //     setIsDropdownOpen(false); // Close dropdown
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setIsModalOpen(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// // // // //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// // // // //         <ul>
// // // // //           <li className="mb-4">
// // // // //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </aside>

// // // // //       {/* Main Content */}
// // // // //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
// // // // //         <div className="absolute top-4 right-4">
// // // // //           <div className="relative">
// // // // //             <AccountCircleIcon
// // // // //               fontSize="large"
// // // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // // //               onClick={toggleDropdown}
// // // // //             />
// // // // //             {isDropdownOpen && (
// // // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // // //                 <ul>
// // // // //                   <li
// // // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // // //                     onClick={handleProfileClick}
// // // // //                   >
// // // // //                     View Profile
// // // // //                   </li>
// // // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// // // // //           WELCOME TO GYMFIT
// // // // //         </h1>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {/* User Profile Card */}
// // // // //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
// // // // //             </div>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
// // // // //             </div>
// // // // //             <button
// // // // //               className="mt-4 text-blue-600 hover:underline"
// // // // //               onClick={handleProfileClick}
// // // // //             >
// // // // //               View Full Profile
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Membership Status Card */}
// // // // //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // // // //             </div>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">End Date:</span> June 30, 2024
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-medium">Status:</span> Active
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Upcoming Classes Card */}
// // // // //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // // // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // // // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // // // //             </ul>
// // // // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // // // //           </div>

// // // // //           {/* Recent Activities Card */}
// // // // //           {/* <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // // // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // // // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // // // //             </ul>
// // // // //           </div> */}

// // // // //           <div className="col-span-1 md:col-span-2 lg:col-span-3">
// // // // //             <img
// // // // //               src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg" // Replace with your image path
// // // // //               alt="Fitness"
// // // // //               className="w-full h-auto object-cover rounded-lg shadow-md"
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Modal */}
// // // // //         {isModalOpen && memberDetails && (
// // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // // // //               <button
// // // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // // // //                 onClick={closeModal}
// // // // //               >
// // // // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// // // // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // // // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // // // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // // // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // // // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // // // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // // // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // // //               {/* Add more fields as necessary */}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Memberpage;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // // import { Link } from 'react-router-dom';

// // // // // const Memberpage = () => {
// // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [memberDetails, setMemberDetails] = useState(() => {
// // // // //     // Initialize state from sessionStorage or set to null
// // // // //     const savedDetails = sessionStorage.getItem('memberDetails');
// // // // //     return savedDetails ? JSON.parse(savedDetails) : null;
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     // Fetch and store member details if not in state
// // // // //     const fetchMemberDetails = async () => {
// // // // //       const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage
// // // // //       if (memberid && !memberDetails) {
// // // // //         try {
// // // // //           // Replace with your actual API endpoint and method
// // // // //           const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // // //           if (!response.ok) throw new Error('Failed to fetch user details');
// // // // //           const data = await response.json();
// // // // //           setMemberDetails(data);
// // // // //           sessionStorage.setItem('memberDetails', JSON.stringify(data)); // Save details in sessionStorage
// // // // //         } catch (error) {
// // // // //           console.error('Error fetching user details:', error);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     fetchMemberDetails();
// // // // //   }, [memberDetails]);

// // // // //   const toggleDropdown = () => {
// // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // //   };

// // // // //   const handleProfileClick = () => {
// // // // //     setIsModalOpen(true); // Open the modal
// // // // //     setIsDropdownOpen(false); // Close dropdown
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setIsModalOpen(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// // // // //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// // // // //         <ul>
// // // // //           <li className="mb-4">
// // // // //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // // //           </li>
// // // // //           <li className="mb-4">
// // // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </aside>

// // // // //       {/* Main Content */}
// // // // //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
// // // // //         <div className="absolute top-4 right-4">
// // // // //           <div className="relative">
// // // // //             <AccountCircleIcon
// // // // //               fontSize="large"
// // // // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // // // //               onClick={toggleDropdown}
// // // // //             />
// // // // //             {isDropdownOpen && (
// // // // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // // // //                 <ul>
// // // // //                   <li
// // // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // // //                     onClick={handleProfileClick}
// // // // //                   >
// // // // //                     View Profile
// // // // //                   </li>
// // // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// // // // //           Dashboard
// // // // //         </h1>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {/* User Profile Card */}
// // // // //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
// // // // //             </div>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
// // // // //             </div>
// // // // //             <button
// // // // //               className="mt-4 text-blue-600 hover:underline"
// // // // //               onClick={handleProfileClick}
// // // // //             >
// // // // //               View Full Profile
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Membership Status Card */}
// // // // //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // // // //             </div>
// // // // //             <div className="mb-4">
// // // // //               <span className="font-medium">End Date:</span> June 30, 2024
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-medium">Status:</span> Active
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Upcoming Classes Card */}
// // // // //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // // // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // // // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // // // //             </ul>
// // // // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // // // //           </div>

// // // // //           {/* Recent Activities Card */}
// // // // //           {/* <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // // // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // // // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // // // //             </ul>
// // // // //           </div> */}

// // // // //           {/* Image After Recent Activities */}
// // // // //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6">
// // // // //             <img
// // // // //               src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg" // Replace with your image path
// // // // //               alt="Fitness"
// // // // //               className="w-full h-auto object-cover rounded-lg shadow-md"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Gym Tips Card */}
// // // // //           <div className="bg-teal-100 border-2 border-teal-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-teal-600">Gym Tips</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Stay hydrated before and after workouts.</li>
// // // // //               <li className="mb-2">Warm up properly to prevent injuries.</li>
// // // // //               <li className="mb-2">Focus on proper form and technique.</li>
// // // // //               <li className="mb-2">Balance your workout routine with rest days.</li>
// // // // //             </ul>
// // // // //           </div>

// // // // //           {/* Nutrition Advice Card */}
// // // // //           <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg p-4">
// // // // //             <h2 className="text-xl font-semibold mb-4 text-yellow-600">Nutrition Advice</h2>
// // // // //             <ul>
// // // // //               <li className="mb-2">Incorporate protein-rich foods in your diet.</li>
// // // // //               <li className="mb-2">Eat a variety of fruits and vegetables.</li>
// // // // //               <li className="mb-2">Avoid processed and sugary foods.</li>
// // // // //               <li className="mb-2">Consider consulting with a nutritionist for personalized advice.</li>
// // // // //             </ul>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Modal */}
// // // // //         {isModalOpen && memberDetails && (
// // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // // // //               <button
// // // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // // // //                 onClick={closeModal}
// // // // //               >
// // // // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// // // // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // // // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // // // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // // // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // // // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // // // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // // // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // // //               {/* Add more fields as necessary */}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Memberpage;


// // // // import React, { useState, useEffect } from 'react';
// // // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // // import { Link } from 'react-router-dom';

// // // // const Memberpage = () => {
// // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [memberDetails, setMemberDetails] = useState(() => {
// // // //     // Initialize state from sessionStorage or set to null
// // // //     const savedDetails = sessionStorage.getItem('memberDetails');
// // // //     return savedDetails ? JSON.parse(savedDetails) : null;
// // // //   });

// // // //   useEffect(() => {
// // // //     // Fetch and store member details if not in state
// // // //     const fetchMemberDetails = async () => {
// // // //       const memberid = sessionStorage.getItem('memberid'); // Get member ID from session storage
// // // //       if (memberid && !memberDetails) {
// // // //         try {
// // // //           // Replace with your actual API endpoint and method
// // // //           const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // // //           if (!response.ok) throw new Error('Failed to fetch user details');
// // // //           const data = await response.json();
// // // //           setMemberDetails(data);
// // // //           sessionStorage.setItem('memberDetails', JSON.stringify(data)); // Save details in sessionStorage
// // // //         } catch (error) {
// // // //           console.error('Error fetching user details:', error);
// // // //         }
// // // //       }
// // // //     };

// // // //     fetchMemberDetails();
// // // //   }, [memberDetails]);

// // // //   const toggleDropdown = () => {
// // // //     setIsDropdownOpen(!isDropdownOpen);
// // // //   };

// // // //   const handleProfileClick = () => {
// // // //     setIsModalOpen(true); // Open the modal
// // // //     setIsDropdownOpen(false); // Close dropdown
// // // //   };

// // // //   const closeModal = () => {
// // // //     setIsModalOpen(false);
// // // //   };

// // // //   return (
// // // //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// // // //       {/* Sidebar */}
// // // //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// // // //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// // // //         <ul>
// // // //           <li className="mb-4">
// // // //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // // //           </li>
// // // //           <li className="mb-4">
// // // //             <a href="#" className="hover:text-gray-400">Logout</a>
// // // //           </li>
// // // //         </ul>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
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
// // // //                   <li
// // // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // // //                     onClick={handleProfileClick}
// // // //                   >
// // // //                     View Profile
// // // //                   </li>
// // // //                   <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
// // // //                 </ul>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// // // //           Dashboard
// // // //         </h1>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {/* User Profile Card */}
// // // //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// // // //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// // // //             <div className="mb-4">
// // // //               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
// // // //             </div>
// // // //             <div className="mb-4">
// // // //               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
// // // //             </div>
// // // //             <div>
// // // //               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
// // // //             </div>
// // // //             <button
// // // //               className="mt-4 text-blue-600 hover:underline"
// // // //               onClick={handleProfileClick}
// // // //             >
// // // //               View Full Profile
// // // //             </button>
// // // //           </div>

// // // //           {/* Membership Status Card */}
// // // //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// // // //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// // // //             <div className="mb-4">
// // // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // // //             </div>
// // // //             <div className="mb-4">
// // // //               <span className="font-medium">End Date:</span> June 30, 2024
// // // //             </div>
// // // //             <div>
// // // //               <span className="font-medium">Status:</span> Active
// // // //             </div>
// // // //           </div>

// // // //           {/* Upcoming Classes Card */}
// // // //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// // // //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// // // //             <ul>
// // // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // // //             </ul>
// // // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // // //           </div>

// // // //           {/* Recent Activities Card */}
// // // //           {/* <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // // //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// // // //             <ul>
// // // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // // //             </ul>
// // // //           </div> */}

// // // //           {/* Image After Recent Activities */}
// // // //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 flex justify-center">
// // // //             <img
// // // //               src="/assets/fitness-image.jpg" // Replace with your image path
// // // //               alt="Fitness"
// // // //               className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
// // // //             />
// // // //           </div>

// // // //           {/* Centered Heading */}
// // // //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 text-center">
// // // //             <h2 className="text-3xl font-bold text-gray-800">Enhance Your Fitness Journey</h2>
// // // //             <p className="mt-2 text-gray-600">Explore more resources and tips to help you achieve your fitness goals.</p>
// // // //           </div>

// // // //           {/* Gym Tips Card */}
// // // //           <div className="bg-teal-100 border-2 border-teal-300 shadow-lg rounded-lg p-4">
// // // //             <h2 className="text-xl font-semibold mb-4 text-teal-600">Gym Tips</h2>
// // // //             <ul>
// // // //               <li className="mb-2">Stay hydrated before and after workouts.</li>
// // // //               <li className="mb-2">Warm up properly to prevent injuries.</li>
// // // //               <li className="mb-2">Focus on proper form and technique.</li>
// // // //               <li className="mb-2">Balance your workout routine with rest days.</li>
// // // //             </ul>
// // // //           </div>

// // // //           {/* Nutrition Advice Card */}
// // // //           <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg p-4">
// // // //             <h2 className="text-xl font-semibold mb-4 text-yellow-600">Nutrition Advice</h2>
// // // //             <ul>
// // // //               <li className="mb-2">Incorporate a variety of fruits and vegetables into your diet.</li>
// // // //               <li className="mb-2">Consume lean proteins to support muscle recovery.</li>
// // // //               <li className="mb-2">Monitor your portion sizes and avoid overeating.</li>
// // // //               <li className="mb-2">Consider consulting with a nutritionist for personalized advice.</li>
// // // //             </ul>
// // // //           </div>

// // // //           {/* Additional Card */}
// // // //           <div className="bg-gray-100 border-2 border-gray-300 shadow-lg rounded-lg p-4">
// // // //             <h2 className="text-xl font-semibold mb-4 text-gray-600">Fitness Resources</h2>
// // // //             <ul>
// // // //               <li className="mb-2">Access to exclusive workout videos and tutorials.</li>
// // // //               <li className="mb-2">Download our fitness app for personalized workout plans.</li>
// // // //               <li className="mb-2">Join our community forum for support and motivation.</li>
// // // //               <li className="mb-2">Receive weekly newsletters with tips and updates.</li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>

// // // //         {/* Modal */}
// // // //         {isModalOpen && memberDetails && (
// // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // // //               <button
// // // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // // //                 onClick={closeModal}
// // // //               >
// // // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // // //                 </svg>
// // // //               </button>
// // // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// // // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // // //               {/* Add more fields as necessary */}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Memberpage;


// // // import React, { useState, useEffect } from 'react';
// // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // import { Link, useNavigate } from 'react-router-dom';

// // // const Memberpage = () => {
// // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
// // //   const [memberDetails, setMemberDetails] = useState(() => {
// // //     const savedDetails = sessionStorage.getItem('memberDetails');
// // //     return savedDetails ? JSON.parse(savedDetails) : null;
// // //   });

// // //   const navigate = useNavigate(); // Initialize navigate for redirection

// // //   useEffect(() => {
// // //     const fetchMemberDetails = async () => {
// // //       const memberid = sessionStorage.getItem('memberid');
// // //       if (memberid && !memberDetails) {
// // //         try {
// // //           const response = await fetch(`http://localhost:8000/member/${memberid}`);
// // //           if (!response.ok) throw new Error('Failed to fetch user details');
// // //           const data = await response.json();
// // //           setMemberDetails(data);
// // //           sessionStorage.setItem('memberDetails', JSON.stringify(data));
// // //         } catch (error) {
// // //           console.error('Error fetching user details:', error);
// // //         }
// // //       }
// // //     };

// // //     fetchMemberDetails();
// // //   }, [memberDetails]);

// // //   const toggleDropdown = () => {
// // //     setIsDropdownOpen(!isDropdownOpen);
// // //   };

// // //   const handleProfileClick = () => {
// // //     setIsModalOpen(true);
// // //     setIsDropdownOpen(false);
// // //   };

// // //   const closeModal = () => {
// // //     setIsModalOpen(false);
// // //   };

// // //   const handleLogoutClick = () => {
// // //     setIsLogoutModalOpen(true); // Open logout confirmation modal
// // //     setIsDropdownOpen(false); // Close dropdown
// // //   };

// // //   const confirmLogout = () => {
// // //     sessionStorage.clear(); // Clear session storage
// // //     navigate('/login'); // Redirect to login page
// // //   };

// // //   const closeLogoutModal = () => {
// // //     setIsLogoutModalOpen(false); // Close logout confirmation modal
// // //   };

// // //   return (
// // //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// // //       {/* Sidebar */}
// // //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// // //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// // //         <ul>
// // //           <li className="mb-4">
// // //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// // //           </li>
// // //           <li className="mb-4">
// // //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// // //           </li>
// // //           <li className="mb-4">
// // //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// // //           </li>
// // //           <li className="mb-4">
// // //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// // //           </li>
// // //           <li className="mb-4">
// // //             <a href="#" onClick={handleLogoutClick} className="hover:text-gray-400">Logout</a>
// // //           </li>
// // //         </ul>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
// // //         <div className="absolute top-4 right-4">
// // //           <div className="relative">
// // //             <AccountCircleIcon
// // //               fontSize="large"
// // //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// // //               onClick={toggleDropdown}
// // //             />
// // //             {isDropdownOpen && (
// // //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// // //                 <ul>
// // //                   <li
// // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // //                     onClick={handleProfileClick}
// // //                   >
// // //                     View Profile
// // //                   </li>
// // //                   <li
// // //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// // //                     onClick={handleLogoutClick}
// // //                   >
// // //                     Logout
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// // //           Dashboard
// // //         </h1>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {/* User Profile Card */}
// // //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// // //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// // //             <div className="mb-4">
// // //               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
// // //             </div>
// // //             <div className="mb-4">
// // //               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
// // //             </div>
// // //             <div>
// // //               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
// // //             </div>
// // //             <button
// // //               className="mt-4 text-blue-600 hover:underline"
// // //               onClick={handleProfileClick}
// // //             >
// // //               View Full Profile
// // //             </button>
// // //           </div>

// // //           {/* Membership Status Card */}
// // //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// // //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// // //             <div className="mb-4">
// // //               <span className="font-medium">Start Date:</span> January 1, 2024
// // //             </div>
// // //             <div className="mb-4">
// // //               <span className="font-medium">End Date:</span> June 30, 2024
// // //             </div>
// // //             <div>
// // //               <span className="font-medium">Status:</span> Active
// // //             </div>
// // //           </div>

// // //           {/* Upcoming Classes Card */}
// // //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// // //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// // //             <ul>
// // //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// // //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// // //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// // //             </ul>
// // //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// // //           </div>

// // //           {/* Recent Activities Card */}
// // //           {/* Uncomment this section if you have recent activities */}
// // //           {/* <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// // //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// // //             <ul>
// // //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// // //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// // //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// // //             </ul>
// // //           </div> */}

// // //           {/* Image After Recent Activities */}
// // //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 flex justify-center">
// // //             <img
// // //               src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg"
// // //               alt="Fitness"
// // //               className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
// // //             />
// // //           </div>

// // //           {/* Centered Heading */}
// // //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 text-center">
// // //             <h2 className="text-3xl font-bold text-gray-800">Enhance Your Fitness Journey</h2>
// // //             <p className="mt-2 text-gray-600">Explore more resources and tips to help you achieve your fitness goals.</p>
// // //           </div>

// // //           {/* Gym Tips Card */}
// // //           <div className="bg-teal-100 border-2 border-teal-300 shadow-lg rounded-lg p-4">
// // //             <h2 className="text-xl font-semibold mb-4 text-teal-600">Gym Tips</h2>
// // //             <ul>
// // //               <li className="mb-2">Stay hydrated before and after workouts.</li>
// // //               <li className="mb-2">Warm up properly to prevent injuries.</li>
// // //               <li className="mb-2">Focus on proper form and technique.</li>
// // //               <li className="mb-2">Balance your workout routine with rest days.</li>
// // //             </ul>
// // //           </div>

// // //           {/* Nutrition Advice Card */}
// // //           <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg p-4">
// // //             <h2 className="text-xl font-semibold mb-4 text-yellow-600">Nutrition Advice</h2>
// // //             <ul>
// // //               <li className="mb-2">Incorporate a variety of fruits and vegetables into your diet.</li>
// // //               <li className="mb-2">Consume lean proteins to support muscle recovery.</li>
// // //               <li className="mb-2">Monitor your portion sizes and avoid overeating.</li>
// // //               <li className="mb-2">Consider consulting with a nutritionist for personalized advice.</li>
// // //             </ul>
// // //           </div>

// // //           {/* Additional Card */}
// // //           <div className="bg-gray-100 border-2 border-gray-300 shadow-lg rounded-lg p-4">
// // //             <h2 className="text-xl font-semibold mb-4 text-gray-600">Fitness Resources</h2>
// // //             <ul>
// // //               <li className="mb-2">Access to exclusive workout videos and tutorials.</li>
// // //               <li className="mb-2">Download our fitness app for personalized workout plans.</li>
// // //               <li className="mb-2">Join our community forum for support and motivation.</li>
// // //               <li className="mb-2">Receive weekly newsletters with tips and updates.</li>
// // //             </ul>
// // //           </div>
// // //         </div>

// // //         {/* Profile Modal */}
// // //         {isModalOpen && memberDetails && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // //               <button
// // //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // //                 onClick={closeModal}
// // //               >
// // //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// // //                 </svg>
// // //               </button>
// // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// // //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// // //               <p><strong>Name:</strong> {memberDetails.name}</p>
// // //               <p><strong>Email:</strong> {memberDetails.email}</p>
// // //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// // //               <p><strong>Address:</strong> {memberDetails.address}</p>
// // //               <p><strong>City:</strong> {memberDetails.city}</p>
// // //               <p><strong>Height:</strong> {memberDetails.height}</p>
// // //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// // //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// // //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// // //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// // //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// // //               {/* Add more fields as necessary */}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Logout Confirmation Modal */}
// // //         {isLogoutModalOpen && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// // //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Confirm Logout</h1>
// // //               <p className="mb-4">Are you sure you want to log out?</p>
// // //               <div className="flex justify-end">
// // //                 <button
// // //                   className="bg-red-500 text-white px-4 py-2 rounded mr-2"
// // //                   onClick={confirmLogout}
// // //                 >
// // //                   Yes, Logout
// // //                 </button>
// // //                 <button
// // //                   className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
// // //                   onClick={closeLogoutModal}
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Memberpage;



// // //-------------------for storing membership id


// // import React, { useState, useEffect } from 'react';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Memberpage = () => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
// //   const [memberDetails, setMemberDetails] = useState(() => {
// //     const savedDetails = sessionStorage.getItem('memberDetails');
// //     return savedDetails ? JSON.parse(savedDetails) : null;
// //   });

// //   const navigate = useNavigate(); // Initialize navigate for redirection

// //   useEffect(() => {
// //     const fetchMemberDetails = async () => {
// //       const memberid = sessionStorage.getItem('memberid');
// //       if (memberid && !memberDetails) {
// //         try {
// //           const response = await fetch(`http://localhost:8000/member/${memberid}`);
// //           if (!response.ok) throw new Error('Failed to fetch user details');
// //           const data = await response.json();

// //           // Store the membershipId in sessionStorage
// //           if (data.membershipid) {
// //             sessionStorage.setItem('membershipid', data.membershipid);
// //           }

// //           setMemberDetails(data);
// //           sessionStorage.setItem('memberDetails', JSON.stringify(data));
// //         } catch (error) {
// //           console.error('Error fetching user details:', error);
// //         }
// //       }
// //     };

// //     fetchMemberDetails();
// //   }, [memberDetails]);

// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   const handleProfileClick = () => {
// //     setIsModalOpen(true);
// //     setIsDropdownOpen(false);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   const handleLogoutClick = () => {
// //     setIsLogoutModalOpen(true); // Open logout confirmation modal
// //     setIsDropdownOpen(false); // Close dropdown
// //   };

// //   const confirmLogout = () => {
// //     sessionStorage.clear(); // Clear session storage
// //     navigate('/login'); // Redirect to login page
// //   };

// //   const closeLogoutModal = () => {
// //     setIsLogoutModalOpen(false); // Close logout confirmation modal
// //   };

// //   return (
// //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// //       {/* Sidebar */}
// //       <aside className="bg-gray-800 text-white w-64 h-full p-4">
// //         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// //         <ul>
// //           <li className="mb-4">
// //             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// //           </li>
// //           <li className="mb-4">
// //             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// //           </li>
// //           <li className="mb-4">
// //             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// //           </li>
// //           <li className="mb-4">
// //             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// //           </li>
// //           <li className="mb-4">
// //             <a href="#" onClick={handleLogoutClick} className="hover:text-gray-400">Logout</a>
// //           </li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6 bg-gray-100 relative overflow-y-auto">
// //         <div className="absolute top-4 right-4">
// //           <div className="relative">
// //             <AccountCircleIcon
// //               fontSize="large"
// //               className="cursor-pointer text-gray-800 hover:text-gray-600"
// //               onClick={toggleDropdown}
// //             />
// //             {isDropdownOpen && (
// //               <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg w-48">
// //                 <ul>
// //                   <li
// //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// //                     onClick={handleProfileClick}
// //                   >
// //                     View Profile
// //                   </li>
// //                   <li
// //                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
// //                     onClick={handleLogoutClick}
// //                   >
// //                     Logout
// //                   </li>
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
// //           Dashboard
// //         </h1>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {/* User Profile Card */}
// //           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
// //             <div className="mb-4">
// //               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
// //             </div>
// //             <div className="mb-4">
// //               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
// //             </div>
// //             <div>
// //               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
// //             </div>
// //             <button
// //               className="mt-4 text-blue-600 hover:underline"
// //               onClick={handleProfileClick}
// //             >
// //               View Full Profile
// //             </button>
// //           </div>

// //           {/* Membership Status Card */}
// //           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
// //             <div className="mb-4">
// //               <span className="font-medium">Start Date:</span> January 1, 2024
// //             </div>
// //             <div className="mb-4">
// //               <span className="font-medium">End Date:</span> June 30, 2024
// //             </div>
// //             <div>
// //               <span className="font-medium">Status:</span> Active
// //             </div>
// //           </div>

// //           {/* Upcoming Classes Card */}
// //           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
// //             <ul>
// //               <li className="mb-2">Yoga - Monday, 7 AM</li>
// //               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
// //               <li className="mb-2">Pilates - Friday, 8 AM</li>
// //             </ul>
// //             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
// //           </div>

// //           {/* Recent Activities Card */}
// //           {/* Uncomment this section if you have recent activities */} 
// //           {/* <div className="bg-orange-100 border-2 border-orange-300 shadow-lg rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
// //             <h2 className="text-xl font-semibold mb-4 text-orange-600">Recent Activities</h2>
// //             <ul>
// //               <li className="mb-2">Completed Yoga class on September 10, 2024</li>
// //               <li className="mb-2">Paid membership fee on September 5, 2024</li>
// //               <li className="mb-2">Booked a personal training session on September 1, 2024</li>
// //             </ul>
// //           </div> */}

// //           {/* Image After Recent Activities */}
// //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 flex justify-center">
// //             <img
// //               src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg"
// //               alt="Fitness"
// //               className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
// //             />
// //           </div>

// //           {/* Centered Heading */}
// //           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 text-center">
// //             <h2 className="text-3xl font-bold text-gray-800">Enhance Your Fitness Journey</h2>
// //             <p className="mt-2 text-gray-600">Explore more resources and tips to help you achieve your fitness goals.</p>
// //           </div>

// //           {/* Gym Tips Card */}
// //           <div className="bg-teal-100 border-2 border-teal-300 shadow-lg rounded-lg p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-teal-600">Gym Tips</h2>
// //             <ul>
// //               <li className="mb-2">Stay hydrated before and after workouts.</li>
// //               <li className="mb-2">Warm up properly to prevent injuries.</li>
// //               <li className="mb-2">Focus on proper form and technique.</li>
// //               <li className="mb-2">Balance your workout routine with rest days.</li>
// //             </ul>
// //           </div>

// //           {/* Nutrition Advice Card */}
// //           <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-yellow-600">Nutrition Advice</h2>
// //             <ul>
// //               <li className="mb-2">Incorporate a variety of fruits and vegetables into your diet.</li>
// //               <li className="mb-2">Consume lean proteins to support muscle recovery.</li>
// //               <li className="mb-2">Monitor your portion sizes and avoid overeating.</li>
// //               <li className="mb-2">Consider consulting with a nutritionist for personalized advice.</li>
// //             </ul>
// //           </div>

// //           {/* Additional Card */}
// //           <div className="bg-gray-100 border-2 border-gray-300 shadow-lg rounded-lg p-4">
// //             <h2 className="text-xl font-semibold mb-4 text-gray-600">Fitness Resources</h2>
// //             <ul>
// //               <li className="mb-2">Access to exclusive workout videos and tutorials.</li>
// //               <li className="mb-2">Download our fitness app for personalized workout plans.</li>
// //               <li className="mb-2">Join our community forum for support and motivation.</li>
// //               <li className="mb-2">Receive weekly newsletters with tips and updates.</li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Profile Modal */}
// //         {isModalOpen && memberDetails && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// //               <button
// //                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// //                 onClick={closeModal}
// //               >
// //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //                 </svg>
// //               </button>
// //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
// //               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
// //               <p><strong>Name:</strong> {memberDetails.name}</p>
// //               <p><strong>Email:</strong> {memberDetails.email}</p>
// //               <p><strong>Phone:</strong> {memberDetails.phone}</p>
// //               <p><strong>Address:</strong> {memberDetails.address}</p>
// //               <p><strong>City:</strong> {memberDetails.city}</p>
// //               <p><strong>Height:</strong> {memberDetails.height}</p>
// //               <p><strong>Weight:</strong> {memberDetails.weight}</p>
// //               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
// //               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
// //               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
// //               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
// //               {/* Add more fields as necessary */}
// //             </div>
// //           </div>
// //         )}

// //         {/* Logout Confirmation Modal */}
// //         {isLogoutModalOpen && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //             <div className="bg-white rounded-lg p-6 w-1/3 relative">
// //               <h1 className="text-2xl font-bold mb-4 text-gray-800">Confirm Logout</h1>
// //               <p className="mb-4">Are you sure you want to log out?</p>
// //               <div className="flex justify-end">
// //                 <button
// //                   className="bg-red-500 text-white px-4 py-2 rounded mr-2"
// //                   onClick={confirmLogout}
// //                 >
// //                   Yes, Logout
// //                 </button>
// //                 <button
// //                   className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
// //                   onClick={closeLogoutModal}
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // export default Memberpage;




// import React, { useState, useEffect } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const Memberpage = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
//   const [memberDetails, setMemberDetails] = useState(() => {
//     const savedDetails = sessionStorage.getItem('memberDetails');
//     return savedDetails ? JSON.parse(savedDetails) : null;
//   });
  
//   // State for membership dates
//   const [membershipStartdate, setMembershipStartdate] = useState(null);
//   const [membershipEnddate, setMembershipEnddate] = useState(null);

//   const navigate = useNavigate(); // Initialize navigate for redirection
//   const location = useLocation(); // Use location to access navigation state

//   useEffect(() => {
//     // Fetch membership dates from location state if available
//     if (location.state) {
//       const { membershipStartdate, membershipEnddate } = location.state;
//       setMembershipStartdate(membershipStartdate);
//       setMembershipEnddate(membershipEnddate);
//     }

//     const fetchMemberDetails = async () => {
//       const memberid = sessionStorage.getItem('memberid');
//       if (memberid && !memberDetails) {
//         try {
//           const response = await fetch(`http://localhost:8000/member/${memberid}`);
//           if (!response.ok) throw new Error('Failed to fetch user details');
//           const data = await response.json();

//           // Store the membershipId in sessionStorage
//           if (data.membershipid) {
//             sessionStorage.setItem('membershipid', data.membershipid);
//           }

//           setMemberDetails(data);
//           sessionStorage.setItem('memberDetails', JSON.stringify(data));
//         } catch (error) {
//           console.error('Error fetching user details:', error);
//         }
//       }
//     };

//     fetchMemberDetails();
//   }, [memberDetails, location.state]);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleProfileClick = () => {
//     setIsModalOpen(true);
//     setIsDropdownOpen(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleLogoutClick = () => {
//     setIsLogoutModalOpen(true); // Open logout confirmation modal
//     setIsDropdownOpen(false); // Close dropdown
//   };

//   const confirmLogout = () => {
//     sessionStorage.clear(); // Clear session storage
//     navigate('/login'); // Redirect to login page
//   };

//   const closeLogoutModal = () => {
//     setIsLogoutModalOpen(false); // Close logout confirmation modal
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-64 h-full p-4">
//         <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
//         <ul>
//           <li className="mb-4">
//             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
//           </li>
//           <li className="mb-4">
//             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
//           </li>
//           <li className="mb-4">
//             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
//           </li>
//           <li className="mb-4">
//             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
//           </li>
//           <li className="mb-4">
//             <a href="#" onClick={handleLogoutClick} className="hover:text-gray-400">Logout</a>
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
//                   <li
//                     className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
//                     onClick={handleLogoutClick}
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
//           Dashboard
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* User Profile Card */}
//           <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
//             <div className="mb-4">
//               <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
//             </div>
//             <div className="mb-4">
//               <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
//             </div>
//             <div>
//               <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
//             </div>
//             <button
//               className="mt-4 text-blue-600 hover:underline"
//               onClick={handleProfileClick}
//             >
//               View Full Profile
//             </button>
//           </div>

//           {/* Membership Status Card */}
//           <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
//             <div className="mb-4">
//               <span className="font-medium">Start Date:</span> {membershipStartdate ? membershipStartdate : 'N/A'}
//             </div>
//             <div className="mb-4">
//               <span className="font-medium">End Date:</span> {membershipEnddate ? membershipEnddate : 'N/A'}
//             </div>
//             <div>
//               <span className="font-medium">Status:</span> {memberDetails && memberDetails.status ? memberDetails.status : 'Active'}
//             </div>
//           </div>

//           {/* Upcoming Classes Card */}
//           <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes</h2>
//             <ul>
//               <li className="mb-2">Yoga - Monday, 7 AM</li>
//               <li className="mb-2">HIIT - Wednesday, 6 PM</li>
//               <li className="mb-2">Pilates - Friday, 8 AM</li>
//             </ul>
//             <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
//           </div>

//           {/* Centered Heading */}
//           <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 text-center">
//             <h2 className="text-3xl font-bold text-gray-800">Enhance Your Fitness Journey</h2>
//             <p className="mt-2 text-gray-600">Explore more resources and tips to help you achieve your fitness goals.</p>
//           </div>

//           {/* Gym Tips Card */}
//           <div className="bg-teal-100 border-2 border-teal-300 shadow-lg rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-4 text-teal-600">Gym Tips</h2>
//             <ul>
//               <li className="mb-2">Stay hydrated before and after workouts.</li>
//               <li className="mb-2">Warm up properly to prevent injuries.</li>
//               <li className="mb-2">Focus on proper form and technique.</li>
//               <li className="mb-2">Balance your workout routine with rest days.</li>
//             </ul>
//           </div>

//           {/* Nutrition Advice Card */}
//           <div className="bg-yellow-100 border-2 border-yellow-300 shadow-lg rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-4 text-yellow-600">Nutrition Advice</h2>
//             <ul>
//               <li className="mb-2">Incorporate a variety of fruits and vegetables into your diet.</li>
//               <li className="mb-2">Consume lean proteins to support muscle recovery.</li>
//               <li className="mb-2">Monitor your portion sizes and avoid overeating.</li>
//               <li className="mb-2">Consider consulting with a nutritionist for personalized advice.</li>
//             </ul>
//           </div>
//         </div>

//         {/* Profile Modal */}
//         {isModalOpen && memberDetails && (
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
//               <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
//               <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
//               <p><strong>Name:</strong> {memberDetails.name}</p>
//               <p><strong>Email:</strong> {memberDetails.email}</p>
//               <p><strong>Phone:</strong> {memberDetails.phone}</p>
//               <p><strong>Address:</strong> {memberDetails.address}</p>
//               <p><strong>City:</strong> {memberDetails.city}</p>
//               <p><strong>Height:</strong> {memberDetails.height}</p>
//               <p><strong>Weight:</strong> {memberDetails.weight}</p>
//               <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
//               <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
//               <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
//               <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
//               {/* Add more fields as necessary */}
//             </div>
//           </div>
//         )}

//         {/* Logout Confirmation Modal */}
//         {isLogoutModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg p-6 w-1/3 relative">
//               <h1 className="text-2xl font-bold mb-4 text-gray-800">Confirm Logout</h1>
//               <p className="mb-4">Are you sure you want to log out?</p>
//               <div className="flex justify-end">
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//                   onClick={confirmLogout}
//                 >
//                   Yes, Logout
//                 </button>
//                 <button
//                   className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
//                   onClick={closeLogoutModal}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Memberpage;



import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Memberpage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [memberDetails, setMemberDetails] = useState(() => {
    const savedDetails = sessionStorage.getItem('memberDetails');
    return savedDetails ? JSON.parse(savedDetails) : null;
  });
  
  // State for membership dates
  const [membershipStartdate, setMembershipStartdate] = useState(null);
  const [membershipEnddate, setMembershipEnddate] = useState(null);
  
  // State for membership status
  const [membershipStatus, setMembershipStatus] = useState('Inactive');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch membership dates from location state if available
    if (location.state) {
      const { membershipStartdate, membershipEnddate } = location.state;
      setMembershipStartdate(membershipStartdate);
      setMembershipEnddate(membershipEnddate);

      // Update membership status to 'Active' if valid dates are present
      if (membershipStartdate && membershipEnddate) {
        setMembershipStatus('Active');
      }
    }

    const fetchMemberDetails = async () => {
      const memberid = sessionStorage.getItem('memberid');
      if (memberid && !memberDetails) {
        try {
          const response = await fetch(`http://localhost:8000/member/${memberid}`);
          if (!response.ok) throw new Error('Failed to fetch user details');
          const data = await response.json();

          if (data.membershipid) {
            sessionStorage.setItem('membershipid', data.membershipid);
          }

          setMemberDetails(data);
          sessionStorage.setItem('memberDetails', JSON.stringify(data));
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    fetchMemberDetails();
  }, [memberDetails, location.state]);

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

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
    setIsDropdownOpen(false);
  };

  const confirmLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 h-full p-4">
        <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
        <ul>
          <li className="mb-4">
            <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
          </li>
          <li className="mb-4">
            <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
          </li>
          {/* <li className="mb-4">
            <a href="/paymentview" className="hover:text-gray-400">Payment</a>
          </li> */}
          <li className="mb-4">
            <a href="#" onClick={handleLogoutClick} className="hover:text-gray-400">Logout</a>
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
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <div className="bg-blue-100 border-2 border-blue-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">User Profile</h2>
            <div className="mb-4">
              <span className="font-medium">Name:</span> {memberDetails ? memberDetails.name : 'John Doe'}
            </div>
            <div className="mb-4">
              <span className="font-medium">Email:</span> {memberDetails ? memberDetails.email : 'johndoe@example.com'}
            </div>
            <div>
              <span className="font-medium">Membership:</span> {memberDetails ? memberDetails.plantype : 'Gold Plan'}
            </div>
            <button
              className="mt-4 text-blue-600 hover:underline"
              onClick={handleProfileClick}
            >
              View Full Profile
            </button>
          </div>

          {/* Membership Status Card */}
          <div className="bg-green-100 border-2 border-green-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Membership Status</h2>
            <div className="mb-4">
              <span className="font-medium">Start Date:</span> {membershipStartdate ? membershipStartdate : 'N/A'}
            </div>
            <div className="mb-4">
              <span className="font-medium">End Date:</span> {membershipEnddate ? membershipEnddate : 'N/A'}
            </div>
            <div>
              <span className="font-medium">Status:</span> {membershipStatus}
            </div>
          </div>

          {/* Upcoming Classes Card */}
          <div className="bg-purple-100 border-2 border-purple-300 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">Upcoming Classes to Launch</h2>
            <ul>
              <li className="mb-2">Yoga - Monday, 7 AM</li>
              <li className="mb-2">HIIT - Wednesday, 6 PM</li>
              <li className="mb-2">Pilates - Friday, 8 AM</li>
            </ul>
            <Link to="/slotspage" className="text-blue-600 hover:underline">View All Classes</Link>
          </div>

          {/* Centered Heading */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Enhance Your Fitness Journey</h2>
            <p className="mt-2 text-gray-600">Explore more resources and tips to help you achieve your fitness goals.</p>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-6 flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/03/19/27/58/360_F_319275875_vqeGDiMVZZrBd9m8B8xhoK0uqCawjbPU.jpg"
              alt="Fitness"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
            />
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
        </div>

        {/* Profile Modal */}
        {isModalOpen && memberDetails && (
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
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Member Profile</h1>
              <p><strong>Plan Type:</strong> {memberDetails.plantype}</p>
              <p><strong>Name:</strong> {memberDetails.name}</p>
              <p><strong>Email:</strong> {memberDetails.email}</p>
              <p><strong>Phone:</strong> {memberDetails.phone}</p>
              <p><strong>Address:</strong> {memberDetails.address}</p>
              <p><strong>City:</strong> {memberDetails.city}</p>
              <p><strong>Height:</strong> {memberDetails.height}</p>
              <p><strong>Weight:</strong> {memberDetails.weight}</p>
              <h3 className="text-xl font-bold mt-4 mb-2">Emergency Contact Information</h3>
              <p><strong>Contact Name:</strong> {memberDetails.contactname}</p>
              <p><strong>Contact Number:</strong> {memberDetails.contactnumber}</p>
              <p><strong>Relationship:</strong> {memberDetails.relationship}</p>
              {/* Add more fields as necessary */}
            </div>
          </div>
        )}

        {/* Logout Confirmation Modal */}
        {isLogoutModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-1/3 relative">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Confirm Logout</h1>
              <p className="mb-4">Are you sure you want to log out?</p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={confirmLogout}
                >
                  Yes, Logout
                </button>
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                  onClick={closeLogoutModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Memberpage;

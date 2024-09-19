// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Slots = () => {
// // // // //   const [showMorningSlots, setShowMorningSlots] = useState(false);
// // // // //   const [showEveningSlots, setShowEveningSlots] = useState(false);

// // // // //   const navigate = useNavigate();

// // // // //   return (
// // // // //     <div className="bg-gray-100 min-h-screen py-10 px-4">
// // // // //       <div className="container mx-auto flex flex-col space-y-8">

// // // // //         {/* Slot Card for Morning */}
// // // // //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// // // // //           <h2 className="text-2xl font-bold mb-4">Morning Slot</h2>
// // // // //           <p className="text-lg text-gray-700">Timings: 5 AM - 10 AM</p>
// // // // //           <button
// // // // //             onClick={() => setShowMorningSlots(!showMorningSlots)}
// // // // //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // // //           >
// // // // //             {showMorningSlots ? 'Hide Slots' : 'Book Now'}
// // // // //           </button>
// // // // //           {/* Detailed Morning Slots */}
// // // // //           {showMorningSlots && (
// // // // //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// // // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // // //                 <h3 className="text-xl font-semibold mb-2">5 AM - 6 AM</h3>
// // // // //                 <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
// // // // //                   Book
// // // // //                 </button>
// // // // //               </div>
// // // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // // //                 <h3 className="text-xl font-semibold mb-2">6 AM - 8 AM</h3>
// // // // //                 <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
// // // // //                   Book
// // // // //                 </button>
// // // // //               </div>
// // // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // // //                 <h3 className="text-xl font-semibold mb-2">8 AM - 10 AM</h3>
// // // // //                 <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
// // // // //                   Book
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Slot Card for Evening */}
// // // // //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// // // // //           <h2 className="text-2xl font-bold mb-4">Evening Slot</h2>
// // // // //           <p className="text-lg text-gray-700">Timings: 4 PM - 10 PM</p>
// // // // //           <button
// // // // //             onClick={() => setShowEveningSlots(!showEveningSlots)}
// // // // //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // // //           >
// // // // //             {showEveningSlots ? 'Hide Slots' : 'Book Now'}
// // // // //           </button>
// // // // //           {/* Detailed Evening Slots */}
// // // // //           {showEveningSlots && (
// // // // //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// // // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // // //                 <h3 className="text-xl font-semibold mb-2">4 PM - 5 PM</h3>
// // // // //                 <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
// // // // //                   Book
// // // // //                 </button>
// // // // //               </div>
// // // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // // //                 <h3 className="text-xl font-semibold mb-2">5 PM - 7 PM</h3>
// // // // //                 <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
// // // // //                   Book
// // // // //                 </button>
// // // // //               </div>
// // // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // // //                 <h3 className="text-xl font-semibold mb-2">7 PM - 9 PM</h3>
// // // // //                 <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
// // // // //                   Book
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Membership Button */}
// // // // //         <div className="flex justify-center mt-10">
// // // // //           <button
// // // // //             onClick={() => navigate('/applymembership')}
// // // // //             className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-300 ease-in-out"
// // // // //           >
// // // // //             Start Your Membership Now
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Slots;


// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const Slots = () => {
// // // //   const [showMorningSlots, setShowMorningSlots] = useState(false);
// // // //   const [showEveningSlots, setShowEveningSlots] = useState(false);
// // // //   const [hasBookedSlots, setHasBookedSlots] = useState(false);

// // // //   const navigate = useNavigate();

// // // //   // Function to handle booking a slot
// // // //   const handleBookSlot = () => {
// // // //     setHasBookedSlots(true); // Set flag to true when a slot is booked
// // // //   };

// // // //   const handleMembershipClick = () => {
// // // //     if (!hasBookedSlots) {
// // // //       alert('Please book your slots before starting your membership.');
// // // //     } else {
// // // //       navigate('/applymembership');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="bg-gray-100 min-h-screen py-10 px-4">
// // // //       <div className="container mx-auto flex flex-col space-y-8">

// // // //         {/* Slot Card for Morning */}
// // // //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// // // //           <h2 className="text-2xl font-bold mb-4">Morning Slot</h2>
// // // //           <p className="text-lg text-gray-700">Timings: 5 AM - 10 AM</p>
// // // //           <button
// // // //             onClick={() => setShowMorningSlots(!showMorningSlots)}
// // // //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //           >
// // // //             {showMorningSlots ? 'Hide Slots' : 'Book Now'}
// // // //           </button>
// // // //           {/* Detailed Morning Slots */}
// // // //           {showMorningSlots && (
// // // //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // //                 <h3 className="text-xl font-semibold mb-2">5 AM - 6 AM</h3>
// // // //                 <button
// // // //                   onClick={handleBookSlot}
// // // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //                 >
// // // //                   Book
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // //                 <h3 className="text-xl font-semibold mb-2">6 AM - 8 AM</h3>
// // // //                 <button
// // // //                   onClick={handleBookSlot}
// // // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //                 >
// // // //                   Book
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // //                 <h3 className="text-xl font-semibold mb-2">8 AM - 10 AM</h3>
// // // //                 <button
// // // //                   onClick={handleBookSlot}
// // // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //                 >
// // // //                   Book
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Slot Card for Evening */}
// // // //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// // // //           <h2 className="text-2xl font-bold mb-4">Evening Slot</h2>
// // // //           <p className="text-lg text-gray-700">Timings: 4 PM - 10 PM</p>
// // // //           <button
// // // //             onClick={() => setShowEveningSlots(!showEveningSlots)}
// // // //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //           >
// // // //             {showEveningSlots ? 'Hide Slots' : 'Book Now'}
// // // //           </button>
// // // //           {/* Detailed Evening Slots */}
// // // //           {showEveningSlots && (
// // // //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // //                 <h3 className="text-xl font-semibold mb-2">4 PM - 5 PM</h3>
// // // //                 <button
// // // //                   onClick={handleBookSlot}
// // // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //                 >
// // // //                   Book
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // //                 <h3 className="text-xl font-semibold mb-2">5 PM - 7 PM</h3>
// // // //                 <button
// // // //                   onClick={handleBookSlot}
// // // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //                 >
// // // //                   Book
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // // //                 <h3 className="text-xl font-semibold mb-2">7 PM - 9 PM</h3>
// // // //                 <button
// // // //                   onClick={handleBookSlot}
// // // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // // //                 >
// // // //                   Book
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Membership Button */}
// // // //         <div className="flex justify-center mt-10">
// // // //           <button
// // // //             onClick={handleMembershipClick}
// // // //             className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-300 ease-in-out"
// // // //           >
// // // //             Start Your Membership Now
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Slots;


// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Slots = () => {
// // //   const [showMorningSlots, setShowMorningSlots] = useState(false);
// // //   const [showEveningSlots, setShowEveningSlots] = useState(false);
// // //   const [selectedSlot, setSelectedSlot] = useState('');

// // //   const navigate = useNavigate();

// // //   const handleBookSlot = (slot) => {
// // //     setSelectedSlot(slot);
// // //     navigate('/applymembership', { state: { selectedSlot: slot } });
// // //   };

// // //   const handleMembershipClick = () => {
// // //     if (!selectedSlot) {
// // //       alert('Please book your slots before starting your membership.');
// // //     } else {
// // //       navigate('/applymembership', { state: { selectedSlot } });
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-gray-100 min-h-screen py-10 px-4">
// // //       <div className="container mx-auto flex flex-col space-y-8">

// // //         {/* Slot Card for Morning */}
// // //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// // //           <h2 className="text-2xl font-bold mb-4">Morning Slot</h2>
// // //           <p className="text-lg text-gray-700">Timings: 5 AM - 10 AM</p>
// // //           <button
// // //             onClick={() => setShowMorningSlots(!showMorningSlots)}
// // //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //           >
// // //             {showMorningSlots ? 'Hide Slots' : 'Book Now'}
// // //           </button>
// // //           {/* Detailed Morning Slots */}
// // //           {showMorningSlots && (
// // //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // //                 <h3 className="text-xl font-semibold mb-2">5 AM - 6 AM</h3>
// // //                 <button
// // //                   onClick={() => handleBookSlot('5 AM - 6 AM')}
// // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //                 >
// // //                   Book
// // //                 </button>
// // //               </div>
// // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // //                 <h3 className="text-xl font-semibold mb-2">6 AM - 8 AM</h3>
// // //                 <button
// // //                   onClick={() => handleBookSlot('6 AM - 8 AM')}
// // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //                 >
// // //                   Book
// // //                 </button>
// // //               </div>
// // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // //                 <h3 className="text-xl font-semibold mb-2">8 AM - 10 AM</h3>
// // //                 <button
// // //                   onClick={() => handleBookSlot('8 AM - 10 AM')}
// // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //                 >
// // //                   Book
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Slot Card for Evening */}
// // //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// // //           <h2 className="text-2xl font-bold mb-4">Evening Slot</h2>
// // //           <p className="text-lg text-gray-700">Timings: 4 PM - 10 PM</p>
// // //           <button
// // //             onClick={() => setShowEveningSlots(!showEveningSlots)}
// // //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //           >
// // //             {showEveningSlots ? 'Hide Slots' : 'Book Now'}
// // //           </button>
// // //           {/* Detailed Evening Slots */}
// // //           {showEveningSlots && (
// // //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // //                 <h3 className="text-xl font-semibold mb-2">4 PM - 5 PM</h3>
// // //                 <button
// // //                   onClick={() => handleBookSlot('4 PM - 5 PM')}
// // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //                 >
// // //                   Book
// // //                 </button>
// // //               </div>
// // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // //                 <h3 className="text-xl font-semibold mb-2">5 PM - 7 PM</h3>
// // //                 <button
// // //                   onClick={() => handleBookSlot('5 PM - 7 PM')}
// // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //                 >
// // //                   Book
// // //                 </button>
// // //               </div>
// // //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// // //                 <h3 className="text-xl font-semibold mb-2">7 PM - 9 PM</h3>
// // //                 <button
// // //                   onClick={() => handleBookSlot('7 PM - 9 PM')}
// // //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// // //                 >
// // //                   Book
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Membership Button */}
// // //         <div className="flex justify-center mt-10">
// // //           <button
// // //             onClick={handleMembershipClick}
// // //             className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-300 ease-in-out"
// // //           >
// // //             Start Your Membership Now
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Slots;



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Slots = () => {
// //   const [showMorningSlots, setShowMorningSlots] = useState(false);
// //   const [showEveningSlots, setShowEveningSlots] = useState(false);
// //   const [selectedSlot, setSelectedSlot] = useState('');

// //   const navigate = useNavigate();

// //   const handleBookSlot = (slot) => {
// //     setSelectedSlot(slot);
// //     navigate('/applymembership', { state: { selectedSlot: slot } });
// //   };

// //   const handleMembershipClick = () => {
// //     if (!selectedSlot) {
// //       alert('Please book your slots before starting your membership.');
// //     } else {
// //       navigate('/applymembership', { state: { selectedSlot } });
// //     }
// //   };

// //   return (

// //     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
// //     {/* Sidebar */}
// //     <aside className="bg-gray-800 text-white w-64 h-full p-4">
// //       <div className="text-2xl font-bold mb-6 text-yellow-300">GYMFIT</div>
// //       <ul>
// //         <li className="mb-4">
// //           <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="/paymentview" className="hover:text-gray-400">Payment</a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="#" className="hover:text-gray-400">Logout</a>
// //         </li>
// //       </ul>
// //     </aside>

// //     <div className="bg-gray-100 min-h-screen py-10 px-4">
// //       <div className="container mx-auto flex flex-col space-y-8">

// //         {/* Slot Card for Morning */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// //           <h2 className="text-2xl font-bold mb-4">Morning Slot</h2>
// //           <p className="text-lg text-gray-700">Timings: 5 AM - 10 AM</p>
// //           <button
// //             onClick={() => setShowMorningSlots(!showMorningSlots)}
// //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //           >
// //             {showMorningSlots ? 'Hide Slots' : 'Show Slots'}
// //           </button>
// //           {/* Detailed Morning Slots */}
// //           {showMorningSlots && (
// //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// //                 <h3 className="text-xl font-semibold mb-2">5 AM - 6 AM</h3>
// //                 <button
// //                   onClick={() => handleBookSlot('5 AM - 6 AM')}
// //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //                 >
// //                   Book
// //                 </button>
// //               </div>
// //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// //                 <h3 className="text-xl font-semibold mb-2">6 AM - 8 AM</h3>
// //                 <button
// //                   onClick={() => handleBookSlot('6 AM - 8 AM')}
// //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //                 >
// //                   Book
// //                 </button>
// //               </div>
// //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// //                 <h3 className="text-xl font-semibold mb-2">8 AM - 10 AM</h3>
// //                 <button
// //                   onClick={() => handleBookSlot('8 AM - 10 AM')}
// //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //                 >
// //                   Book
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Slot Card for Evening */}
// //         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
// //           <h2 className="text-2xl font-bold mb-4">Evening Slot</h2>
// //           <p className="text-lg text-gray-700">Timings: 4 PM - 10 PM</p>
// //           <button
// //             onClick={() => setShowEveningSlots(!showEveningSlots)}
// //             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //           >
// //             {showEveningSlots ? 'Hide Slots' : 'Show Slots'}
// //           </button>
// //           {/* Detailed Evening Slots */}
// //           {showEveningSlots && (
// //             <div className="mt-6 flex space-x-4 overflow-x-auto">
// //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// //                 <h3 className="text-xl font-semibold mb-2">4 PM - 5 PM</h3>
// //                 <button
// //                   onClick={() => handleBookSlot('4 PM - 5 PM')}
// //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //                 >
// //                   Book
// //                 </button>
// //               </div>
// //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// //                 <h3 className="text-xl font-semibold mb-2">5 PM - 7 PM</h3>
// //                 <button
// //                   onClick={() => handleBookSlot('5 PM - 7 PM')}
// //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //                 >
// //                   Book
// //                 </button>
// //               </div>
// //               <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
// //                 <h3 className="text-xl font-semibold mb-2">7 PM - 9 PM</h3>
// //                 <button
// //                   onClick={() => handleBookSlot('7 PM - 9 PM')}
// //                   className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
// //                 >
// //                   Book
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Membership Button */}
// //         <div className="flex justify-center mt-10">
// //           <button
// //             onClick={handleMembershipClick}
// //             className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-300 ease-in-out"
// //           >
// //             Start Your Membership Now
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default Slots;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Slots = () => {
//   const [showMorningSlots, setShowMorningSlots] = useState(false);
//   const [showEveningSlots, setShowEveningSlots] = useState(false);
//   const [selectedSlot, setSelectedSlot] = useState('');

//   const navigate = useNavigate();

//   const handleBookSlot = (slot) => {
//     setSelectedSlot(slot);
//     navigate('/applymembership', { state: { selectedSlot: slot } });
//   };

//   const handleMembershipClick = () => {
//     if (!selectedSlot) {
//       alert('Please book your slots before starting your membership.');
//     } else {
//       navigate('/applymembership', { state: { selectedSlot } });
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-64 h-full p-4 fixed">
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
//             <a href="#" className="hover:text-gray-400">Logout</a>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 ml-64 p-6 overflow-y-auto">
//         <div className="container mx-auto flex flex-col space-y-8">

//           {/* Slot Card for Morning */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-bold mb-4">Morning Slot</h2>
//             <p className="text-lg text-gray-700">Timings: 5 AM - 10 AM</p>
//             <button
//               onClick={() => setShowMorningSlots(!showMorningSlots)}
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//             >
//               {showMorningSlots ? 'Hide Slots' : 'Show Slots'}
//             </button>
//             {/* Detailed Morning Slots */}
//             {showMorningSlots && (
//               <div className="mt-6 flex space-x-4 overflow-x-auto">
//                 <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
//                   <h3 className="text-xl font-semibold mb-2">5 AM - 6 AM</h3>
//                   <button
//                     onClick={() => handleBookSlot('5 AM - 6 AM')}
//                     className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//                   >
//                     Book
//                   </button>
//                 </div>
//                 <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
//                   <h3 className="text-xl font-semibold mb-2">6 AM - 8 AM</h3>
//                   <button
//                     onClick={() => handleBookSlot('6 AM - 8 AM')}
//                     className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//                   >
//                     Book
//                   </button>
//                 </div>
//                 <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
//                   <h3 className="text-xl font-semibold mb-2">8 AM - 10 AM</h3>
//                   <button
//                     onClick={() => handleBookSlot('8 AM - 10 AM')}
//                     className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//                   >
//                     Book
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Slot Card for Evening */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-bold mb-4">Evening Slot</h2>
//             <p className="text-lg text-gray-700">Timings: 4 PM - 10 PM</p>
//             <button
//               onClick={() => setShowEveningSlots(!showEveningSlots)}
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//             >
//               {showEveningSlots ? 'Hide Slots' : 'Show Slots'}
//             </button>
//             {/* Detailed Evening Slots */}
//             {showEveningSlots && (
//               <div className="mt-6 flex space-x-4 overflow-x-auto">
//                 <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
//                   <h3 className="text-xl font-semibold mb-2">4 PM - 5 PM</h3>
//                   <button
//                     onClick={() => handleBookSlot('4 PM - 5 PM')}
//                     className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//                   >
//                     Book
//                   </button>
//                 </div>
//                 <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
//                   <h3 className="text-xl font-semibold mb-2">5 PM - 7 PM</h3>
//                   <button
//                     onClick={() => handleBookSlot('5 PM - 7 PM')}
//                     className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//                   >
//                     Book
//                   </button>
//                 </div>
//                 <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
//                   <h3 className="text-xl font-semibold mb-2">7 PM - 9 PM</h3>
//                   <button
//                     onClick={() => handleBookSlot('7 PM - 9 PM')}
//                     className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
//                   >
//                     Book
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Membership Button */}
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={handleMembershipClick}
//               className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-300 ease-in-out"
//             >
//               Start Your Membership Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slots;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Slots = () => {
  const [showMorningSlots, setShowMorningSlots] = useState(false);
  const [showEveningSlots, setShowEveningSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();

  const handleBookSlot = (slot) => {
    setSelectedSlot(slot);
    navigate('/applymembership', { state: { selectedSlot: slot } });
  };

  const handleMembershipClick = () => {
    if (!selectedSlot) {
      alert('Please book your slots before starting your membership.');
    } else {
      navigate('/applymembership', { state: { selectedSlot } });
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 h-full p-4 fixed">
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
          <li className="mb-4">
            <a href="/paymentview" className="hover:text-gray-400">Payment</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 overflow-y-auto relative">
        {/* Go Back Button */}
        <button
          onClick={handleGoBack}
          className="absolute top-4 left-4 bg-gray-800 text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          Go Back
        </button>

        <div className="container mx-auto flex flex-col space-y-8">
          {/* Slot Card for Morning */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Morning Slot</h2>
            <p className="text-lg text-gray-700">Timings: 5 AM - 10 AM</p>
            <button
              onClick={() => setShowMorningSlots(!showMorningSlots)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              {showMorningSlots ? 'Hide Slots' : 'Show Slots'}
            </button>
            {/* Detailed Morning Slots */}
            {showMorningSlots && (
              <div className="mt-6 flex space-x-4 overflow-x-auto">
                <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">5 AM - 6 AM</h3>
                  <button
                    onClick={() => handleBookSlot('5 AM - 6 AM')}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Book
                  </button>
                </div>
                <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">6 AM - 8 AM</h3>
                  <button
                    onClick={() => handleBookSlot('6 AM - 8 AM')}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Book
                  </button>
                </div>
                <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">8 AM - 10 AM</h3>
                  <button
                    onClick={() => handleBookSlot('8 AM - 10 AM')}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Book
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Slot Card for Evening */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Evening Slot</h2>
            <p className="text-lg text-gray-700">Timings: 4 PM - 10 PM</p>
            <button
              onClick={() => setShowEveningSlots(!showEveningSlots)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              {showEveningSlots ? 'Hide Slots' : 'Show Slots'}
            </button>
            {/* Detailed Evening Slots */}
            {showEveningSlots && (
              <div className="mt-6 flex space-x-4 overflow-x-auto">
                <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">4 PM - 5 PM</h3>
                  <button
                    onClick={() => handleBookSlot('4 PM - 5 PM')}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Book
                  </button>
                </div>
                <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">5 PM - 7 PM</h3>
                  <button
                    onClick={() => handleBookSlot('5 PM - 7 PM')}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Book
                  </button>
                </div>
                <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">7 PM - 9 PM</h3>
                  <button
                    onClick={() => handleBookSlot('7 PM - 9 PM')}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Book
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Membership Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handleMembershipClick}
              className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition transform hover:scale-105 duration-300 ease-in-out"
            >
              Start Your Membership Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slots;

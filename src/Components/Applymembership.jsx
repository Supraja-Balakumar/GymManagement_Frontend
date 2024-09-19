// // // // // // //fetch name,email,type
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const ApplyMembership = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const memberid = sessionStorage.getItem('memberid');

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     membershipType: '',
//     membershipStartdate: '',
//     membershipEnddate: '',
//     timings: '',
//     medicalConditions: '',
//     member: {
//       memberid: memberid,
//     },
//   });

//   const [selectedSlot, setSelectedSlot] = useState('');
//   const [isValidDates, setIsValidDates] = useState(true);

//   useEffect(() => {
//     const fetchMemberDetails = async () => {
//       if (memberid) {
//         try {
//           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
//           if (response.status === 200) {
//             const { name, email, plantype } = response.data;
//             setFormData(prevState => ({
//               ...prevState,
//               name: name,
//               email: email,
//               membershipType: plantype,
//             }));
//           }
//         } catch (error) {
//           Swal.fire({
//             title: 'Error!',
//             text: 'Failed to fetch member details. Please try again later.',
//             icon: 'error',
//             confirmButtonText: 'OK',
//           });
//         }
//       }
//     };

//     fetchMemberDetails();

//     if (location.state && location.state.selectedSlot) {
//       const slot = location.state.selectedSlot;
//       setFormData(prevState => ({
//         ...prevState,
//         timings: slot,
//       }));
//       setSelectedSlot(slot);
//     }
//   }, [location.state, memberid]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }), () => {
//       if (name === 'membershipStartdate' || name === 'membershipEnddate') {
//         validateDates();
//       }
//     });
//   };

//   const validateDates = () => {
//     const { membershipType, membershipStartdate, membershipEnddate } = formData;
//     if (membershipType && membershipStartdate && membershipEnddate) {
//       const startDate = new Date(membershipStartdate);
//       const endDate = new Date(membershipEnddate);
//       const today = new Date();

//       let valid = false;

//       if (membershipType === '3 months') {
//         const threeMonthsLater = new Date(startDate);
//         threeMonthsLater.setMonth(startDate.getMonth() + 3);
//         valid = endDate <= threeMonthsLater;
//       } else if (membershipType === '6 months') {
//         const sixMonthsLater = new Date(startDate);
//         sixMonthsLater.setMonth(startDate.getMonth() + 6);
//         valid = endDate <= sixMonthsLater;
//       } else if (membershipType === '1 year') {
//         const oneYearLater = new Date(startDate);
//         oneYearLater.setFullYear(startDate.getFullYear() + 1);
//         valid = endDate <= oneYearLater;
//       }

//       if (startDate < today || endDate < startDate) {
//         valid = false;
//       }

//       setIsValidDates(valid);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidDates) {
//       Swal.fire({
//         title: 'Invalid Dates!',
//         text: 'Please ensure the membership dates are valid based on the membership type.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//       return;
//     }

//     const slotColumn = getSlotColumn(selectedSlot);

//     const membershipPayload = {
//       ...formData,
//       [slotColumn]: selectedSlot,
//       member: { memberid: memberid },
//     };

//     const slotPayload = {
//       slotColumn,
//       selectedSlot,
//     };

//     try {
//       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
//       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

//       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
//       if (slotResponse.status === 200) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Your membership application has been submitted successfully.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         }).then(() => {
//           navigate('/memberpage');
//         });
//       } else {
//         throw new Error('Failed to save slot details');
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: error.message || 'An unexpected error occurred. Please try again later.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   const getSlotColumn = (slot) => {
//     switch (slot) {
//       case '5 AM - 6 AM':
//         return 'slot1';
//       case '6 AM - 8 AM':
//         return 'slot2';
//       case '8 AM - 10 AM':
//         return 'slot3';
//       case '4 PM - 5 PM':
//         return 'slot4';
//       case '5 PM - 7 PM':
//         return 'slot5';
//       case '7 PM - 9 PM':
//         return 'slot6';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="bg-blue-800 text-white w-64 h-full p-4">
//         <div className="text-2xl font-bold mb-6">GYMFIT</div>
//         <ul>
//           <li className="mb-4">
//             <a href="/" className="hover:text-gray-400">Dashboard</a>
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
//       <main className="flex-1 p-4 bg-gray-100">
//         <div
//           className="flex-1 bg-cover bg-center"
//           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
//         >
//           <div className="flex items-center justify-center min-h-screen">
//             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
//               <h2 className="text-2xl font-bold mb-4">Confirm your Slots</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Form fields */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
//                     readOnly
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
//                     readOnly
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">
//                     Membership Type
//                   </label>
//                   <input
//                     type="text"
//                     id="membershipType"
//                     name="membershipType"
//                     value={formData.membershipType}
//                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
//                     readOnly
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">
//                     Membership Start Date
//                   </label>
//                   <input
//                     type="date"
//                     id="membershipStartdate"
//                     name="membershipStartdate"
//                     value={formData.membershipStartdate}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">
//                     Membership End Date
//                   </label>
//                   <input
//                     type="date"
//                     id="membershipEnddate"
//                     name="membershipEnddate"
//                     value={formData.membershipEnddate}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">
//                     Timings
//                   </label>
//                   <input
//                     type="text"
//                     id="timings"
//                     name="timings"
//                     value={formData.timings}
//                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
//                     readOnly
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">
//                     Medical Conditions (if any)
//                   </label>
//                   <textarea
//                     id="medicalConditions"
//                     name="medicalConditions"
//                     value={formData.medicalConditions}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                     rows="4"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
//                   disabled={!isValidDates}
//                 >
//                   Submit Application
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ApplyMembership;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // import Swal from 'sweetalert2';
// // // // // import axios from 'axios';

// // // // // const ApplyMembership = () => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const memberid = sessionStorage.getItem('memberid');

// // // // //   const [formData, setFormData] = useState({
// // // // //     name: '',
// // // // //     email: '',
// // // // //     membershipType: '',
// // // // //     membershipStartdate: '',
// // // // //     membershipEnddate: '',
// // // // //     timings: '',
// // // // //     medicalConditions: '',
// // // // //     member: {
// // // // //       memberid: memberid,
// // // // //     },
// // // // //   });

// // // // //   const [selectedSlot, setSelectedSlot] = useState('');
// // // // //   const [isValidDates, setIsValidDates] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const fetchMemberDetails = async () => {
// // // // //       if (memberid) {
// // // // //         try {
// // // // //           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
// // // // //           if (response.status === 200) {
// // // // //             const { name, email, plantype } = response.data;
// // // // //             setFormData(prevState => ({
// // // // //               ...prevState,
// // // // //               name: name,
// // // // //               email: email,
// // // // //               membershipType: plantype,
// // // // //             }));
// // // // //           }
// // // // //         } catch (error) {
// // // // //           Swal.fire({
// // // // //             title: 'Error!',
// // // // //             text: 'Failed to fetch member details. Please try again later.',
// // // // //             icon: 'error',
// // // // //             confirmButtonText: 'OK',
// // // // //           });
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     fetchMemberDetails();

// // // // //     if (location.state && location.state.selectedSlot) {
// // // // //       const slot = location.state.selectedSlot;
// // // // //       setFormData(prevState => ({
// // // // //         ...prevState,
// // // // //         timings: slot,
// // // // //       }));
// // // // //       setSelectedSlot(slot);
// // // // //     }
// // // // //   }, [location.state, memberid]);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData(prevState => ({
// // // // //       ...prevState,
// // // // //       [name]: value,
// // // // //     }), () => {
// // // // //       if (name === 'membershipStartdate' || name === 'membershipEnddate') {
// // // // //         validateDates();
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   const validateDates = () => {
// // // // //     const { membershipType, membershipStartdate, membershipEnddate } = formData;
// // // // //     if (membershipType && membershipStartdate && membershipEnddate) {
// // // // //       const startDate = new Date(membershipStartdate);
// // // // //       const endDate = new Date(membershipEnddate);
// // // // //       const today = new Date();

// // // // //       let valid = false;

// // // // //       if (membershipType === '3 months') {
// // // // //         const threeMonthsLater = new Date(startDate);
// // // // //         threeMonthsLater.setMonth(startDate.getMonth() + 3);
// // // // //         valid = endDate <= threeMonthsLater;
// // // // //       } else if (membershipType === '6 months') {
// // // // //         const sixMonthsLater = new Date(startDate);
// // // // //         sixMonthsLater.setMonth(startDate.getMonth() + 6);
// // // // //         valid = endDate <= sixMonthsLater;
// // // // //       } else if (membershipType === '1 year') {
// // // // //         const oneYearLater = new Date(startDate);
// // // // //         oneYearLater.setFullYear(startDate.getFullYear() + 1);
// // // // //         valid = endDate <= oneYearLater;
// // // // //       }

// // // // //       if (startDate < today || endDate < startDate) {
// // // // //         valid = false;
// // // // //       }

// // // // //       setIsValidDates(valid);
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     if (!isValidDates) {
// // // // //       Swal.fire({
// // // // //         title: 'Invalid Dates!',
// // // // //         text: 'Please ensure the membership dates are valid based on the membership type.',
// // // // //         icon: 'error',
// // // // //         confirmButtonText: 'OK',
// // // // //       });
// // // // //       return;
// // // // //     }

// // // // //     const slotColumn = getSlotColumn(selectedSlot);

// // // // //     const membershipPayload = {
// // // // //       ...formData,
// // // // //       [slotColumn]: selectedSlot,
// // // // //       member: { memberid: memberid },
// // // // //     };

// // // // //     const slotPayload = {
// // // // //       slotColumn,
// // // // //       selectedSlot,
// // // // //     };

// // // // //     try {
// // // // //       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
// // // // //       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

// // // // //       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
// // // // //       if (slotResponse.status === 200) {
// // // // //         Swal.fire({
// // // // //           title: 'Success!',
// // // // //           text: 'Your membership application has been submitted successfully.',
// // // // //           icon: 'success',
// // // // //           confirmButtonText: 'OK',
// // // // //         }).then(() => {
// // // // //           navigate('/memberpage');
// // // // //         });
// // // // //       } else {
// // // // //         throw new Error('Failed to save slot details');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       Swal.fire({
// // // // //         title: 'Error!',
// // // // //         text: error.message || 'An unexpected error occurred. Please try again later.',
// // // // //         icon: 'error',
// // // // //         confirmButtonText: 'OK',
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const getSlotColumn = (slot) => {
// // // // //     switch (slot) {
// // // // //       case '5 AM - 6 AM':
// // // // //         return 'slot1';
// // // // //       case '6 AM - 8 AM':
// // // // //         return 'slot2';
// // // // //       case '8 AM - 10 AM':
// // // // //         return 'slot3';
// // // // //       case '4 PM - 5 PM':
// // // // //         return 'slot4';
// // // // //       case '5 PM - 7 PM':
// // // // //         return 'slot5';
// // // // //       case '7 PM - 9 PM':
// // // // //         return 'slot6';
// // // // //       default:
// // // // //         return '';
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen relative">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="bg-blue-800 text-white w-64 h-full p-4">
// // // // //         <div className="text-2xl font-bold mb-6">GYMFIT</div>
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
// // // // //       <main className="flex-1 p-4 bg-gray-100 relative">
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
// // // // //         >
// // // // //           Go Back
// // // // //         </button>

// // // // //         <div
// // // // //           className="flex-1 bg-cover bg-center"
// // // // //           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// // // // //         >
// // // // //           <div className="flex items-center justify-center min-h-screen">
// // // // //             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
// // // // //               {/* <h2 className="text-2xl font-bold mb-4">Confirm your Slots</h2> */}
// // // // //               <h1 className="text-lg italic font-black text-center">
// // // // //           <span className="text-green-500 text-2xl">CONFIRM your slots</span>
// // // // //         </h1>
// // // // //               <form onSubmit={handleSubmit} className="space-y-4">
// // // // //                 {/* Form fields */}
// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
// // // // //                     Name
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     id="name"
// // // // //                     name="name"
// // // // //                     value={formData.name}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// // // // //                     readOnly
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
// // // // //                     Email
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="email"
// // // // //                     id="email"
// // // // //                     name="email"
// // // // //                     value={formData.email}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// // // // //                     readOnly
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">
// // // // //                     Membership Type
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     id="membershipType"
// // // // //                     name="membershipType"
// // // // //                     value={formData.membershipType}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// // // // //                     readOnly
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">
// // // // //                     Membership Start Date
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     id="membershipStartdate"
// // // // //                     name="membershipStartdate"
// // // // //                     value={formData.membershipStartdate}
// // // // //                     onChange={handleChange}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg"
// // // // //                     required
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">
// // // // //                     Membership End Date
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     id="membershipEnddate"
// // // // //                     name="membershipEnddate"
// // // // //                     value={formData.membershipEnddate}
// // // // //                     onChange={handleChange}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg"
// // // // //                     required
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">
// // // // //                     Timings
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     id="timings"
// // // // //                     name="timings"
// // // // //                     value={formData.timings}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// // // // //                     readOnly
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">
// // // // //                     Medical Conditions (if any)
// // // // //                   </label>
// // // // //                   <textarea
// // // // //                     id="medicalConditions"
// // // // //                     name="medicalConditions"
// // // // //                     value={formData.medicalConditions}
// // // // //                     onChange={handleChange}
// // // // //                     className="w-full p-2 border border-gray-300 rounded-lg"
// // // // //                     rows="4"
// // // // //                   />
// // // // //                 </div>

// // // // //                 <button
// // // // //                   type="submit"
// // // // //                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// // // // //                   disabled={!isValidDates}
// // // // //                 >
// // // // //                   Submit Application
// // // // //                 </button>
// // // // //               </form>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ApplyMembership;




// // // // //------------------------------------------------------------------

// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // const ApplyMembership = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const memberid = sessionStorage.getItem('memberid');

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     membershipType: '',
// //     membershipStartdate: '',
// //     membershipEnddate: '',
// //     timings: '',
// //     medicalConditions: '',
// //     member: {
// //       memberid: memberid,
// //     },
// //   });

// //   const [selectedSlot, setSelectedSlot] = useState('');
// //   const [isValidDates, setIsValidDates] = useState(true);

// //   useEffect(() => {
// //     const fetchMemberDetails = async () => {
// //       if (memberid) {
// //         try {
// //           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
// //           if (response.status === 200) {
// //             const { name, email, plantype } = response.data;
// //             setFormData(prevState => ({
// //               ...prevState,
// //               name: name,
// //               email: email,
// //               membershipType: plantype,
// //             }));
// //           }
// //         } catch (error) {
// //           Swal.fire({
// //             title: 'Error!',
// //             text: 'Failed to fetch member details. Please try again later.',
// //             icon: 'error',
// //             confirmButtonText: 'OK',
// //           });
// //         }
// //       }
// //     };

// //     fetchMemberDetails();

// //     if (location.state && location.state.selectedSlot) {
// //       const slot = location.state.selectedSlot;
// //       setFormData(prevState => ({
// //         ...prevState,
// //         timings: slot,
// //       }));
// //       setSelectedSlot(slot);
// //     }
// //   }, [location.state, memberid]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }), () => {
// //       if (name === 'membershipStartdate' || name === 'membershipEnddate') {
// //         validateDates();
// //       }
// //     });
// //   };

// //   const validateDates = () => {
// //     const { membershipType, membershipStartdate, membershipEnddate } = formData;
// //     if (membershipType && membershipStartdate && membershipEnddate) {
// //       const startDate = new Date(membershipStartdate);
// //       const endDate = new Date(membershipEnddate);
// //       const today = new Date();

// //       let valid = false;

// //       if (membershipType === '3 months') {
// //         const threeMonthsLater = new Date(startDate);
// //         threeMonthsLater.setMonth(startDate.getMonth() + 3);
// //         valid = endDate <= threeMonthsLater;
// //       } else if (membershipType === '6 months') {
// //         const sixMonthsLater = new Date(startDate);
// //         sixMonthsLater.setMonth(startDate.getMonth() + 6);
// //         valid = endDate <= sixMonthsLater;
// //       } else if (membershipType === '1 year') {
// //         const oneYearLater = new Date(startDate);
// //         oneYearLater.setFullYear(startDate.getFullYear() + 1);
// //         valid = endDate <= oneYearLater;
// //       }

// //       if (startDate < today || endDate < startDate) {
// //         valid = false;
// //       }

// //       setIsValidDates(valid);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!isValidDates) {
// //       Swal.fire({
// //         title: 'Invalid Dates!',
// //         text: 'Please ensure the membership dates are valid based on the membership type.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //       return;
// //     }

// //     const slotColumn = getSlotColumn(selectedSlot);

// //     const membershipPayload = {
// //       ...formData,
// //       [slotColumn]: selectedSlot,
// //       member: { memberid: memberid },
// //     };

// //     const slotPayload = {
// //       slotColumn,
// //       selectedSlot,
// //     };

// //     try {
// //       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
// //       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

// //       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
// //       if (slotResponse.status === 200) {
// //         Swal.fire({
// //           title: 'Success!',
// //           text: 'Your membership application has been submitted successfully.',
// //           icon: 'success',
// //           confirmButtonText: 'OK',
// //         }).then(() => {
// //           navigate('/memberpage');
// //         });
// //       } else {
// //         throw new Error('Failed to save slot details');
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: error.message || 'An unexpected error occurred. Please try again later.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //     }
// //   };

// //   const getSlotColumn = (slot) => {
// //     switch (slot) {
// //       case '5 AM - 6 AM':
// //         return 'slot1';
// //       case '6 AM - 8 AM':
// //         return 'slot2';
// //       case '8 AM - 10 AM':
// //         return 'slot3';
// //       case '4 PM - 5 PM':
// //         return 'slot4';
// //       case '5 PM - 7 PM':
// //         return 'slot5';
// //       case '7 PM - 9 PM':
// //         return 'slot6';
// //       default:
// //         return '';
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


// //       {/* Main Content */}
// //       <main className="flex-1 p-4 bg-gray-100 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
// //         >
// //           Go Back
// //         </button>

// //         <div
// //           className="flex-1 bg-cover bg-center"
// //           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// //         >
// //           <div className="flex items-center justify-center min-h-screen">
// //             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
// //               <h1 className="text-lg italic font-black text-center">
// //                 <span className="text-green-500 text-2xl">CONFIRM your slots</span>
// //               </h1>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 {/* Form fields */}
// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
// //                     Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
// //                     Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">
// //                     Membership Type
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="membershipType"
// //                     name="membershipType"
// //                     value={formData.membershipType}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">
// //                     Membership Start Date
// //                   </label>
// //                   <input
// //                     type="date"
// //                     id="membershipStartdate"
// //                     name="membershipStartdate"
// //                     value={formData.membershipStartdate}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">
// //                     Membership End Date
// //                   </label>
// //                   <input
// //                     type="date"
// //                     id="membershipEnddate"
// //                     name="membershipEnddate"
// //                     value={formData.membershipEnddate}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">
// //                     Timings
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="timings"
// //                     name="timings"
// //                     value={formData.timings}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">
// //                     Medical Conditions (if any)
// //                   </label>
// //                   <textarea
// //                     id="medicalConditions"
// //                     name="medicalConditions"
// //                     value={formData.medicalConditions}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     rows="4"
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// //                   disabled={!isValidDates}
// //                 >
// //                   Submit Application
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ApplyMembership;

// // // //-------------------------------------------------------perfect

// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // const ApplyMembership = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const memberid = sessionStorage.getItem('memberid');

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     membershipType: '',
// //     membershipStartdate: '',
// //     membershipEnddate: '',
// //     timings: '',
// //     medicalConditions: '',
// //     member: {
// //       memberid: memberid,
// //     },
// //   });

// //   const [selectedSlot, setSelectedSlot] = useState('');
// //   const [isValidDates, setIsValidDates] = useState(true);
// //   const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

// //   useEffect(() => {
// //     const fetchMemberDetails = async () => {
// //       if (memberid) {
// //         try {
// //           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
// //           if (response.status === 200) {
// //             const { name, email, plantype } = response.data;
// //             setFormData(prevState => ({
// //               ...prevState,
// //               name: name,
// //               email: email,
// //               membershipType: plantype,
// //             }));
// //           }
// //         } catch (error) {
// //           Swal.fire({
// //             title: 'Error!',
// //             text: 'Failed to fetch member details. Please try again later.',
// //             icon: 'error',
// //             confirmButtonText: 'OK',
// //           });
// //         }
// //       }
// //     };

// //     fetchMemberDetails();

// //     if (location.state && location.state.selectedSlot) {
// //       const slot = location.state.selectedSlot;
// //       setFormData(prevState => ({
// //         ...prevState,
// //         timings: slot,
// //       }));
// //       setSelectedSlot(slot);
// //     }
// //   }, [location.state, memberid]);

// //   useEffect(() => {
// //     if (formData.membershipStartdate && formData.membershipType) {
// //       updateEndDate();
// //     }
// //   }, [formData.membershipStartdate, formData.membershipType]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const updateEndDate = () => {
// //     const { membershipStartdate, membershipType } = formData;
// //     if (membershipStartdate && membershipType) {
// //       const start = new Date(membershipStartdate);
// //       const end = new Date(start);

// //       if (membershipType === '3 months') {
// //         end.setMonth(start.getMonth() + 3);
// //       } else if (membershipType === '6 months') {
// //         end.setMonth(start.getMonth() + 6);
// //       } else if (membershipType === '1 year') {
// //         end.setFullYear(start.getFullYear() + 1);
// //       }

// //       // Adjust the end date to ensure it doesn't fall back to the start date
// //       if (end.getDate() !== start.getDate()) {
// //         end.setDate(start.getDate());
// //       }

// //       // Logging for debugging
// //       console.log(`Start Date: ${start.toISOString().split('T')[0]}`);
// //       console.log(`End Date: ${end.toISOString().split('T')[0]}`);

// //       // Set the end date, formatted as YYYY-MM-DD
// //       const formattedEndDate = end.toISOString().split('T')[0];
// //       setFormData(prevState => ({
// //         ...prevState,
// //         membershipEnddate: formattedEndDate,
// //       }));
// //     }
// //   };

// //   const validateDates = () => {
// //     const { membershipStartdate, membershipEnddate } = formData;
// //     const startDate = new Date(membershipStartdate);
// //     const endDate = new Date(membershipEnddate);
// //     const todayDate = new Date(today);

// //     if (startDate < todayDate || endDate < startDate) {
// //       setIsValidDates(false);
// //     } else {
// //       setIsValidDates(true);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     validateDates();

// //     if (!isValidDates) {
// //       Swal.fire({
// //         title: 'Invalid Dates!',
// //         text: 'Please ensure the membership dates are valid based on the membership type.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //       return;
// //     }

// //     const slotColumn = getSlotColumn(selectedSlot);

// //     const membershipPayload = {
// //       ...formData,
// //       [slotColumn]: selectedSlot,
// //       member: { memberid: memberid },
// //     };

// //     const slotPayload = {
// //       slotColumn,
// //       selectedSlot,
// //     };

// //     try {
// //       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
// //       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

// //       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
// //       if (slotResponse.status === 200) {
// //         Swal.fire({
// //           title: 'Success!',
// //           text: 'Your membership application has been submitted successfully.',
// //           icon: 'success',
// //           confirmButtonText: 'OK',
// //         }).then(() => {
// //           navigate('/memberpage');
// //         });
// //       } else {
// //         throw new Error('Failed to save slot details');
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: error.message || 'An unexpected error occurred. Please try again later.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //     }
// //   };

// //   const getSlotColumn = (slot) => {
// //     switch (slot) {
// //       case '5 AM - 6 AM':
// //         return 'slot1';
// //       case '6 AM - 8 AM':
// //         return 'slot2';
// //       case '8 AM - 10 AM':
// //         return 'slot3';
// //       case '4 PM - 5 PM':
// //         return 'slot4';
// //       case '5 PM - 7 PM':
// //         return 'slot5';
// //       case '7 PM - 9 PM':
// //         return 'slot6';
// //       default:
// //         return '';
// //     }
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
// //             <a href="#" className="hover:text-gray-400">Logout</a>
// //           </li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-4 bg-gray-100 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
// //         >
// //           Go Back
// //         </button>

// //         <div
// //           className="flex-1 bg-cover bg-center"
// //           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// //         >
// //           <div className="flex items-center justify-center min-h-screen">
// //             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
// //               <h1 className="text-lg italic font-black text-center">
// //                 <span className="text-green-500 text-2xl">CONFIRM your slots</span>
// //               </h1>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 {/* Form fields */}
// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
// //                     Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
// //                     Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">
// //                     Membership Type
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="membershipType"
// //                     name="membershipType"
// //                     value={formData.membershipType}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">
// //                     Membership Start Date
// //                   </label>
// //                   <input
// //                     type="date"
// //                     id="membershipStartdate"
// //                     name="membershipStartdate"
// //                     value={formData.membershipStartdate}
// //                     onChange={handleChange}
// //                     min={today}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">
// //                     Membership End Date
// //                   </label>
// //                   <input
// //                     type="date"
// //                     id="membershipEnddate"
// //                     name="membershipEnddate"
// //                     value={formData.membershipEnddate}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">
// //                     Timings
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="timings"
// //                     name="timings"
// //                     value={formData.timings}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">
// //                     Medical Conditions (if any)
// //                   </label>
// //                   <textarea
// //                     id="medicalConditions"
// //                     name="medicalConditions"
// //                     value={formData.medicalConditions}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     rows="4"
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// //                   disabled={!isValidDates}
// //                 >
// //                   Submit Application
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ApplyMembership;



// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // const ApplyMembership = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const memberid = sessionStorage.getItem('memberid');

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     membershipType: '',
// //     membershipStartdate: '',
// //     membershipEnddate: '',
// //     timings: '',
// //     medicalConditions: '',
// //     member: {
// //       memberid: memberid,
// //     },
// //   });

// //   const [selectedSlot, setSelectedSlot] = useState('');
// //   const [isValidDates, setIsValidDates] = useState(true);
// //   const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

// //   useEffect(() => {
// //     const fetchMemberDetails = async () => {
// //       if (memberid) {
// //         try {
// //           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
// //           if (response.status === 200) {
// //             const { name, email, plantype } = response.data;
// //             setFormData(prevState => ({
// //               ...prevState,
// //               name: name,
// //               email: email,
// //               membershipType: plantype,
// //             }));
// //           }
// //         } catch (error) {
// //           Swal.fire({
// //             title: 'Error!',
// //             text: 'Failed to fetch member details. Please try again later.',
// //             icon: 'error',
// //             confirmButtonText: 'OK',
// //           });
// //         }
// //       }
// //     };

// //     fetchMemberDetails();

// //     if (location.state && location.state.selectedSlot) {
// //       const slot = location.state.selectedSlot;
// //       setFormData(prevState => ({
// //         ...prevState,
// //         timings: slot,
// //       }));
// //       setSelectedSlot(slot);
// //     }
// //   }, [location.state, memberid]);

// //   useEffect(() => {
// //     // Automatically update end date when start date or membership type changes
// //     if (formData.membershipStartdate) {
// //       updateEndDate();
// //     }
// //   }, [formData.membershipStartdate, formData.membershipType]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const updateEndDate = () => {
// //     const { membershipStartdate, membershipType } = formData;
// //     if (membershipStartdate && membershipType) {
// //       const start = new Date(membershipStartdate);
// //       const end = new Date(start);

// //       // Calculate end date based on membership type
// //       if (membershipType === '3 months') {
// //         end.setMonth(start.getMonth() + 3);
// //       } else if (membershipType === '6 months') {
// //         end.setMonth(start.getMonth() + 6);
// //       } else if (membershipType === '1 year') {
// //         end.setFullYear(start.getFullYear() + 1);
// //       }

// //       // Format the end date as YYYY-MM-DD
// //       const formattedEndDate = end.toISOString().split('T')[0];
// //       setFormData(prevState => ({
// //         ...prevState,
// //         membershipEnddate: formattedEndDate,
// //       }));
// //     }
// //   };

// //   const validateDates = () => {
// //     const { membershipStartdate, membershipEnddate } = formData;
// //     const startDate = new Date(membershipStartdate);
// //     const endDate = new Date(membershipEnddate);
// //     const todayDate = new Date(today);

// //     // Check for valid dates
// //     if (startDate < todayDate || endDate < startDate) {
// //       setIsValidDates(false);
// //     } else {
// //       setIsValidDates(true);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     validateDates();

// //     if (!isValidDates) {
// //       Swal.fire({
// //         title: 'Invalid Dates!',
// //         text: 'Please ensure the membership dates are valid based on the membership type.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //       return;
// //     }

// //     const slotColumn = getSlotColumn(selectedSlot);

// //     const membershipPayload = {
// //       ...formData,
// //       [slotColumn]: selectedSlot,
// //       member: { memberid: memberid },
// //     };

// //     const slotPayload = {
// //       slotColumn,
// //       selectedSlot,
// //     };

// //     try {
// //       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
// //       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

// //       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
// //       if (slotResponse.status === 200) {
// //         Swal.fire({
// //           title: 'Success!',
// //           text: 'Your membership application has been submitted successfully.',
// //           icon: 'success',
// //           confirmButtonText: 'OK',
// //         }).then(() => {
// //           navigate('/memberpage');
// //         });
// //       } else {
// //         throw new Error('Failed to save slot details');
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: error.message || 'An unexpected error occurred. Please try again later.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //     }
// //   };

// //   const getSlotColumn = (slot) => {
// //     switch (slot) {
// //       case '5 AM - 6 AM':
// //         return 'slot1';
// //       case '6 AM - 8 AM':
// //         return 'slot2';
// //       case '8 AM - 10 AM':
// //         return 'slot3';
// //       case '4 PM - 5 PM':
// //         return 'slot4';
// //       case '5 PM - 7 PM':
// //         return 'slot5';
// //       case '7 PM - 9 PM':
// //         return 'slot6';
// //       default:
// //         return '';
// //     }
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
// //             <a href="#" className="hover:text-gray-400">Logout</a>
// //           </li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-4 bg-gray-100 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
// //         >
// //           Go Back
// //         </button>

// //         <div
// //           className="flex-1 bg-cover bg-center"
// //           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// //         >
// //           <div className="flex items-center justify-center min-h-screen">
// //             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
// //               <h1 className="text-lg italic font-black text-center">
// //                 <span className="text-green-500 text-2xl">CONFIRM your slots</span>
// //               </h1>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 {/* Form fields */}
// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">Membership Type</label>
// //                   <input
// //                     type="text"
// //                     id="membershipType"
// //                     name="membershipType"
// //                     value={formData.membershipType}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">Membership Start Date</label>
// //                   <input
// //                     type="date"
// //                     id="membershipStartdate"
// //                     name="membershipStartdate"
// //                     value={formData.membershipStartdate}
// //                     onChange={handleChange}
// //                     min={today}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">Membership End Date</label>
// //                   <input
// //                     type="date"
// //                     id="membershipEnddate"
// //                     name="membershipEnddate"
// //                     value={formData.membershipEnddate}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">Timings</label>
// //                   <input
// //                     type="text"
// //                     id="timings"
// //                     name="timings"
// //                     value={formData.timings}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">Medical Conditions (if any)</label>
// //                   <textarea
// //                     id="medicalConditions"
// //                     name="medicalConditions"
// //                     value={formData.medicalConditions}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     rows="4"
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// //                   disabled={!isValidDates}
// //                 >
// //                   Submit Application
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ApplyMembership;




// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // const ApplyMembership = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const memberid = sessionStorage.getItem('memberid');

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     membershipType: '',
// //     membershipStartdate: '',
// //     membershipEnddate: '',
// //     timings: '',
// //     medicalConditions: '',
// //     member: {
// //       memberid: memberid,
// //     },
// //   });

// //   const [selectedSlot, setSelectedSlot] = useState('');
// //   const [isValidDates, setIsValidDates] = useState(true);
// //   const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

// //   useEffect(() => {
// //     const fetchMemberDetails = async () => {
// //       if (memberid) {
// //         try {
// //           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
// //           if (response.status === 200) {
// //             const { name, email, plantype } = response.data;
// //             setFormData(prevState => ({
// //               ...prevState,
// //               name: name,
// //               email: email,
// //               membershipType: plantype,
// //             }));
// //           }
// //         } catch (error) {
// //           Swal.fire({
// //             title: 'Error!',
// //             text: 'Failed to fetch member details. Please try again later.',
// //             icon: 'error',
// //             confirmButtonText: 'OK',
// //           });
// //         }
// //       }
// //     };

// //     fetchMemberDetails();

// //     if (location.state && location.state.selectedSlot) {
// //       const slot = location.state.selectedSlot;
// //       setFormData(prevState => ({
// //         ...prevState,
// //         timings: slot,
// //       }));
// //       setSelectedSlot(slot);
// //     }
// //   }, [location.state, memberid]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }));

// //     if (name === 'membershipStartdate') {
// //       // Update end date when start date changes
// //       const endDate = calculateEndDate(value, formData.membershipType);
// //       setFormData(prevState => ({
// //         ...prevState,
// //         membershipEnddate: endDate,
// //       }));
// //     }
// //   };

// //   const calculateEndDate = (startDate, membershipType) => {
// //     const start = new Date(startDate);
// //     const end = new Date(start);

// //     // Calculate end date based on membership type
// //     if (membershipType === '3 MONTHS') {
// //       end.setMonth(start.getMonth() + 3);
// //     } else if (membershipType === '6 MONTHS') {
// //       end.setMonth(start.getMonth() + 6);
// //     } else if (membershipType === '1 YEAR') {
// //       end.setFullYear(start.getFullYear() + 1);
// //     }

// //     // Format the end date as YYYY-MM-DD
// //     return end.toISOString().split('T')[0];
// //   };

// //   const validateDates = () => {
// //     const { membershipStartdate, membershipEnddate } = formData;
// //     const startDate = new Date(membershipStartdate);
// //     const endDate = new Date(membershipEnddate);
// //     const todayDate = new Date(today);

// //     // Check for valid dates
// //     if (startDate < todayDate || endDate < startDate) {
// //       setIsValidDates(false);
// //     } else {
// //       setIsValidDates(true);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     validateDates();

// //     if (!isValidDates) {
// //       Swal.fire({
// //         title: 'Invalid Dates!',
// //         text: 'Please ensure the membership dates are valid based on the membership type.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //       return;
// //     }

// //     const slotColumn = getSlotColumn(selectedSlot);

// //     const membershipPayload = {
// //       ...formData,
// //       [slotColumn]: selectedSlot,
// //       member: { memberid: memberid },
// //     };

// //     const slotPayload = {
// //       slotColumn,
// //       selectedSlot,
// //     };

// //     try {
// //       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
// //       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

// //       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
// //       if (slotResponse.status === 200) {
// //         Swal.fire({
// //           title: 'Success!',
// //           text: 'Your membership application has been submitted successfully.',
// //           icon: 'success',
// //           confirmButtonText: 'OK',
// //         }).then(() => {
// //           navigate('/memberpage');
// //         });
// //       } else {
// //         throw new Error('Failed to save slot details');
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: error.message || 'An unexpected error occurred. Please try again later.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //     }
// //   };

// //   const getSlotColumn = (slot) => {
// //     switch (slot) {
// //       case '5 AM - 6 AM':
// //         return 'slot1';
// //       case '6 AM - 8 AM':
// //         return 'slot2';
// //       case '8 AM - 10 AM':
// //         return 'slot3';
// //       case '4 PM - 5 PM':
// //         return 'slot4';
// //       case '5 PM - 7 PM':
// //         return 'slot5';
// //       case '7 PM - 9 PM':
// //         return 'slot6';
// //       default:
// //         return '';
// //     }
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
// //             <a href="#" className="hover:text-gray-400">Logout</a>
// //           </li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-4 bg-gray-100 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
// //         >
// //           Go Back
// //         </button>

// //         <div
// //           className="flex-1 bg-cover bg-center"
// //           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// //         >
// //           <div className="flex items-center justify-center min-h-screen">
// //             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
// //               <h1 className="text-lg italic font-black text-center">
// //                 <span className="text-green-500 text-2xl">CONFIRM your slots</span>
// //               </h1>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 {/* Form fields */}
// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">Membership Type</label>
// //                   <input
// //                     type="text"
// //                     id="membershipType"
// //                     name="membershipType"
// //                     value={formData.membershipType}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">Membership Start Date</label>
// //                   <input
// //                     type="date"
// //                     id="membershipStartdate"
// //                     name="membershipStartdate"
// //                     value={formData.membershipStartdate}
// //                     onChange={handleChange}
// //                     min={today}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">Membership End Date</label>
// //                   <input
// //                     type="date"
// //                     id="membershipEnddate"
// //                     name="membershipEnddate"
// //                     value={formData.membershipEnddate}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">Timings</label>
// //                   <input
// //                     type="text"
// //                     id="timings"
// //                     name="timings"
// //                     value={formData.timings}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">Medical Conditions (if any)</label>
// //                   <textarea
// //                     id="medicalConditions"
// //                     name="medicalConditions"
// //                     value={formData.medicalConditions}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     rows="4"
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// //                   disabled={!isValidDates}
// //                 >
// //                   Submit Application
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ApplyMembership;


// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // const ApplyMembership = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const memberid = sessionStorage.getItem('memberid');

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     membershipType: '',
// //     membershipStartdate: '',
// //     membershipEnddate: '',
// //     timings: '',
// //     medicalConditions: '',
// //     member: {
// //       memberid: memberid,
// //     },
// //   });

// //   const [selectedSlot, setSelectedSlot] = useState('');
// //   const [isValidDates, setIsValidDates] = useState(true);
// //   const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

// //   useEffect(() => {
// //     const fetchMemberDetails = async () => {
// //       if (memberid) {
// //         try {
// //           const response = await axios.get(`http://localhost:8000/member/${memberid}`);
// //           if (response.status === 200) {
// //             const { name, email, plantype } = response.data;
// //             setFormData(prevState => ({
// //               ...prevState,
// //               name: name,
// //               email: email,
// //               membershipType: plantype,
// //             }));
// //           }
// //         } catch (error) {
// //           Swal.fire({
// //             title: 'Error!',
// //             text: 'Failed to fetch member details. Please try again later.',
// //             icon: 'error',
// //             confirmButtonText: 'OK',
// //           });
// //         }
// //       }
// //     };

// //     fetchMemberDetails();

// //     if (location.state && location.state.selectedSlot) {
// //       const slot = location.state.selectedSlot;
// //       setFormData(prevState => ({
// //         ...prevState,
// //         timings: slot,
// //       }));
// //       setSelectedSlot(slot);
// //     }
// //   }, [location.state, memberid]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }));

// //     if (name === 'membershipStartdate') {
// //       // Update end date when start date changes
// //       const endDate = calculateEndDate(value, formData.membershipType);
// //       setFormData(prevState => ({
// //         ...prevState,
// //         membershipEnddate: endDate,
// //       }));
// //     }
// //   };

// //   const calculateEndDate = (startDate, membershipType) => {
// //     const start = new Date(startDate);
// //     const end = new Date(start);

// //     // Calculate end date based on membership type
// //     if (membershipType === '3 MONTHS') {
// //       end.setMonth(start.getMonth() + 3);
// //     } else if (membershipType === '6 MONTHS') {
// //       end.setMonth(start.getMonth() + 6);
// //     } else if (membershipType === '1 YEAR') {
// //       end.setFullYear(start.getFullYear() + 1);
// //     }

// //     // Handle edge cases for month-end dates
// //     if (end.getDate() < start.getDate()) {
// //       end.setDate(0); // Set to the last day of the previous month if necessary
// //     }

// //     // Format the end date as YYYY-MM-DD
// //     return end.toISOString().split('T')[0];
// //   };

// //   const validateDates = () => {
// //     const { membershipStartdate, membershipEnddate } = formData;
// //     const startDate = new Date(membershipStartdate);
// //     const endDate = new Date(membershipEnddate);
// //     const todayDate = new Date(today);

// //     // Check for valid dates
// //     if (startDate < todayDate || endDate < startDate) {
// //       setIsValidDates(false);
// //     } else {
// //       setIsValidDates(true);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     validateDates();

// //     if (!isValidDates) {
// //       Swal.fire({
// //         title: 'Invalid Dates!',
// //         text: 'Please ensure the membership dates are valid based on the membership type.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //       return;
// //     }

// //     const slotColumn = getSlotColumn(selectedSlot);

// //     const membershipPayload = {
// //       ...formData,
// //       [slotColumn]: selectedSlot,
// //       member: { memberid: memberid },
// //     };

// //     const slotPayload = {
// //       slotColumn,
// //       selectedSlot,
// //     };

// //     try {
// //       const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
// //       if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

// //       const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
// //       if (slotResponse.status === 200) {
// //         Swal.fire({
// //           title: 'Success!',
// //           text: 'Your membership application has been submitted successfully.',
// //           icon: 'success',
// //           confirmButtonText: 'OK',
// //         }).then(() => {
// //           navigate('/memberpage');
// //         });
// //       } else {
// //         throw new Error('Failed to save slot details');
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: error.message || 'An unexpected error occurred. Please try again later.',
// //         icon: 'error',
// //         confirmButtonText: 'OK',
// //       });
// //     }
// //   };

// //   const getSlotColumn = (slot) => {
// //     switch (slot) {
// //       case '5 AM - 6 AM':
// //         return 'slot1';
// //       case '6 AM - 8 AM':
// //         return 'slot2';
// //       case '8 AM - 10 AM':
// //         return 'slot3';
// //       case '4 PM - 5 PM':
// //         return 'slot4';
// //       case '5 PM - 7 PM':
// //         return 'slot5';
// //       case '7 PM - 9 PM':
// //         return 'slot6';
// //       default:
// //         return '';
// //     }
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
// //             <a href="#" className="hover:text-gray-400">Logout</a>
// //           </li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-4 bg-gray-100 relative">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
// //         >
// //           Go Back
// //         </button>

// //         <div
// //           className="flex-1 bg-cover bg-center"
// //           style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
// //         >
// //           <div className="flex items-center justify-center min-h-screen">
// //             <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
// //               <h1 className="text-lg italic font-black text-center">
// //                 <span className="text-green-500 text-2xl">CONFIRM your slots</span>
// //               </h1>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 {/* Form fields */}
// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">Membership Type</label>
// //                   <input
// //                     type="text"
// //                     id="membershipType"
// //                     name="membershipType"
// //                     value={formData.membershipType}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">Membership Start Date</label>
// //                   <input
// //                     type="date"
// //                     id="membershipStartdate"
// //                     name="membershipStartdate"
// //                     value={formData.membershipStartdate}
// //                     onChange={handleChange}
// //                     min={today}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">Membership End Date</label>
// //                   <input
// //                     type="date"
// //                     id="membershipEnddate"
// //                     name="membershipEnddate"
// //                     value={formData.membershipEnddate}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">Timings</label>
// //                   <input
// //                     type="text"
// //                     id="timings"
// //                     name="timings"
// //                     value={formData.timings}
// //                     className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
// //                     readOnly
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">Medical Conditions (if any)</label>
// //                   <textarea
// //                     id="medicalConditions"
// //                     name="medicalConditions"
// //                     value={formData.medicalConditions}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-lg"
// //                     rows="4"
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// //                   disabled={!isValidDates}
// //                 >
// //                   Submit Application
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ApplyMembership;



// ------------------------------for dynamic dates

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const ApplyMembership = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const memberid = sessionStorage.getItem('memberid');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipType: '',
    membershipStartdate: '',
    membershipEnddate: '',
    timings: '',
    medicalConditions: '',
    member: {
      memberid: memberid
    },
  });

  const [selectedSlot, setSelectedSlot] = useState('');
  const [isValidDates, setIsValidDates] = useState(true);
  const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

  useEffect(() => {
    const fetchMemberDetails = async () => {
      if (memberid) {
        try {
          const response = await axios.get(`http://localhost:8000/member/${memberid}`);
          if (response.status === 200) {
            console.log(response.data)

            const { name, email, plantype } = response.data;
            setFormData(prevState => ({
              ...prevState,
              name: name,
              email: email,
              membershipType: plantype,
            }));
          }
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to fetch member details. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      }
    };

    fetchMemberDetails();

    if (location.state && location.state.selectedSlot) {
      const slot = location.state.selectedSlot;
      setFormData(prevState => ({
        ...prevState,
        timings: slot,
      }));
      setSelectedSlot(slot);
    }
  }, [location.state, memberid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'membershipStartdate') {
      // Update end date when start date changes
      const endDate = calculateEndDate(value, formData.membershipType);
      setFormData(prevState => ({
        ...prevState,
        membershipEnddate: endDate,
      }));
    }
  };

  const calculateEndDate = (startDate, membershipType) => {
    const start = new Date(startDate);
    const end = new Date(start);

    // Calculate end date based on membership type
    if (membershipType === '3 MONTHS') {
      end.setMonth(start.getMonth() + 3);
    } else if (membershipType === '6 MONTHS') {
      end.setMonth(start.getMonth() + 6);
    } else if (membershipType === '1 YEAR') {
      end.setFullYear(start.getFullYear() + 1);
    }

    // Handle edge cases for month-end dates
    if (end.getDate() < start.getDate()) {
      end.setDate(0); // Set to the last day of the previous month if necessary
    }

    // Format the end date as YYYY-MM-DD
    return end.toISOString().split('T')[0];
  };

  const validateDates = () => {
    const { membershipStartdate, membershipEnddate } = formData;
    const startDate = new Date(membershipStartdate);
    const endDate = new Date(membershipEnddate);
    const todayDate = new Date(today);

    // Check for valid dates
    if (startDate < todayDate || endDate < startDate) {
      setIsValidDates(false);
    } else {
      setIsValidDates(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateDates();

    if (!isValidDates) {
      Swal.fire({
        title: 'Invalid Dates!',
        text: 'Please ensure the membership dates are valid based on the membership type.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const slotColumn = getSlotColumn(selectedSlot);

    const membershipPayload = {
      ...formData,
      [slotColumn]: selectedSlot,
      member: { memberid: memberid },
    };

    const slotPayload = {
      slotColumn,
      selectedSlot,
    };

    try {
      const membershipResponse = await axios.post('http://localhost:8000/membership', membershipPayload);
      if (membershipResponse.status !== 200) throw new Error('Failed to save membership details');

      const slotResponse = await axios.post('http://localhost:8000/slots', slotPayload);
      if (slotResponse.status === 200) {
        const { membershipStartdate, membershipEnddate } = formData;

        Swal.fire({
          title: 'Success!',
          text: 'Your membership application has been submitted successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/memberpage', {
            state: { 
              membershipStartdate,
              membershipEnddate 
            }
          });
        });
      } else {
        throw new Error('Failed to save slot details');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message || 'An unexpected error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const getSlotColumn = (slot) => {
    switch (slot) {
      case '5 AM - 6 AM':
        return 'slot1';
      case '6 AM - 8 AM':
        return 'slot2';
      case '8 AM - 10 AM':
        return 'slot3';
      case '4 PM - 5 PM':
        return 'slot4';
      case '5 PM - 7 PM':
        return 'slot5';
      case '7 PM - 9 PM':
        return 'slot6';
      default:
        return '';
    }
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
          <li className="mb-4">
            <a href="/paymentview" className="hover:text-gray-400">Payment</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Go Back
        </button>

        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(https://blogger.googleusercontent.com/img/a/AVvXsEhVJVjqT1miKcT7UgzuOj6drShI8xm3L2DzpZR1uYv3p2qkRRWIZg9qNIKbQpWPynh2BTUT3ozRhposkuqiNdpAWHfuVRfGkIiUmDg83sXWvJjtlltLStm6CDjzHBJnFPUeGGs8CwsGpwux4mlhzGquytx-438RP5Emt7nbs5Ay5_Gh-ayBPBAsX_xEOQ=w640-h360-rw)` }}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
              <h1 className="text-lg italic font-black text-center">
                <span className="text-green-500 text-2xl">CONFIRM your slots</span>
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form fields */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipType">Membership Type</label>
                  <input
                    type="text"
                    id="membershipType"
                    name="membershipType"
                    value={formData.membershipType}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipStartdate">Membership Start Date</label>
                  <input
                    type="date"
                    id="membershipStartdate"
                    name="membershipStartdate"
                    value={formData.membershipStartdate}
                    onChange={handleChange}
                    min={today}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="membershipEnddate">Membership End Date</label>
                  <input
                    type="date"
                    id="membershipEnddate"
                    name="membershipEnddate"
                    value={formData.membershipEnddate}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="timings">Timings</label>
                  <input
                    type="text"
                    id="timings"
                    name="timings"
                    value={formData.timings}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="medicalConditions">Medical Conditions (if any)</label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                  disabled={!isValidDates}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplyMembership;

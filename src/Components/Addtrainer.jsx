// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { Link, Outlet } from 'react-router-dom';

// // // const AddTrainer = () => {
// // //   const [formData, setFormData] = useState({
// // //     trainerName: '',
// // //     age: '',
// // //     trainerEmail: '',
// // //     phoneNumber: '',
// // //     specialization: '',
// // //     availability: '',
// // //     certification: null // Adjusted to handle file input
// // //   });

// // //   // Handle form input changes
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // Handle file input change
// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setFormData({ ...formData, [name]: files[0] });
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const data = new FormData();
// // //     data.append('trainername', formData.trainerName);
// // //     data.append('age', formData.age);
// // //     data.append('trainerEmail', formData.trainerEmail);
// // //     data.append('phonenumber', formData.phoneNumber);
// // //     data.append('specialization', formData.specialization);
// // //     data.append('availability', formData.availability);
// // //     if (formData.certification) {
// // //       data.append('certifications', formData.certification); // 'certifications' matches backend field name
// // //     }

// // //     try {
// // //       await axios.post('http://localhost:8000/trainers', data, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data'
// // //         }
// // //       });
// // //       alert('Trainer added successfully!');
// // //       setFormData({
// // //         trainerName: '',
// // //         age: '',
// // //         trainerEmail: '',
// // //         phoneNumber: '',
// // //         specialization: '',
// // //         availability: '',
// // //         certification: null
// // //       });
// // //     } catch (error) {
// // //       console.error('Error adding trainer:', error.response || error.message || error);
// // //       alert('Failed to add trainer. Please check console for details.');
// // //     }
// // //   };

// // //   return (

// // // <div className="flex h-screen">
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

// // //       <div className="bg-gray-900 min-h-screen flex justify-center items-center p-6">
// // //       <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md">
// // //         <h1 className="text-2xl font-bold text-white mb-4 text-center">Add Trainer</h1>
        
// // //         {/* Add Trainer Form */}
// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <input
// // //             type="text"
// // //             name="trainerName"
// // //             value={formData.trainerName}
// // //             onChange={handleInputChange}
// // //             placeholder="Trainer Name"
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <input
// // //             type="number"
// // //             name="age"
// // //             value={formData.age}
// // //             onChange={handleInputChange}
// // //             placeholder="Age"
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <input
// // //             type="email"
// // //             name="trainerEmail"
// // //             value={formData.trainerEmail}
// // //             onChange={handleInputChange}
// // //             placeholder="Trainer Email"
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="phoneNumber"
// // //             value={formData.phoneNumber}
// // //             onChange={handleInputChange}
// // //             placeholder="Phone Number"
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="specialization"
// // //             value={formData.specialization}
// // //             onChange={handleInputChange}
// // //             placeholder="Specialization"
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <input
// // //             type="file"
// // //             name="certification"
// // //             onChange={handleFileChange}
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="availability"
// // //             value={formData.availability}
// // //             onChange={handleInputChange}
// // //             placeholder="Availability"
// // //             className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //             required
// // //           />
// // //           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">Add Trainer</button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //       <div className="w-4/5 p-5">
// // //         {/* Top Navigation Bar */}
        

// // //         {/* Main Dashboard Content */}
// // //         <div>
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AddTrainer;


// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { Link, Outlet } from 'react-router-dom';

// // // const AddTrainer = () => {
// // //   const [formData, setFormData] = useState({
// // //     trainerName: '',
// // //     age: '',
// // //     trainerEmail: '',
// // //     phoneNumber: '',
// // //     specialization: '',
// // //     availability: '',
// // //     certification: null // Adjusted to handle file input
// // //   });

// // //   // Handle form input changes
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // Handle file input change
// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setFormData({ ...formData, [name]: files[0] });
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const data = new FormData();
// // //     data.append('trainerName', formData.trainerName);
// // //     data.append('age', formData.age);
// // //     data.append('trainerEmail', formData.trainerEmail);
// // //     data.append('phoneNumber', formData.phoneNumber);
// // //     data.append('specialization', formData.specialization);
// // //     data.append('availability', formData.availability);
// // //     if (formData.certification) {
// // //       data.append('certification', formData.certification); // 'certification' matches backend field name
// // //     }

// // //     try {
// // //       await axios.post('http://localhost:8000/trainers', data, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data'
// // //         }
// // //       });
// // //       alert('Trainer added successfully!');
// // //       setFormData({
// // //         trainerName: '',
// // //         age: '',
// // //         trainerEmail: '',
// // //         phoneNumber: '',
// // //         specialization: '',
// // //         availability: '',
// // //         certification: null
// // //       });
// // //     } catch (error) {
// // //       console.error('Error adding trainer:', error.response || error.message || error);
// // //       alert('Failed to add trainer. Please check console for details.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex">
// // //       {/* Sidebar */}
// // //       <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5 min-h-screen">
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

// // //       <div className="w-4/5 p-6 bg-gray-900 min-h-screen">
// // //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl">
// // //           <h1 className="text-2xl font-bold text-white mb-4 text-center">Add Trainer</h1>
          
// // //           {/* Add Trainer Form */}
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <input
// // //               type="text"
// // //               name="trainerName"
// // //               value={formData.trainerName}
// // //               onChange={handleInputChange}
// // //               placeholder="Trainer Name"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="number"
// // //               name="age"
// // //               value={formData.age}
// // //               onChange={handleInputChange}
// // //               placeholder="Age"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="email"
// // //               name="trainerEmail"
// // //               value={formData.trainerEmail}
// // //               onChange={handleInputChange}
// // //               placeholder="Trainer Email"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               name="phoneNumber"
// // //               value={formData.phoneNumber}
// // //               onChange={handleInputChange}
// // //               placeholder="Phone Number"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               name="specialization"
// // //               value={formData.specialization}
// // //               onChange={handleInputChange}
// // //               placeholder="Specialization"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="file"
// // //               name="certification"
// // //               onChange={handleFileChange}
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               name="availability"
// // //               value={formData.availability}
// // //               onChange={handleInputChange}
// // //               placeholder="Availability"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
// // //               Add Trainer
// // //             </button>
// // //           </form>
// // //         </div>

// // //         {/* Main Dashboard Content */}
// // //         <div className="mt-6">
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AddTrainer;


// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { Link, Outlet } from 'react-router-dom';

// // // const AddTrainer = () => {
// // //   const [formData, setFormData] = useState({
// // //     trainername: '',
// // //     age: '',
// // //     trainerEmail: '',
// // //     phonenumber: '',
// // //     specialization: '',
// // //     availability: '',
// // //     certifications: null // Adjusted to handle file input
// // //   });

// // //   // Handle form input changes
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // Handle file input change
// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setFormData({ ...formData, [name]: files[0] });
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const data = new FormData();
// // //     data.append('trainername', formData.trainername);
// // //     data.append('age', formData.age);
// // //     data.append('trainerEmail', formData.trainerEmail);
// // //     data.append('phonenumber', formData.phonenumber);
// // //     data.append('specialization', formData.specialization);
// // //     data.append('availability', formData.availability);
// // //     if (formData.certifications) {
// // //       data.append('certifications', formData.certifications); // 'certification' matches backend field name
// // //     }

// // //     // Log FormData contents for debugging
// // //     console.log('FormData entries:');
// // //     for (let [key, value] of data.entries()) {
// // //       console.log(`${key}:`, value);
// // //     }

// // //     try {
// // //       // Log request details
// // //       console.log('Sending POST request to http://localhost:8000/trainers');
      
// // //       const response = await axios.post('http://localhost:8000/trainers', data, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data'
// // //         }
// // //       });

// // //       // Log response details
// // //       console.log('Response:', response.data);
// // //       alert('Trainer added successfully!');
      
// // //       // Reset form data
// // //       setFormData({
// // //         trainername: '',
// // //         age: '',
// // //         trainerEmail: '',
// // //         phonenumber: '',
// // //         specialization: '',
// // //         availability: '',
// // //         certifications: null
// // //       });
// // //     } catch (error) {
// // //       // Log detailed error information
// // //       console.error('Error adding trainer:', {
// // //         message: error.message,
// // //         response: error.response ? {
// // //           status: error.response.status,
// // //           data: error.response.data
// // //         } : 'No response from server',
// // //         config: error.config
// // //       });
// // //       alert('Failed to add trainer. Please check console for details.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex">
// // //       {/* Sidebar */}
// // //       <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5 min-h-screen">
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

// // //       <div className="w-4/5 p-6 bg-gray-900 min-h-screen">
// // //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl">
// // //           <h1 className="text-2xl font-bold text-white mb-4 text-center">Add Trainer</h1>
          
// // //           {/* Add Trainer Form */}
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <input
// // //               type="text"
// // //               name="trainername"
// // //               value={formData.trainername}
// // //               onChange={handleInputChange}
// // //               placeholder="Trainer Name"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="number"
// // //               name="age"
// // //               value={formData.age}
// // //               onChange={handleInputChange}
// // //               placeholder="Age"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="email"
// // //               name="trainerEmail"
// // //               value={formData.trainerEmail}
// // //               onChange={handleInputChange}
// // //               placeholder="Trainer Email"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               name="phonenumber"
// // //               value={formData.phonenumber}
// // //               onChange={handleInputChange}
// // //               placeholder="Phone Number"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               name="specialization"
// // //               value={formData.specialization}
// // //               onChange={handleInputChange}
// // //               placeholder="Specialization"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="file"
// // //               name="certifications"
// // //               onChange={handleFileChange}
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               name="availability"
// // //               value={formData.availability}
// // //               onChange={handleInputChange}
// // //               placeholder="Availability"
// // //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// // //               required
// // //             />
// // //             <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
// // //               Add Trainer
// // //             </button>
// // //           </form>
// // //         </div>

// // //         {/* Main Dashboard Content */}
// // //         <div className="mt-6">
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AddTrainer;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link, Outlet } from 'react-router-dom';

// // const AddTrainer = () => {
// //   const [formData, setFormData] = useState({
// //     trainername: '',
// //     age: '',
// //     trainerEmail: '',
// //     password: '',  // Added password field
// //     phonenumber: '',
// //     specialization: '',
// //     availability: '',
// //     certifications: null // Adjusted to handle file input
// //   });

// //   // Handle form input changes
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   // Handle file input change
// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target;
// //     setFormData({ ...formData, [name]: files[0] });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const data = new FormData();
// //     data.append('trainername', formData.trainername);
// //     data.append('age', formData.age);
// //     data.append('trainerEmail', formData.trainerEmail);
// //     data.append('password', formData.password); // Added password field
// //     data.append('phonenumber', formData.phonenumber);
// //     data.append('specialization', formData.specialization);
// //     data.append('availability', formData.availability);
// //     if (formData.certifications) {
// //       data.append('certifications', formData.certifications); // 'certification' matches backend field name
// //     }

// //     // Log FormData contents for debugging
// //     console.log('FormData entries:');
// //     for (let [key, value] of data.entries()) {
// //       console.log(`${key}:`, value);
// //     }

// //     try {
// //       // Log request details
// //       console.log('Sending POST request to http://localhost:8000/trainers');
      
// //       const response = await axios.post('http://localhost:8000/trainers', data, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });

// //       // Log response details
// //       console.log('Response:', response.data);
// //       alert('Trainer added successfully!');
      
// //       // Reset form data
// //       setFormData({
// //         trainername: '',
// //         age: '',
// //         trainerEmail: '',
// //         password: '',  // Reset password field
// //         phonenumber: '',
// //         specialization: '',
// //         availability: '',
// //         certifications: null
// //       });
// //     } catch (error) {
// //       // Log detailed error information
// //       console.error('Error adding trainer:', {
// //         message: error.message,
// //         response: error.response ? {
// //           status: error.response.status,
// //           data: error.response.data
// //         } : 'No response from server',
// //         config: error.config
// //       });
// //       alert('Failed to add trainer. Please check console for details.');
// //     }
// //   };

// //   return (
// //     <div className="flex">
// //       {/* Sidebar */}
// //       <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5 min-h-screen">
// //         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
// //         <ul>
// //           <li className="mb-4">
// //             <Link to="/dashboard/home" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">🏠</span> Dashboard
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/dashboard/profile" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">👤</span> Manage Members
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/adminpage/managetrainers" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">📄</span> Manage Trainers
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">👥</span> Manage Classes
// //             </Link>
// //           </li>
// //           <li className="mb-4">
// //             <Link to="/dashboard/comments" className="flex items-center text-white hover:text-gray-300">
// //               <span className="mr-2">💬</span> Reports
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       <div className="w-4/5 p-6 bg-gray-900 min-h-screen">
// //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl">
// //           <h1 className="text-2xl font-bold text-white mb-4 text-center">Add Trainer</h1>
          
// //           {/* Add Trainer Form */}
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <input
// //               type="text"
// //               name="trainername"
// //               value={formData.trainername}
// //               onChange={handleInputChange}
// //               placeholder="Trainer Name"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="age"
// //               value={formData.age}
// //               onChange={handleInputChange}
// //               placeholder="Age"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="email"
// //               name="trainerEmail"
// //               value={formData.trainerEmail}
// //               onChange={handleInputChange}
// //               placeholder="Trainer Email"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="password"  // Updated type to 'password'
// //               name="password"
// //               value={formData.password}
// //               onChange={handleInputChange}
// //               placeholder="Password"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="text"
// //               name="phonenumber"
// //               value={formData.phonenumber}
// //               onChange={handleInputChange}
// //               placeholder="Phone Number"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="text"
// //               name="specialization"
// //               value={formData.specialization}
// //               onChange={handleInputChange}
// //               placeholder="Specialization"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="file"
// //               name="certifications"
// //               onChange={handleFileChange}
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <input
// //               type="text"
// //               name="availability"
// //               value={formData.availability}
// //               onChange={handleInputChange}
// //               placeholder="Availability"
// //               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
// //               required
// //             />
// //             <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
// //               Add Trainer
// //             </button>
// //           </form>
// //         </div>

// //         {/* Main Dashboard Content */}
// //         <div className="mt-6">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddTrainer;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const AddTrainer = () => {
//   const [formData, setFormData] = useState({
//     trainername: '',
//     age: '',
//     trainerEmail: '',
//     password: '',
//     phonenumber: '',
//     specialization: '',
//     availability: '',
//     certifications: null
//   });

//   const navigate = useNavigate();  // Hook for navigation

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append('trainername', formData.trainername);
//     data.append('age', formData.age);
//     data.append('trainerEmail', formData.trainerEmail);
//     data.append('password', formData.password);
//     data.append('phonenumber', formData.phonenumber);
//     data.append('specialization', formData.specialization);
//     data.append('availability', formData.availability);
//     if (formData.certifications) {
//       data.append('certifications', formData.certifications);
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/trainers', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Show SweetAlert success message
//       await Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: 'Trainer added successfully!',
//         confirmButtonText: 'OK'
//       });

//       // Navigate to the Manage Trainers page
//       navigate('/managetrainers');

//       // Reset form data
//       setFormData({
//         trainername: '',
//         age: '',
//         trainerEmail: '',
//         password: '',
//         phonenumber: '',
//         specialization: '',
//         availability: '',
//         certifications: null
//       });
//     } catch (error) {
//       // Show SweetAlert error message
//       await Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Failed to add trainer. Please check the console for details.',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5 min-h-screen">
//         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
//         <ul>
//           <li className="mb-4">
//             <Link to="/adminpage" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">🏠</span> Dashboard
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/managemembers" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">👤</span> Manage Members
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/managetrainers" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">📄</span> Manage Trainers
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/manageclasses" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">👥</span> Manage Classes
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/dashboard/comments" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">💬</span> Reports
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="w-4/5 p-6 bg-gray-900 min-h-screen">
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl">
//           <h1 className="text-2xl font-bold text-white mb-4 text-center">Add Trainer</h1>
          
//           {/* Add Trainer Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="trainername"
//               value={formData.trainername}
//               onChange={handleInputChange}
//               placeholder="Trainer Name"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//               placeholder="Age"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="email"
//               name="trainerEmail"
//               value={formData.trainerEmail}
//               onChange={handleInputChange}
//               placeholder="Trainer Email"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Password"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="text"
//               name="phonenumber"
//               value={formData.phonenumber}
//               onChange={handleInputChange}
//               placeholder="Phone Number"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="text"
//               name="specialization"
//               value={formData.specialization}
//               onChange={handleInputChange}
//               placeholder="Specialization"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="file"
//               name="certifications"
//               onChange={handleFileChange}
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <input
//               type="text"
//               name="availability"
//               value={formData.availability}
//               onChange={handleInputChange}
//               placeholder="Availability"
//               className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
//               required
//             />
//             <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
//               Add Trainer
//             </button>
//           </form>
//         </div>

//         {/* Main Dashboard Content */}
//         <div className="mt-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTrainer;


import React, { useState } from 'react';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTrainer = () => {
  const [formData, setFormData] = useState({
    trainername: '',
    age: '',
    trainerEmail: '',
    password: '',
    phonenumber: '',
    specialization: '',
    availability: '',
    certifications: null
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'age':
        const ageValue = parseInt(value);
        if (ageValue < 18 || ageValue > 60) {
          newErrors.age = 'Age must be between 18 and 60';
        } else {
          delete newErrors.age;
        }
        break;
      case 'trainerEmail':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(value)) {
          newErrors.trainerEmail = 'Email must contain "@" and ".com"';
        } else {
          delete newErrors.trainerEmail;
        }
        break;
      case 'password':
        const passwordPattern = /^(?=.*[A-Z])(?=.*[@])(?=.*\d).{5,}$/;
        if (!passwordPattern.test(value)) {
          newErrors.password = 'Password must be at least 5 characters long, include one uppercase letter, one number, and one special character (@)';
        } else {
          delete newErrors.password;
        }
        break;
      case 'phonenumber':
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(value)) {
          newErrors.phonenumber = 'Phone number must be exactly 10 digits';
        } else {
          delete newErrors.phonenumber;
        }
        break;
      case 'specialization':
        if (!value) {
          newErrors.specialization = 'Specialization is required';
        } else {
          delete newErrors.specialization;
        }
        break;
      case 'availability':
        if (!value) {
          newErrors.availability = 'Availability is required';
        } else {
          delete newErrors.availability;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    data.append('trainername', formData.trainername);
    data.append('age', formData.age);
    data.append('trainerEmail', formData.trainerEmail);
    data.append('password', formData.password);
    data.append('phonenumber', formData.phonenumber);
    data.append('specialization', formData.specialization);
    data.append('availability', formData.availability);
    if (formData.certifications) {
      data.append('certifications', formData.certifications);
    }

    try {
      const response = await axios.post('http://localhost:8000/trainers', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Trainer added successfully!',
        confirmButtonText: 'OK'
      });

      navigate('/managetrainers');

      setFormData({
        trainername: '',
        age: '',
        trainerEmail: '',
        password: '',
        phonenumber: '',
        specialization: '',
        availability: '',
        certifications: null
      });
      setErrors({});
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add trainer. Please check the console for details.',
        confirmButtonText: 'OK'
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const ageValue = parseInt(formData.age);
    if (ageValue < 18 || ageValue > 60) {
      newErrors.age = 'Age must be between 18 and 60';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(formData.trainerEmail)) {
      newErrors.trainerEmail = 'Email must contain "@" and ".com"';
    }
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@])(?=.*\d).{5,}$/;
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = 'Password must be at least 5 characters long, include one uppercase letter, one number, and one special character (@)';
    }
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phonenumber)) {
      newErrors.phonenumber = 'Phone number must be exactly 10 digits';
    }
    if (!formData.specialization) {
      newErrors.specialization = 'Specialization is required';
    }
    if (!formData.availability) {
      newErrors.availability = 'Availability is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gradient-to-b from-blue-800 to-blue-500 text-white p-5 min-h-screen">
        <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
        <ul>
          <li className="mb-4">
            <Link to="/adminpage" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">🏠</span> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/managemembers" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">👤</span> Manage Members
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/managetrainers" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">📄</span> Manage Trainers
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/manageclasses" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">👥</span> Manage Classes
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/comments" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">💬</span> Reports
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-4/5 p-6 bg-gray-900 min-h-screen">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">Add Trainer</h1>
          
          {/* Add Trainer Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="trainername"
              value={formData.trainername}
              onChange={handleInputChange}
              placeholder="Trainer Name"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              required
            />
            <div className="text-red-500">{errors.age}</div>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              required
            />
            <div className="text-red-500">{errors.trainerEmail}</div>
            <input
              type="email"
              name="trainerEmail"
              value={formData.trainerEmail}
              onChange={handleInputChange}
              placeholder="Trainer Email"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              required
            />
            <div className="text-red-500">{errors.password}</div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              required
            />
            <div className="text-red-500">{errors.phonenumber}</div>
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              maxLength="10"
              required
            />
            <div className="text-red-500">{errors.specialization}</div>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              required
            >
              <option value="">Select Specialization</option>
              <option value="Fitness Coach">Fitness Coach</option>
              <option value="Bodybuilding Coach">Bodybuilding Coach</option>
              <option value="Exercise Physiologist">Exercise Physiologist</option>
              <option value="Sports Coach">Sports Coach</option>
              <option value="Wellness Specialist">Wellness Specialist</option>
            </select>
            <div className="text-red-500">{errors.availability}</div>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
              required
            >
              <option value="">Select Availability</option>
              <option value="5 AM - 6 AM">5 AM - 6 AM</option>
              <option value="6 AM - 8 AM">6 AM - 8 AM</option>
              <option value="8 AM - 10 AM">8 AM - 10 AM</option>
              <option value="4 PM - 5 PM">4 PM - 5 PM</option>
              <option value="5 PM - 7 PM">5 PM - 7 PM</option>
              <option value="7 PM - 9 PM">7 PM - 9 PM</option>
            </select>
            <input
              type="file"
              name="certifications"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white"
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300">
              Add Trainer
            </button>
          </form>
        </div>

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AddTrainer;

// // // // import React, { useState, useEffect } from 'react';
// // // // import Swal from 'sweetalert2';
// // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // import Navbar from './Navbar';

// // // // const RegistrationForm = () => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();

// // // //   const [formData, setFormData] = useState({
// // // //     plantype: '', // Added planType field
// // // //     name: '',
// // // //     gender: '',
// // // //     email: '',
// // // //     phone: '',
// // // //     age: '',
// // // //     weight: '',
// // // //     height: '',
// // // //     bmi: '',
// // // //     address: '',
// // // //     city: '',
// // // //     gymbefore: '',
// // // //     password: '',
// // // //     contactname: '',
// // // //     relationship: '',
// // // //     contactnumber: ''
// // // //   });

// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [success, setSuccess] = useState(null);

// // // //   useEffect(() => {
// // // //     // Retrieve the selected plan from the navigation state
// // // //     if (location.state && location.state.selectedPlan) {
// // // //       const { selectedPlan } = location.state;
// // // //       setFormData((prevData) => ({
// // // //         ...prevData,
// // // //         plantype: selectedPlan // Set the planType in the formData
// // // //       }));
// // // //     }
// // // //   }, [location.state]);

// // // //   useEffect(() => {
// // // //     calculateBMI();
// // // //   }, [formData.weight, formData.height]);

// // // //   const calculateBMI = () => {
// // // //     const weight = parseFloat(formData.weight);
// // // //     const height = parseFloat(formData.height);

// // // //     if (weight && height) {
// // // //       const heightInMeters = height / 100; // Convert height from cm to meters
// // // //       const bmi = weight / (heightInMeters * heightInMeters);
// // // //       setFormData((prevData) => ({
// // // //         ...prevData,
// // // //         bmi: bmi.toFixed(2) // Set BMI to 2 decimal places
// // // //       }));
// // // //     } else {
// // // //       setFormData((prevData) => ({
// // // //         ...prevData,
// // // //         bmi: ''
// // // //       }));
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: value
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     setSuccess(null);

// // // //     console.log('Submitting form data:', formData);

// // // //     try {
// // // //       const response = await fetch('http://localhost:8000/member', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       console.log('Response status:', response.status);

// // // //       const contentType = response.headers.get('Content-Type');
// // // //       let responseBody;

// // // //       if (contentType && contentType.includes('application/json')) {
// // // //         responseBody = await response.json();
// // // //       } else {
// // // //         responseBody = await response.text();
// // // //       }

// // // //       if (!response.ok) {
// // // //         throw new Error(responseBody.message || responseBody || 'Network response was not ok');
// // // //       }

// // // //       console.log('Success response:', responseBody);
// // // //       setSuccess('Registration successful');

// // // //       await Swal.fire({
// // // //         title: 'Success!',
// // // //         text: 'Registration successful. You will be redirected to the payment page.',
// // // //         icon: 'success',
// // // //         confirmButtonText: 'OK'
// // // //       });

// // // //       navigate('/paymentpage');

// // // //       setFormData({
// // // //         plantype: '', // Reset planType
// // // //         name: '',
// // // //         gender: '',
// // // //         email: '',
// // // //         phone: '',
// // // //         age: '',
// // // //         weight: '',
// // // //         height: '',
// // // //         bmi: '',
// // // //         address: '',
// // // //         city: '',
// // // //         gymbefore: '',
// // // //         password: '',
// // // //         contactname: '',
// // // //         relationship: '',
// // // //         contactnumber: ''
// // // //       });
// // // //     } catch (error) {
// // // //       console.error('Registration Error:', error);
// // // //       setError(error.message || 'Error during registration');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <Navbar />
// // // //       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
// // // //         <div className="w-full max-w-6xl bg-gray-800 text-white p-8 rounded-lg shadow-lg">
// // // //           <h2 className="text-2xl font-bold mb-6">Register for a Membership</h2>

// // // //           {/* Display Selected Plan */}
// // // //           {formData.plantype && (
// // // //             <div className="bg-yellow-500 text-black p-4 rounded-lg mb-6">
// // // //               <h3 className="text-xl font-bold">Selected Plan:</h3>
// // // //               <p className="text-lg">{formData.plantype}</p>
// // // //             </div>
// // // //           )}

// // // //           <form onSubmit={handleSubmit}>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               {/* Plan Type Field */}
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="plantype" className="block text-sm font-medium mb-1">Plan Type</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="plantype"
// // // //                   name="plantype"
// // // //                   value={formData.plantype}
// // // //                   readOnly
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                 />
// // // //               </div>

// // // //               {/* Personal Information Fields */}
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="name"
// // // //                   name="name"
// // // //                   value={formData.name}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="gender"
// // // //                   name="gender"
// // // //                   value={formData.gender}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
// // // //                 <input
// // // //                   type="email"
// // // //                   id="email"
// // // //                   name="email"
// // // //                   value={formData.email}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="phone"
// // // //                   name="phone"
// // // //                   value={formData.phone}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
// // // //                 <input
// // // //                   type="number"
// // // //                   id="age"
// // // //                   name="age"
// // // //                   value={formData.age}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="weight" className="block text-sm font-medium mb-1">Weight (kg)</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="weight"
// // // //                   name="weight"
// // // //                   value={formData.weight}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="height" className="block text-sm font-medium mb-1">Height (cm)</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="height"
// // // //                   name="height"
// // // //                   value={formData.height}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="bmi" className="block text-sm font-medium mb-1">BMI</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="bmi"
// // // //                   name="bmi"
// // // //                   value={formData.bmi}
// // // //                   readOnly
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="address"
// // // //                   name="address"
// // // //                   value={formData.address}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="city"
// // // //                   name="city"
// // // //                   value={formData.city}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="gymbefore" className="block text-sm font-medium mb-1">Previous Gym Experience</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="gymbefore"
// // // //                   name="gymbefore"
// // // //                   value={formData.gymbefore}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div className="flex flex-col">
// // // //                 <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
// // // //                 <input
// // // //                   type="password"
// // // //                   id="password"
// // // //                   name="password"
// // // //                   value={formData.password}
// // // //                   onChange={handleChange}
// // // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                   required
// // // //                 />
// // // //               </div>

// // // //               {/* Additional Contact Information */}
// // // //               <div className="col-span-2">
// // // //                 <h3 className="text-xl font-semibold mb-4">Additional Contact Information</h3>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                   <div className="flex flex-col">
// // // //                     <label htmlFor="contactname" className="block text-sm font-medium mb-1">Emergency Contact Name</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="contactname"
// // // //                       name="contactname"
// // // //                       value={formData.contactname}
// // // //                       onChange={handleChange}
// // // //                       className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                       required
// // // //                     />
// // // //                   </div>
// // // //                   <div className="flex flex-col">
// // // //                     <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="relationship"
// // // //                       name="relationship"
// // // //                       value={formData.relationship}
// // // //                       onChange={handleChange}
// // // //                       className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                       required
// // // //                     />
// // // //                   </div>
// // // //                   <div className="flex flex-col">
// // // //                     <label htmlFor="contactnumber" className="block text-sm font-medium mb-1">Emergency Contact Number</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="contactnumber"
// // // //                       name="contactnumber"
// // // //                       value={formData.contactnumber}
// // // //                       onChange={handleChange}
// // // //                       className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //                       required
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             {error && <p className="text-red-500 mt-4">{error}</p>}
// // // //             {success && <p className="text-green-500 mt-4">{success}</p>}
// // // //             <div className="mt-6">
// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// // // //                 disabled={loading}
// // // //               >
// // // //                 {loading ? 'Enrolling...' : 'Enroll now'}
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RegistrationForm;



// // // import React, { useState, useEffect } from 'react';
// // // import Swal from 'sweetalert2';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import Navbar from './Navbar';

// // // const RegistrationForm = () => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   const [formData, setFormData] = useState({
// // //     plantype: '', // Added planType field
// // //     name: '',
// // //     gender: '',
// // //     email: '',
// // //     phone: '',
// // //     age: '',
// // //     weight: '',
// // //     height: '',
// // //     bmi: '',
// // //     address: '',
// // //     city: '',
// // //     gymbefore: '',
// // //     password: '',
// // //     contactname: '',
// // //     relationship: '',
// // //     contactnumber: ''
// // //   });

// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(null);

// // //   useEffect(() => {
// // //     // Retrieve the selected plan from the navigation state
// // //     if (location.state && location.state.selectedPlan) {
// // //       const { selectedPlan } = location.state;
// // //       setFormData((prevData) => ({
// // //         ...prevData,
// // //         plantype: selectedPlan // Set the planType in the formData
// // //       }));
// // //     }
// // //   }, [location.state]);

// // //   useEffect(() => {
// // //     calculateBMI();
// // //   }, [formData.weight, formData.height]);

// // //   const calculateBMI = () => {
// // //     const weight = parseFloat(formData.weight);
// // //     const height = parseFloat(formData.height);

// // //     if (weight && height) {
// // //       const heightInMeters = height / 100; // Convert height from cm to meters
// // //       const bmi = weight / (heightInMeters * heightInMeters);
// // //       setFormData((prevData) => ({
// // //         ...prevData,
// // //         bmi: bmi.toFixed(2) // Set BMI to 2 decimal places
// // //       }));
// // //     } else {
// // //       setFormData((prevData) => ({
// // //         ...prevData,
// // //         bmi: ''
// // //       }));
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError(null);
// // //     setSuccess(null);

// // //     console.log('Submitting form data:', formData);

// // //     try {
// // //       const response = await fetch('http://localhost:8000/member', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       console.log('Response status:', response.status);

// // //       const contentType = response.headers.get('Content-Type');
// // //       let responseBody;

// // //       if (contentType && contentType.includes('application/json')) {
// // //         responseBody = await response.json();
// // //       } else {
// // //         responseBody = await response.text();
// // //       }

// // //       if (!response.ok) {
// // //         throw new Error(responseBody.message || responseBody || 'Network response was not ok');
// // //       }

// // //       console.log('Success response:', responseBody);
// // //       setSuccess('Registration successful');

// // //       // Store email in localStorage
// // //       localStorage.setItem('userEmail', formData.email);

// // //       await Swal.fire({
// // //         title: 'Success!',
// // //         text: 'Registration successful. You will be redirected to the payment page.',
// // //         icon: 'success',
// // //         confirmButtonText: 'OK'
// // //       });

// // //       // Navigate to the payment page
// // //       navigate('/paymentpage');

// // //       // Clear form data if needed
// // //       setFormData({
// // //         plantype: '', // Reset planType
// // //         name: '',
// // //         gender: '',
// // //         email: '',
// // //         phone: '',
// // //         age: '',
// // //         weight: '',
// // //         height: '',
// // //         bmi: '',
// // //         address: '',
// // //         city: '',
// // //         gymbefore: '',
// // //         password: '',
// // //         contactname: '',
// // //         relationship: '',
// // //         contactnumber: ''
// // //       });
// // //     } catch (error) {
// // //       console.error('Registration Error:', error);
// // //       setError(error.message || 'Error during registration');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
// // //         <div className="w-full max-w-6xl bg-gray-800 text-white p-8 rounded-lg shadow-lg">
// // //           <h2 className="text-2xl font-bold mb-6">Register for a Membership</h2>

// // //           {/* Display Selected Plan */}
// // //           {formData.plantype && (
// // //             <div className="bg-yellow-500 text-black p-4 rounded-lg mb-6">
// // //               <h3 className="text-xl font-bold">Selected Plan:</h3>
// // //               <p className="text-lg">{formData.plantype}</p>
// // //             </div>
// // //           )}

// // //           <form onSubmit={handleSubmit}>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* Plan Type Field */}
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="plantype" className="block text-sm font-medium mb-1">Plan Type</label>
// // //                 <input
// // //                   type="text"
// // //                   id="plantype"
// // //                   name="plantype"
// // //                   value={formData.plantype}
// // //                   readOnly
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 />
// // //               </div>

// // //               {/* Personal Information Fields */}
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
// // //                 <input
// // //                   type="text"
// // //                   id="name"
// // //                   name="name"
// // //                   value={formData.name}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
// // //                 <input
// // //                   type="text"
// // //                   id="gender"
// // //                   name="gender"
// // //                   value={formData.gender}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
// // //                 <input
// // //                   type="email"
// // //                   id="email"
// // //                   name="email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
// // //                 <input
// // //                   type="text"
// // //                   id="phone"
// // //                   name="phone"
// // //                   value={formData.phone}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
// // //                 <input
// // //                   type="number"
// // //                   id="age"
// // //                   name="age"
// // //                   value={formData.age}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="weight" className="block text-sm font-medium mb-1">Weight (kg)</label>
// // //                 <input
// // //                   type="text"
// // //                   id="weight"
// // //                   name="weight"
// // //                   value={formData.weight}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="height" className="block text-sm font-medium mb-1">Height (cm)</label>
// // //                 <input
// // //                   type="text"
// // //                   id="height"
// // //                   name="height"
// // //                   value={formData.height}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="bmi" className="block text-sm font-medium mb-1">BMI</label>
// // //                 <input
// // //                   type="text"
// // //                   id="bmi"
// // //                   name="bmi"
// // //                   value={formData.bmi}
// // //                   readOnly
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
// // //                 <input
// // //                   type="text"
// // //                   id="address"
// // //                   name="address"
// // //                   value={formData.address}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
// // //                 <input
// // //                   type="text"
// // //                   id="city"
// // //                   name="city"
// // //                   value={formData.city}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="gymbefore" className="block text-sm font-medium mb-1">Have you been to the gym before?</label>
// // //                 <input
// // //                   type="text"
// // //                   id="gymbefore"
// // //                   name="gymbefore"
// // //                   value={formData.gymbefore}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
// // //                 <input
// // //                   type="password"
// // //                   id="password"
// // //                   name="password"
// // //                   value={formData.password}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="contactname" className="block text-sm font-medium mb-1">Emergency Contact Name</label>
// // //                 <input
// // //                   type="text"
// // //                   id="contactname"
// // //                   name="contactname"
// // //                   value={formData.contactname}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship to Contact</label>
// // //                 <input
// // //                   type="text"
// // //                   id="relationship"
// // //                   name="relationship"
// // //                   value={formData.relationship}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col">
// // //                 <label htmlFor="contactnumber" className="block text-sm font-medium mb-1">Emergency Contact Number</label>
// // //                 <input
// // //                   type="text"
// // //                   id="contactnumber"
// // //                   name="contactnumber"
// // //                   value={formData.contactnumber}
// // //                   onChange={handleChange}
// // //                   className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                   required
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="mt-6 flex items-center justify-center">
// // //               <button
// // //                 type="submit"
// // //                 className={`px-6 py-2 text-lg font-medium text-white bg-indigo-600 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? 'Submitting...' : 'Enroll Now'}
// // //               </button>
// // //             </div>

// // //             {error && <div className="mt-4 text-red-500">{error}</div>}
// // //             {success && <div className="mt-4 text-green-500">{success}</div>}
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RegistrationForm;




// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Navbar from './Navbar';

// const RegistrationForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     plantype: '',
//     name: '',
//     gender: '',
//     email: '',
//     phone: '',
//     age: '',
//     weight: '',
//     height: '',
//     bmi: '',
//     address: '',
//     city: '',
//     gymbefore: '',
//     password: '',
//     contactname: '',
//     relationship: '',
//     contactnumber: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   useEffect(() => {
//     if (location.state && location.state.selectedPlan) {
//       const { selectedPlan } = location.state;
//       setFormData((prevData) => ({
//         ...prevData,
//         plantype: selectedPlan
//       }));
//     }
//   }, [location.state]);

//   useEffect(() => {
//     calculateBMI();
//   }, [formData.weight, formData.height]);

//   const calculateBMI = () => {
//     const weight = parseFloat(formData.weight);
//     const height = parseFloat(formData.height);

//     if (weight && height) {
//       const heightInMeters = height / 100; 
//       const bmi = weight / (heightInMeters * heightInMeters);
//       setFormData((prevData) => ({
//         ...prevData,
//         bmi: bmi.toFixed(2)
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         bmi: ''
//       }));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     console.log('Submitting form data:', formData);

//     try {
//       const response = await fetch('http://localhost:8000/member', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log('Response status:', response.status);

//       const contentType = response.headers.get('Content-Type');
//       let responseBody;

//       if (contentType && contentType.includes('application/json')) {
//         responseBody = await response.json();
//       } else {
//         responseBody = await response.text();
//       }

//       if (!response.ok) {
//         throw new Error(responseBody.message || responseBody || 'Network response was not ok');
//       }

//       console.log('Success response:', responseBody);
//       setSuccess('Registration successful');

//       localStorage.setItem('userEmail', formData.email);

//       await Swal.fire({
//         title: 'Success!',
//         text: 'Registration successful. You will be redirected to the payment page.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });

//       navigate('/paymentpage');

//       setFormData({
//         plantype: '',
//         name: '',
//         gender: '',
//         email: '',
//         phone: '',
//         age: '',
//         weight: '',
//         height: '',
//         bmi: '',
//         address: '',
//         city: '',
//         gymbefore: '',
//         password: '',
//         contactname: '',
//         relationship: '',
//         contactnumber: ''
//       });
//     } catch (error) {
//       console.error('Registration Error:', error);
//       setError(error.message || 'Error during registration');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="w-full max-w-6xl bg-white text-gray-800 p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-6">Register for a Membership</h2>

//           {formData.plantype && (
//             <div className="bg-yellow-500 text-black p-4 rounded-lg mb-6">
//               <h3 className="text-xl font-bold">Selected Plan:</h3>
//               <p className="text-lg">{formData.plantype}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="flex flex-col">
//                 <label htmlFor="plantype" className="block text-sm font-medium mb-1">Plan Type</label>
//                 <input
//                   type="text"
//                   id="plantype"
//                   name="plantype"
//                   value={formData.plantype}
//                   readOnly
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
//                 <input
//                   type="text"
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
//                 <input
//                   type="number"
//                   id="age"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="weight" className="block text-sm font-medium mb-1">Weight (kg)</label>
//                 <input
//                   type="text"
//                   id="weight"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="height" className="block text-sm font-medium mb-1">Height (cm)</label>
//                 <input
//                   type="text"
//                   id="height"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="bmi" className="block text-sm font-medium mb-1">BMI</label>
//                 <input
//                   type="text"
//                   id="bmi"
//                   name="bmi"
//                   value={formData.bmi}
//                   readOnly
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="gymbefore" className="block text-sm font-medium mb-1">Have you been to the gym before?</label>
//                 <input
//                   type="text"
//                   id="gymbefore"
//                   name="gymbefore"
//                   value={formData.gymbefore}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="contactname" className="block text-sm font-medium mb-1">Emergency Contact Name</label>
//                 <input
//                   type="text"
//                   id="contactname"
//                   name="contactname"
//                   value={formData.contactname}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship to Contact</label>
//                 <input
//                   type="text"
//                   id="relationship"
//                   name="relationship"
//                   value={formData.relationship}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="contactnumber" className="block text-sm font-medium mb-1">Emergency Contact Number</label>
//                 <input
//                   type="text"
//                   id="contactnumber"
//                   name="contactnumber"
//                   value={formData.contactnumber}
//                   onChange={handleChange}
//                   className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex items-center justify-center">
//               <button
//                 type="submit"
//                 className={`px-6 py-2 text-lg font-medium text-white bg-indigo-600 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 disabled={loading}
//               >
//                 {loading ? 'Submitting...' : 'Enroll Now'}
//               </button>
//             </div>

//             {error && <div className="mt-4 text-red-500">{error}</div>}
//             {success && <div className="mt-4 text-green-500">{success}</div>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    plantype: '',
    name: '',
    gender: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    height: '',
    bmi: '',
    address: '',
    city: '',
    gymbefore: '',
    password: '',
    contactname: '',
    relationship: '',
    contactnumber: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (location.state && location.state.selectedPlan) {
      const { selectedPlan } = location.state;
      setFormData((prevData) => ({
        ...prevData,
        plantype: selectedPlan
      }));
    }
  }, [location.state]);

  useEffect(() => {
    calculateBMI();
  }, [formData.weight, formData.height]);

  const calculateBMI = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);

    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setFormData((prevData) => ({
        ...prevData,
        bmi: bmi.toFixed(2)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        bmi: ''
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    switch (name) {
      case 'name':
        fieldErrors.name = value ? '' : 'Name is required';
        break;
      case 'gender':
        fieldErrors.gender = value ? '' : 'Gender is required';
        break;
      case 'email':
        fieldErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
        break;
      case 'phone':
        fieldErrors.phone = /^\d{10}$/.test(value) ? '' : 'Phone number must be exactly 10 digits';
        break;
      case 'age':
        fieldErrors.age = value > 16 ? '' : 'Age must be above 16';
        break;
      case 'weight':
        fieldErrors.weight = value ? '' : 'Weight is required';
        break;
      case 'height':
        fieldErrors.height = value ? '' : 'Height is required';
        break;
      case 'address':
        fieldErrors.address = value ? '' : 'Address is required';
        break;
      case 'city':
        fieldErrors.city = value ? '' : 'City is required';
        break;
      case 'gymbefore':
        fieldErrors.gymbefore = value ? '' : 'Please select gym experience';
        break;
      case 'password':
        const passwordRegex = /^(?=.*[A-Z])(?=.*[@])(?=.*[0-9]).{5,}$/;
        fieldErrors.password = passwordRegex.test(value) ? '' : 'Password must be at least 5 characters long, include one uppercase letter, one number, and one "@"';
        break;
      case 'contactname':
        fieldErrors.contactname = value ? '' : 'Emergency contact name is required';
        break;
      case 'relationship':
        fieldErrors.relationship = value ? '' : 'Relationship to contact is required';
        break;
      case 'contactnumber':
        fieldErrors.contactnumber = /^\d{10}$/.test(value) ? '' : 'Contact number must be exactly 10 digits';
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    // Validate all fields one last time
    for (const field in formData) {
      validateField(field, formData[field]);
    }

    if (Object.values(errors).some(error => error)) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSuccess('Registration successful');
      localStorage.setItem('userEmail', formData.email);

      await Swal.fire({
        title: 'Success!',
        text: 'Registration successful. You will be redirected to the payment page.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      navigate('/paymentpage');
      setFormData({
        plantype: '',
        name: '',
        gender: '',
        email: '',
        phone: '',
        age: '',
        weight: '',
        height: '',
        bmi: '',
        address: '',
        city: '',
        gymbefore: '',
        password: '',
        contactname: '',
        relationship: '',
        contactnumber: ''
      });
    } catch (error) {
      console.error('Registration Error:', error);
      setErrors((prevErrors) => ({ ...prevErrors, submit: 'Error during registration' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-6xl bg-white text-black p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Register for a Membership</h2>

          {formData.plantype && (
            <div className="bg-yellow-500 text-black p-4 rounded-lg mb-6">
              <h3 className="text-xl font-bold">Selected Plan:</h3>
              <p className="text-lg">{formData.plantype}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="plantype" className="block text-sm font-medium mb-1">Plan Type</label>
                <input
                  type="text"
                  id="plantype"
                  name="plantype"
                  value={formData.plantype}
                  readOnly
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-black placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black`}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className={`px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="weight" className="block text-sm font-medium mb-1">Weight (kg)</label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.weight ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.weight && <span className="text-red-500 text-sm">{errors.weight}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="height" className="block text-sm font-medium mb-1">Height (cm)</label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.height ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.height && <span className="text-red-500 text-sm">{errors.height}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="bmi" className="block text-sm font-medium mb-1">BMI</label>
                <input
                  type="text"
                  id="bmi"
                  name="bmi"
                  value={formData.bmi}
                  readOnly
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-black placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="gymbefore" className="block text-sm font-medium mb-1">Have you been to the gym before?</label>
                <select
                  id="gymbefore"
                  name="gymbefore"
                  value={formData.gymbefore}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.gymbefore ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black`}
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.gymbefore && <span className="text-red-500 text-sm">{errors.gymbefore}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="contactname" className="block text-sm font-medium mb-1">Emergency Contact Name</label>
                <input
                  type="text"
                  id="contactname"
                  name="contactname"
                  value={formData.contactname}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.contactname ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.contactname && <span className="text-red-500 text-sm">{errors.contactname}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship to Contact</label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${errors.relationship ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.relationship && <span className="text-red-500 text-sm">{errors.relationship}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="contactnumber" className="block text-sm font-medium mb-1">Emergency Contact Number</label>
                <input
                  type="text"
                  id="contactnumber"
                  name="contactnumber"
                  value={formData.contactnumber}
                  onChange={handleChange}
                  maxLength={10}
                  className={`px-3 py-2 border ${errors.contactnumber ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-100 text-black placeholder-gray-500`}
                  required
                />
                {errors.contactnumber && <span className="text-red-500 text-sm">{errors.contactnumber}</span>}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <button
                type="submit"
                className={`px-6 py-2 text-lg font-medium text-white bg-indigo-600 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Enroll Now'}
              </button>
            </div>

            {errors.submit && <div className="mt-4 text-red-500">{errors.submit}</div>}
            {success && <div className="mt-4 text-green-500">{success}</div>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;

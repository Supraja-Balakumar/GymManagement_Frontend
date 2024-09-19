// // import React, { useState, useEffect } from 'react';
// // import Swal from 'sweetalert2';
// // import { useNavigate } from 'react-router-dom';
// // import Navbar from './Navbar';

// // const PaymentPage = () => {
// //   const [paymentMethod, setPaymentMethod] = useState('creditCard');
// //   const [formData, setFormData] = useState({
// //     cardNumber: '',
// //     cardName: '',
// //     cardExpiration: '',
// //     cvv: '',
// //     upiId: ''
// //   });
// //   const [totalAmount, setTotalAmount] = useState(0);
// //   const [currentDate, setCurrentDate] = useState('');
// //   const [formErrors, setFormErrors] = useState({});
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Set current date
// //     const today = new Date().toISOString().split('T')[0];
// //     setCurrentDate(today);

// //     // Fetch the total amount from the pricelist or an API
// //     fetchTotalAmount();
// //   }, []);

// //   const fetchTotalAmount = async () => {
// //     // Mock fetching total amount from an API or state
// //     // Replace this with actual API call or state management
// //     const mockAmount = 7191.00; // Example amount
// //     setTotalAmount(mockAmount);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     let errors = { ...formErrors };

// //     switch (name) {
// //       case 'cardNumber':
// //         errors.cardNumber = value.length === 0 ? 'Card number is required' : '';
// //         break;
// //       case 'cardName':
// //         errors.cardName = value.length === 0 ? 'Card name is required' : '';
// //         break;
// //       case 'cardExpiration':
// //         errors.cardExpiration = value.length === 0 ? 'Card expiration is required' : '';
// //         break;
// //       case 'cvv':
// //         errors.cvv = value.length === 0 ? 'CVV is required' : '';
// //         break;
// //       case 'upiId':
// //         errors.upiId = value.length === 0 ? 'UPI ID is required' : '';
// //         break;
// //       default:
// //         break;
// //     }

// //     setFormErrors(errors);
// //   };

// //   const validateForm = () => {
// //     let errors = {};
// //     if (paymentMethod === 'creditCard') {
// //       errors.cardNumber = formData.cardNumber.length === 0 ? 'Card number is required' : '';
// //       errors.cardName = formData.cardName.length === 0 ? 'Card name is required' : '';
// //       errors.cardExpiration = formData.cardExpiration.length === 0 ? 'Card expiration is required' : '';
// //       errors.cvv = formData.cvv.length === 0 ? 'CVV is required' : '';
// //     } else {
// //       errors.upiId = formData.upiId.length === 0 ? 'UPI ID is required' : '';
// //     }

// //     setFormErrors(errors);
// //     return Object.keys(errors).every(key => errors[key] === '');
// //   };

// //   const handlePayment = async () => {
// //     if (!validateForm()) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: 'Please fill in all required fields.',
// //         icon: 'error',
// //         confirmButtonText: 'OK'
// //       });
// //       return;
// //     }

// //     try {
// //       // Store payment details in backend
// //       const paymentDetails = {
// //         paymentType: paymentMethod,
// //         date: currentDate,
// //         amount: totalAmount
// //       };

// //       const response = await fetch('http://localhost:8000/payment', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(paymentDetails),
// //       });

// //       const contentType = response.headers.get('Content-Type');
// //       let responseBody;

// //       if (contentType && contentType.includes('application/json')) {
// //         responseBody = await response.json();
// //       } else {
// //         responseBody = await response.text();
// //       }

// //       if (!response.ok) {
// //         // Detailed error logging
// //         console.error('Response status:', response.status);
// //         console.error('Response body:', responseBody);
// //         throw new Error(responseBody.message || responseBody || 'Network response was not ok');
// //       }

// //       // Show success message and redirect
// //       const result = await Swal.fire({
// //         title: 'Success!',
// //         text: `Paid successfully via ${paymentMethod.replace(/([A-Z])/g, ' $1').trim()}!`,
// //         icon: 'success',
// //         confirmButtonText: 'OK'
// //       });

// //       if (result.isConfirmed) {
// //         navigate('/memberpage');
// //       }

// //     } catch (error) {
// //       console.error('Payment Error:', error);
// //       await Swal.fire({
// //         title: 'Error!',
// //         text: `An error occurred: ${error.message}`,
// //         icon: 'error',
// //         confirmButtonText: 'OK'
// //       });
// //     }
// //   };

// //   const isFormValid = () => {
// //     return paymentMethod === 'creditCard'
// //       ? formData.cardNumber && formData.cardName && formData.cardExpiration && formData.cvv
// //       : formData.upiId;
// //   };

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
// //         <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// //           <h2 className="text-2xl font-semibold mb-4">Payment</h2>
// //           <form className="space-y-4">
// //             {/* Payment Method Selection */}
// //             <div className="mb-4">
// //               <p className="text-sm font-medium">Select Payment Method</p>
// //               <div className="mt-2 space-y-2">
// //                 <label className="flex items-center">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="creditCard"
// //                     checked={paymentMethod === 'creditCard'}
// //                     onChange={() => setPaymentMethod('creditCard')}
// //                     className="form-radio"
// //                   />
// //                   <span className="ml-2">Credit/Debit Card</span>
// //                 </label>
// //                 <label className="flex items-center">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="googlePay"
// //                     checked={paymentMethod === 'googlePay'}
// //                     onChange={() => setPaymentMethod('googlePay')}
// //                     className="form-radio"
// //                   />
// //                   <span className="ml-2">Google Pay</span>
// //                 </label>
// //                 <label className="flex items-center">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="phonePe"
// //                     checked={paymentMethod === 'phonePe'}
// //                     onChange={() => setPaymentMethod('phonePe')}
// //                     className="form-radio"
// //                   />
// //                   <span className="ml-2">PhonePe</span>
// //                 </label>
// //               </div>
// //             </div>

// //             {/* Conditional Form Fields */}
// //             {paymentMethod === 'creditCard' && (
// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium">Full Name (as displayed on card)</label>
// //                   <input
// //                     type="text"
// //                     name="cardName"
// //                     value={formData.cardName}
// //                     onChange={handleChange}
// //                     className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                     required
// //                   />
// //                   {formErrors.cardName && <p className="text-red-500 text-xs mt-1">{formErrors.cardName}</p>}
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium">Card Number</label>
// //                   <input
// //                     type="text"
// //                     name="cardNumber"
// //                     value={formData.cardNumber}
// //                     onChange={handleChange}
// //                     className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                     required
// //                   />
// //                   {formErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>}
// //                 </div>
// //                 <div className="flex space-x-4">
// //                   <div>
// //                     <label className="block text-sm font-medium">Card Expiration</label>
// //                     <input
// //                       type="text"
// //                       name="cardExpiration"
// //                       value={formData.cardExpiration}
// //                       onChange={handleChange}
// //                       className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                       placeholder="MM/YY"
// //                       required
// //                     />
// //                     {formErrors.cardExpiration && <p className="text-red-500 text-xs mt-1">{formErrors.cardExpiration}</p>}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium">CVV</label>
// //                     <input
// //                       type="password"
// //                       name="cvv"
// //                       value={formData.cvv}
// //                       onChange={handleChange}
// //                       className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                       required
// //                     />
// //                     {formErrors.cvv && <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {paymentMethod === 'googlePay' && (
// //               <div>
// //                 <label className="block text-sm font-medium">Google Pay UPI ID</label>
// //                 <input
// //                   type="text"
// //                   name="upiId"
// //                   value={formData.upiId}
// //                   onChange={handleChange}
// //                   className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                   placeholder="example@upi"
// //                   required
// //                 />
// //                 {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
// //               </div>
// //             )}

// //             {paymentMethod === 'phonePe' && (
// //               <div>
// //                 <label className="block text-sm font-medium">PhonePe UPI ID</label>
// //                 <input
// //                   type="text"
// //                   name="upiId"
// //                   value={formData.upiId}
// //                   onChange={handleChange}
// //                   className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                   placeholder="example@upi"
// //                   required
// //                 />
// //                 {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
// //               </div>
// //             )}

// //             {/* Payment Details */}
// //             <div className="text-right mt-4">
// //               <p className="font-semibold">Total: ${totalAmount.toFixed(2)}</p>
// //               <p className="text-gray-600">Date: {currentDate}</p>
// //             </div>

// //             <button
// //               type="button"
// //               className={`w-full py-2 rounded mt-4 ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed opacity-50'}`}
// //               onClick={handlePayment}
// //               disabled={!isFormValid()}
// //             >
// //               Pay Now
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentPage;


// // import React, { useState, useEffect } from 'react';
// // import Swal from 'sweetalert2';
// // import { useNavigate } from 'react-router-dom';
// // import Navbar from './Navbar';

// // const PaymentPage = () => {
// //   const [paymentMethod, setPaymentMethod] = useState('creditCard');
// //   const [formData, setFormData] = useState({
// //     cardNumber: '',
// //     cardName: '',
// //     cardExpiration: '',
// //     cvv: '',
// //     upiId: ''
// //   });
// //   const [totalAmount, setTotalAmount] = useState(0);
// //   const [currentDate, setCurrentDate] = useState('');
// //   const [formErrors, setFormErrors] = useState({});
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Set current date
// //     const today = new Date().toISOString().split('T')[0];
// //     setCurrentDate(today);

// //     // Fetch the total amount from the pricelist or an API
// //     fetchTotalAmount();
// //   }, []);

// //   const fetchTotalAmount = async () => {
// //     // Mock fetching total amount from an API or state
// //     // Replace this with actual API call or state management
// //     const mockAmount = 7191.00; // Example amount
// //     setTotalAmount(mockAmount);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     validateField(name, value);
// //   };

// //   const validateField = (name, value) => {
// //     let errors = { ...formErrors };

// //     switch (name) {
// //       case 'cardNumber':
// //         errors.cardNumber = value.length === 0 ? 'Card number is required' : '';
// //         break;
// //       case 'cardName':
// //         errors.cardName = value.length === 0 ? 'Card name is required' : '';
// //         break;
// //       case 'cardExpiration':
// //         errors.cardExpiration = value.length === 0 ? 'Card expiration is required' : '';
// //         break;
// //       case 'cvv':
// //         errors.cvv = value.length === 0 ? 'CVV is required' : '';
// //         break;
// //       case 'upiId':
// //         errors.upiId = value.length === 0 ? 'UPI ID is required' : '';
// //         break;
// //       default:
// //         break;
// //     }

// //     setFormErrors(errors);
// //   };

// //   const validateForm = () => {
// //     let errors = {};
// //     if (paymentMethod === 'creditCard') {
// //       errors.cardNumber = formData.cardNumber.length === 0 ? 'Card number is required' : '';
// //       errors.cardName = formData.cardName.length === 0 ? 'Card name is required' : '';
// //       errors.cardExpiration = formData.cardExpiration.length === 0 ? 'Card expiration is required' : '';
// //       errors.cvv = formData.cvv.length === 0 ? 'CVV is required' : '';
// //     } else {
// //       errors.upiId = formData.upiId.length === 0 ? 'UPI ID is required' : '';
// //     }

// //     setFormErrors(errors);
// //     return Object.keys(errors).every(key => errors[key] === '');
// //   };

// //   const handlePayment = async () => {
// //     if (!validateForm()) {
// //       Swal.fire({
// //         title: 'Error!',
// //         text: 'Please fill in all required fields.',
// //         icon: 'error',
// //         confirmButtonText: 'OK'
// //       });
// //       return;
// //     }

// //     try {
// //       // Store payment details in backend
// //       const paymentDetails = {
// //         paymentType: paymentMethod,
// //         date: currentDate,
// //         amount: totalAmount
// //       };

// //       const response = await fetch('http://localhost:8000/payment', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(paymentDetails),
// //       });

// //       const contentType = response.headers.get('Content-Type');
// //       let responseBody;

// //       if (contentType && contentType.includes('application/json')) {
// //         responseBody = await response.json();
// //       } else {
// //         responseBody = await response.text();
// //       }

// //       if (!response.ok) {
// //         // Detailed error logging
// //         console.error('Response status:', response.status);
// //         console.error('Response body:', responseBody);
// //         throw new Error(responseBody.message || responseBody || 'Network response was not ok');
// //       }

// //       // Show success message and redirect
// //       const result = await Swal.fire({
// //         title: 'Success!',
// //         text: `Paid successfully via ${paymentMethod.replace(/([A-Z])/g, ' $1').trim()}!`,
// //         icon: 'success',
// //         confirmButtonText: 'OK'
// //       });

// //       if (result.isConfirmed) {
// //         // Navigate to login page after successful payment
// //         navigate('/loginmember'); // Redirect to the login page for members
// //       }

// //     } catch (error) {
// //       console.error('Payment Error:', error);
// //       await Swal.fire({
// //         title: 'Error!',
// //         text: `An error occurred: ${error.message}`,
// //         icon: 'error',
// //         confirmButtonText: 'OK'
// //       });
// //     }
// //   };

// //   const isFormValid = () => {
// //     return paymentMethod === 'creditCard'
// //       ? formData.cardNumber && formData.cardName && formData.cardExpiration && formData.cvv
// //       : formData.upiId;
// //   };

  
// //   return (
// //     <div>
// //       <Navbar />
      
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        
// //         <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// //           <h2 className="text-2xl font-semibold mb-4">Payment</h2>
// //           <form className="space-y-4">
// //             {/* Payment Method Selection */}
// //             <div className="mb-4">
// //               <p className="text-sm font-medium">Select Payment Method</p>
// //               <div className="mt-2 space-y-2">
// //                 <label className="flex items-center">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="creditCard"
// //                     checked={paymentMethod === 'creditCard'}
// //                     onChange={() => setPaymentMethod('creditCard')}
// //                     className="form-radio"
// //                   />
// //                   <span className="ml-2">Credit/Debit Card</span>
// //                 </label>
// //                 <label className="flex items-center">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="googlePay"
// //                     checked={paymentMethod === 'googlePay'}
// //                     onChange={() => setPaymentMethod('googlePay')}
// //                     className="form-radio"
// //                   />
// //                   <span className="ml-2">Google Pay</span>
// //                 </label>
// //                 <label className="flex items-center">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="phonePe"
// //                     checked={paymentMethod === 'phonePe'}
// //                     onChange={() => setPaymentMethod('phonePe')}
// //                     className="form-radio"
// //                   />
// //                   <span className="ml-2">PhonePe</span>
// //                 </label>
// //               </div>
// //             </div>

// //             {/* Conditional Form Fields */}
// //             {paymentMethod === 'creditCard' && (
// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium">Full Name (as displayed on card)</label>
// //                   <input
// //                     type="text"
// //                     name="cardName"
// //                     value={formData.cardName}
// //                     onChange={handleChange}
// //                     className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                     required
// //                   />
// //                   {formErrors.cardName && <p className="text-red-500 text-xs mt-1">{formErrors.cardName}</p>}
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium">Card Number</label>
// //                   <input
// //                     type="text"
// //                     name="cardNumber"
// //                     value={formData.cardNumber}
// //                     onChange={handleChange}
// //                     className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                     required
// //                   />
// //                   {formErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>}
// //                 </div>
// //                 <div className="flex space-x-4">
// //                   <div>
// //                     <label className="block text-sm font-medium">Card Expiration</label>
// //                     <input
// //                       type="text"
// //                       name="cardExpiration"
// //                       value={formData.cardExpiration}
// //                       onChange={handleChange}
// //                       className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                       placeholder="MM/YY"
// //                       required
// //                     />
// //                     {formErrors.cardExpiration && <p className="text-red-500 text-xs mt-1">{formErrors.cardExpiration}</p>}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium">CVV</label>
// //                     <input
// //                       type="password"
// //                       name="cvv"
// //                       value={formData.cvv}
// //                       onChange={handleChange}
// //                       className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                       required
// //                     />
// //                     {formErrors.cvv && <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {paymentMethod === 'googlePay' && (
// //               <div>
// //                 <label className="block text-sm font-medium">Google Pay UPI ID</label>
// //                 <input
// //                   type="text"
// //                   name="upiId"
// //                   value={formData.upiId}
// //                   onChange={handleChange}
// //                   className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                   placeholder="example@upi"
// //                   required
// //                 />
// //                 {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
// //               </div>
// //             )}

// //             {paymentMethod === 'phonePe' && (
// //               <div>
// //                 <label className="block text-sm font-medium">PhonePe UPI ID</label>
// //                 <input
// //                   type="text"
// //                   name="upiId"
// //                   value={formData.upiId}
// //                   onChange={handleChange}
// //                   className="mt-1 block w-full p-2 border border-gray-300 rounded"
// //                   placeholder="example@upi"
// //                   required
// //                 />
// //                 {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
// //               </div>
// //             )}

// //             {/* Payment Details */}
// //             <div className="text-right mt-4">
// //               <p className="font-semibold">Total: ${totalAmount.toFixed(2)}</p>
// //               <p className="text-gray-600">Date: {currentDate}</p>
// //             </div>

// //             <button
// //               type="button"
// //               className={`w-full py-2 rounded mt-4 ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed opacity-50'}`}
// //               onClick={handlePayment}
// //               disabled={!isFormValid()}
// //             >
// //               Pay Now
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentPage;


// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const PaymentPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState('creditCard');
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     cardName: '',
//     cardExpiration: '',
//     cvv: '',
//     upiId: ''
//   });
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [currentDate, setCurrentDate] = useState('');
//   const [plan, setPlan] = useState('3months'); // Default plan
//   const [formErrors, setFormErrors] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Set current date
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);

//     // Update total amount based on selected plan
//     updateTotalAmount(plan);
//   }, [plan]);

//   const updateTotalAmount = (selectedPlan) => {
//     let amount = 0;
//     switch (selectedPlan) {
//       case '3months':
//         amount = 6600;
//         break;
//       case '6months':
//         amount = 14000;
//         break;
//       case '1year':
//         amount = 20000;
//         break;
//       default:
//         break;
//     }
//     setTotalAmount(amount);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     let errors = { ...formErrors };

//     switch (name) {
//       case 'cardNumber':
//         errors.cardNumber = value.length === 0 ? 'Card number is required' : '';
//         break;
//       case 'cardName':
//         errors.cardName = value.length === 0 ? 'Card name is required' : '';
//         break;
//       case 'cardExpiration':
//         errors.cardExpiration = value.length === 0 ? 'Card expiration is required' : '';
//         break;
//       case 'cvv':
//         errors.cvv = value.length === 0 ? 'CVV is required' : '';
//         break;
//       case 'upiId':
//         errors.upiId = value.length === 0 ? 'UPI ID is required' : '';
//         break;
//       default:
//         break;
//     }

//     setFormErrors(errors);
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (paymentMethod === 'creditCard') {
//       errors.cardNumber = formData.cardNumber.length === 0 ? 'Card number is required' : '';
//       errors.cardName = formData.cardName.length === 0 ? 'Card name is required' : '';
//       errors.cardExpiration = formData.cardExpiration.length === 0 ? 'Card expiration is required' : '';
//       errors.cvv = formData.cvv.length === 0 ? 'CVV is required' : '';
//     } else {
//       errors.upiId = formData.upiId.length === 0 ? 'UPI ID is required' : '';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).every(key => errors[key] === '');
//   };

//   const handlePayment = async () => {
//     if (!validateForm()) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Please fill in all required fields.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//       return;
//     }

//     try {
//       // Store payment details in backend
//       const paymentDetails = {
//         paymentType: paymentMethod,
//         date: currentDate,
//         amount: totalAmount
//       };

//       const response = await fetch('http://localhost:8000/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentDetails),
//       });

//       const contentType = response.headers.get('Content-Type');
//       let responseBody;

//       if (contentType && contentType.includes('application/json')) {
//         responseBody = await response.json();
//       } else {
//         responseBody = await response.text();
//       }

//       if (!response.ok) {
//         // Detailed error logging
//         console.error('Response status:', response.status);
//         console.error('Response body:', responseBody);
//         throw new Error(responseBody.message || responseBody || 'Network response was not ok');
//       }

//       // Show success message and redirect
//       const result = await Swal.fire({
//         title: 'Success!',
//         text: `Paid successfully via ${paymentMethod.replace(/([A-Z])/g, ' $1').trim()}!`,
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });

//       if (result.isConfirmed) {
//         // Navigate to login page after successful payment
//         navigate('/loginmember'); // Redirect to the login page for members
//       }

//     } catch (error) {
//       console.error('Payment Error:', error);
//       await Swal.fire({
//         title: 'Error!',
//         text: `An error occurred: ${error.message}`,
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   const isFormValid = () => {
//     return paymentMethod === 'creditCard'
//       ? formData.cardNumber && formData.cardName && formData.cardExpiration && formData.cvv
//       : formData.upiId;
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//         <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-semibold mb-4">Payment</h2>
//           <form className="space-y-4">
//             {/* Plan Selection */}
//             <div className="mb-4">
//               <p className="text-sm font-medium">Select Plan</p>
//               <div className="mt-2 space-y-2">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="plan"
//                     value="3months"
//                     checked={plan === '3months'}
//                     onChange={(e) => setPlan(e.target.value)}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">3 Months - Rs. 6600</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="plan"
//                     value="6months"
//                     checked={plan === '6months'}
//                     onChange={(e) => setPlan(e.target.value)}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">6 Months - Rs. 14000</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="plan"
//                     value="1year"
//                     checked={plan === '1year'}
//                     onChange={(e) => setPlan(e.target.value)}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">1 Year - Rs. 20000</span>
//                 </label>
//               </div>
//             </div>

//             {/* Payment Method Selection */}
//             <div className="mb-4">
//               <p className="text-sm font-medium">Select Payment Method</p>
//               <div className="mt-2 space-y-2">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="creditCard"
//                     checked={paymentMethod === 'creditCard'}
//                     onChange={() => setPaymentMethod('creditCard')}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Credit/Debit Card</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="googlePay"
//                     checked={paymentMethod === 'googlePay'}
//                     onChange={() => setPaymentMethod('googlePay')}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">Google Pay</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="phonePe"
//                     checked={paymentMethod === 'phonePe'}
//                     onChange={() => setPaymentMethod('phonePe')}
//                     className="form-radio"
//                   />
//                   <span className="ml-2">PhonePe</span>
//                 </label>
//               </div>
//             </div>

//             {/* Conditional Form Fields */}
//             {paymentMethod === 'creditCard' && (
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium">Full Name (as displayed on card)</label>
//                   <input
//                     type="text"
//                     name="cardName"
//                     value={formData.cardName}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                     required
//                   />
//                   {formErrors.cardName && <p className="text-red-500 text-xs mt-1">{formErrors.cardName}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium">Card Number</label>
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={formData.cardNumber}
//                     onChange={handleChange}
//                     className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                     required
//                   />
//                   {formErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>}
//                 </div>
//                 <div className="flex space-x-4">
//                   <div>
//                     <label className="block text-sm font-medium">Card Expiration</label>
//                     <input
//                       type="text"
//                       name="cardExpiration"
//                       value={formData.cardExpiration}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                       placeholder="MM/YY"
//                       required
//                     />
//                     {formErrors.cardExpiration && <p className="text-red-500 text-xs mt-1">{formErrors.cardExpiration}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium">CVV</label>
//                     <input
//                       type="password"
//                       name="cvv"
//                       value={formData.cvv}
//                       onChange={handleChange}
//                       className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                       required
//                     />
//                     {formErrors.cvv && <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {paymentMethod === 'googlePay' && (
//               <div>
//                 <label className="block text-sm font-medium">Google Pay UPI ID</label>
//                 <input
//                   type="text"
//                   name="upiId"
//                   value={formData.upiId}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                   placeholder="example@upi"
//                   required
//                 />
//                 {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
//               </div>
//             )}

//             {paymentMethod === 'phonePe' && (
//               <div>
//                 <label className="block text-sm font-medium">PhonePe UPI ID</label>
//                 <input
//                   type="text"
//                   name="upiId"
//                   value={formData.upiId}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded"
//                   placeholder="example@upi"
//                   required
//                 />
//                 {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
//               </div>
//             )}

//             {/* Payment Details */}
//             <div className="text-right mt-4">
//               <p className="font-semibold">Total: Rs. {totalAmount.toFixed(2)}</p>
//               <p className="text-gray-600">Date: {currentDate}</p>
//             </div>

//             <button
//               type="button"
//               className={`w-full py-2 rounded mt-4 ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed opacity-50'}`}
//               onClick={handlePayment}
//               disabled={!isFormValid()}
//             >
//               Pay Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;



import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    cardExpiration: '',
    cvv: '',
    upiId: ''
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [plan, setPlan] = useState('3months'); // Default plan
  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Set current date
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);

    // Update total amount based on selected plan
    updateTotalAmount(plan);

    // Retrieve email from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, [plan]);

  const updateTotalAmount = (selectedPlan) => {
    let amount = 0;
    switch (selectedPlan) {
      case '3months':
        amount = 6600;
        break;
      case '6months':
        amount = 14000;
        break;
      case '1year':
        amount = 20000;
        break;
      default:
        break;
    }
    setTotalAmount(amount);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case 'cardNumber':
        errors.cardNumber = value.length === 0 ? 'Card number is required' : '';
        break;
      case 'cardName':
        errors.cardName = value.length === 0 ? 'Card name is required' : '';
        break;
      case 'cardExpiration':
        errors.cardExpiration = value.length === 0 ? 'Card expiration is required' : '';
        break;
      case 'cvv':
        errors.cvv = value.length === 0 ? 'CVV is required' : '';
        break;
      case 'upiId':
        errors.upiId = value.length === 0 ? 'UPI ID is required' : '';
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const validateForm = () => {
    let errors = {};
    if (paymentMethod === 'creditCard') {
      errors.cardNumber = formData.cardNumber.length === 0 ? 'Card number is required' : '';
      errors.cardName = formData.cardName.length === 0 ? 'Card name is required' : '';
      errors.cardExpiration = formData.cardExpiration.length === 0 ? 'Card expiration is required' : '';
      errors.cvv = formData.cvv.length === 0 ? 'CVV is required' : '';
    } else {
      errors.upiId = formData.upiId.length === 0 ? 'UPI ID is required' : '';
    }

    setFormErrors(errors);
    return Object.keys(errors).every(key => errors[key] === '');
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      // Store payment details in backend
      const paymentDetails = {
        email, // Add email to payment details
        paymentType: paymentMethod,
        date: currentDate,
        amount: totalAmount
      };

      const response = await fetch('http://localhost:8000/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      const contentType = response.headers.get('Content-Type');
      let responseBody;

      if (contentType && contentType.includes('application/json')) {
        responseBody = await response.json();
      } else {
        responseBody = await response.text();
      }

      if (!response.ok) {
        // Detailed error logging
        console.error('Response status:', response.status);
        console.error('Response body:', responseBody);
        throw new Error(responseBody.message || responseBody || 'Network response was not ok');
      }

      // Show success message and redirect
      const result = await Swal.fire({
        title: 'Success!',
        text: `Paid successfully via ${paymentMethod.replace(/([A-Z])/g, ' $1').trim()}!`,
        icon: 'success',
        confirmButtonText: 'OK'
      });

      if (result.isConfirmed) {
        // Navigate to login page after successful payment
        navigate('/loginmember'); // Redirect to the login page for members
      }

    } catch (error) {
      console.error('Payment Error:', error);
      await Swal.fire({
        title: 'Error!',
        text: `An error occurred: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const isFormValid = () => {
    return paymentMethod === 'creditCard'
      ? formData.cardNumber && formData.cardName && formData.cardExpiration && formData.cvv
      : formData.upiId;
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <form className="space-y-4">
            {/* Plan Selection */}
            <div className="mb-4">
              <p className="text-sm font-medium">Select Plan</p>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="plan"
                    value="3months"
                    checked={plan === '3months'}
                    onChange={(e) => setPlan(e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">3 Months - Rs. 6600</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="plan"
                    value="6months"
                    checked={plan === '6months'}
                    onChange={(e) => setPlan(e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">6 Months - Rs. 14000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="plan"
                    value="1year"
                    checked={plan === '1year'}
                    onChange={(e) => setPlan(e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">1 Year - Rs. 20000</span>
                </label>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-4">
              <p className="text-sm font-medium">Select Payment Method</p>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={() => setPaymentMethod('creditCard')}
                    className="form-radio"
                  />
                  <span className="ml-2">Credit/Debit Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="googlePay"
                    checked={paymentMethod === 'googlePay'}
                    onChange={() => setPaymentMethod('googlePay')}
                    className="form-radio"
                  />
                  <span className="ml-2">Google Pay</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="phonePe"
                    checked={paymentMethod === 'phonePe'}
                    onChange={() => setPaymentMethod('phonePe')}
                    className="form-radio"
                  />
                  <span className="ml-2">PhonePe</span>
                </label>
              </div>
            </div>

            {/* Conditional Form Fields */}
            {paymentMethod === 'creditCard' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Full Name (as displayed on card)</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {formErrors.cardName && <p className="text-red-500 text-xs mt-1">{formErrors.cardName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                  />
                  {formErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>}
                </div>
                <div className="flex space-x-4">
                  <div>
                    <label className="block text-sm font-medium">Card Expiration</label>
                    <input
                      type="text"
                      name="cardExpiration"
                      value={formData.cardExpiration}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      placeholder="MM/YY"
                      required
                    />
                    {formErrors.cardExpiration && <p className="text-red-500 text-xs mt-1">{formErrors.cardExpiration}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">CVV</label>
                    <input
                      type="password"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      required
                    />
                    {formErrors.cvv && <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>}
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'googlePay' && (
              <div>
                <label className="block text-sm font-medium">Google Pay UPI ID</label>
                <input
                  type="text"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="example@upi"
                  required
                />
                {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
              </div>
            )}

            {paymentMethod === 'phonePe' && (
              <div>
                <label className="block text-sm font-medium">PhonePe UPI ID</label>
                <input
                  type="text"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="example@upi"
                  required
                />
                {formErrors.upiId && <p className="text-red-500 text-xs mt-1">{formErrors.upiId}</p>}
              </div>
            )}

            {/* Payment Details */}
            <div className="text-right mt-4">
              <p className="font-semibold">Total: Rs. {totalAmount.toFixed(2)}</p>
              <p className="text-gray-600">Date: {currentDate}</p>
            </div>

            <button
              type="button"
              className={`w-full py-2 rounded mt-4 ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed opacity-50'}`}
              onClick={handlePayment}
              disabled={!isFormValid()}
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

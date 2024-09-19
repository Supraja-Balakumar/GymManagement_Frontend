// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function MemberLogin() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async (event) => {
//     event.preventDefault();
    
//     const apiEndpoint = 'http://localhost:8000/member/login'; // Endpoint for member login
    
//     try {
//       const response = await fetch(apiEndpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('API Response:', data); // Log the response for debugging
        
//         if (data && data.memberid) {
//           sessionStorage.setItem('memberid', data.memberid); // Store member ID
//           navigate('/memberpage'); // Navigate to member page
//         } else {
//           console.error('Invalid response structure:', data);
//         }
//       } else {
//         console.error('Login failed with status:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="font-[sans-serif]">
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-lg rounded-md bg-white">
//           <div className="md:max-w-md w-full px-4 py-4">
//             <form onSubmit={handleSignIn}>
//               <div className="mb-12">
//                 <h3 className="text-gray-800 text-3xl font-extrabold">Member Login</h3>
//               </div>

//               <div className="mb-6">
//                 <label className="text-gray-800 text-xs block mb-2">Email</label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
//                     placeholder="Enter email"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="text-gray-800 text-xs block mb-2">Password</label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
//                     placeholder="Enter password"
//                   />
//                 </div>
//               </div>

//               <div className="mt-12">
//                 <button
//                   type="submit"
//                   className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//                 >
//                   Login
//                 </button>
//               </div>

//               <div className="space-x-6 flex justify-center mt-6">
//                 {/* Add social login buttons if needed */}
//               </div>
//             </form>
//           </div>

//           <div className="md:h-full bg-blue-900 rounded-xl lg:p-12 p-8">
//             <img src="https://readymadeui.com/signin-image.webp" className="w-full h-full object-cover" alt="login-image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberLogin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MemberLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@]).{5,}$/;
    return passwordRegex.test(password);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 5 characters long, contain at least one uppercase letter, one number, and one "@" symbol.');
      return;
    }

    const apiEndpoint = 'http://localhost:8000/member/login'; // Endpoint for member login
    
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data); // Log the response for debugging
        
        if (data && data.memberid) {
          sessionStorage.setItem('memberid', data.memberid); // Store member ID
          navigate('/memberpage'); // Navigate to member page
        } else {
          console.error('Invalid response structure:', data);
          setError('Login failed. Please try again.');
        }
      } else {
        console.error('Login failed with status:', response.status);
        setError('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-lg rounded-md bg-white">
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSignIn}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Member Login</h3>
                {error && <p className="text-red-500 text-sm">{error}</p>} {/* Error message display */}
              </div>

              <div className="mb-6">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Login
                </button>
              </div>

              <div className="space-x-6 flex justify-center mt-6">
                {/* Add social login buttons if needed */}
              </div>
            </form>
          </div>

          <div className="md:h-full bg-blue-900 rounded-xl lg:p-12 p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="w-full h-full object-cover" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberLogin;

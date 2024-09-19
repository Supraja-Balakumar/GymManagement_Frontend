// import React, { useEffect, useState } from 'react';

// const ProfileModal = ({ onClose }) => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       setError(null); // Reset error state before fetching
//       const memberId = sessionStorage.getItem('memberId');

//       if (!memberId) {
//         setError('No member ID found in session storage.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`http://localhost:8000/members/${memberId}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch profile.');
//         }
        
//         const data = await response.json();
//         setProfile(data);
//       } catch (error) {
//         console.error('An error occurred:', error);
//         setError(error.message || 'An error occurred while fetching profile.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!profile) {
//     return <div>Profile not found</div>;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-4">Member Details</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Name</label>
//           <p className="text-gray-800">{profile.name}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Gender</label>
//           <p className="text-gray-800">{profile.gender}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Email</label>
//           <p className="text-gray-800">{profile.email}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Phone</label>
//           <p className="text-gray-800">{profile.phone}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Age</label>
//           <p className="text-gray-800">{profile.age}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Weight</label>
//           <p className="text-gray-800">{profile.weight}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Height</label>
//           <p className="text-gray-800">{profile.height}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">BMI</label>
//           <p className="text-gray-800">{profile.bmi}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Address</label>
//           <p className="text-gray-800">{profile.address}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">City</label>
//           <p className="text-gray-800">{profile.city}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Gym Before</label>
//           <p className="text-gray-800">{profile.gymbefore}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Emergency Contact Name</label>
//           <p className="text-gray-800">{profile.contactname}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Emergency Contact Relationship</label>
//           <p className="text-gray-800">{profile.relationship}</p>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Emergency Contact Number</label>
//           <p className="text-gray-800">{profile.contactnumber}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;


// Profilemodal.js

import React from 'react';

const Profilemodal = ({ onClose, userDetails }) => {
  if (!userDetails) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Profile Details</h2>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
        {/* Add more fields as necessary */}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Profilemodal;

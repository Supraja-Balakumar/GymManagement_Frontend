// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Managetrainers = () => {
// //   const [trainers, setTrainers] = useState([]);
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Fetch trainers data from backend
// //   useEffect(() => {
// //     const fetchTrainers = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8000/trainers/all');
// //         setTrainers(response.data);
// //       } catch (error) {
// //         console.error('Error fetching trainers:', error);
// //       }
// //     };
// //     fetchTrainers();
// //   }, []);

// //   const handleViewDocument = async (trainerId) => {
// //     try {
// //       const response = await axios.get(`http://localhost:8000/trainers/certifications/${trainerId}`, {
// //         responseType: 'blob' // Ensure the response is in blob format
// //       });

// //       const file = new Blob([response.data], { type: response.headers['content-type'] });
// //       const fileURL = URL.createObjectURL(file);

// //       setSelectedFile(fileURL);
// //       setIsModalOpen(true);
// //     } catch (error) {
// //       console.error('Error fetching document:', error);
// //     }
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedFile(null);
// //   };

// //   return (
// //     <div className="bg-gray-900 min-h-screen p-6 ml-10">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-4xl font-bold text-white">Manage Trainers</h1>
// //         <a
// //           href="/addtrainer" // Adjust the link based on your routing setup
// //           className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300"
// //         >
// //           Add Trainer
// //         </a>
// //       </div>
      
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
// //           <thead className="bg-gray-700">
// //             <tr>
// //               <th className="py-3 px-4 border-b border-gray-600 rounded-tl-lg">Trainer Name</th>
// //               <th className="py-3 px-4 border-b border-gray-600">Age</th>
// //               <th className="py-3 px-4 border-b border-gray-600">Trainer Email</th>
// //               <th className="py-3 px-4 border-b border-gray-600">Phone Number</th>
// //               <th className="py-3 px-4 border-b border-gray-600">Specialization</th>
// //               <th className="py-3 px-4 border-b border-gray-600">Certification</th>
// //               <th className="py-3 px-4 border-b border-gray-600 rounded-tr-lg">Availability</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {trainers.length > 0 ? (
// //               trainers.map((trainer) => (
// //                 <tr key={trainer.trainerid} className="bg-gray-800 hover:bg-gray-700">
// //                   <td className="py-3 px-4 border-b border-gray-700">{trainer.trainername}</td>
// //                   <td className="py-3 px-4 border-b border-gray-700">{trainer.age}</td>
// //                   <td className="py-3 px-4 border-b border-gray-700">{trainer.trainerEmail}</td>
// //                   <td className="py-3 px-4 border-b border-gray-700">{trainer.phonenumber}</td>
// //                   <td className="py-3 px-4 border-b border-gray-700">{trainer.specialization}</td>
// //                   <td className="py-3 px-4 border-b border-gray-700">
// //                     {trainer.certifications ? (
// //                       <button
// //                         onClick={() => handleViewDocument(trainer.trainerid)}
// //                         className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300"
// //                       >
// //                         View Certification
// //                       </button>
// //                     ) : 'Not Available'}
// //                   </td>
// //                   <td className="py-3 px-4 border-b border-gray-700">{trainer.availability}</td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="7" className="py-3 px-4 text-center border-b border-gray-700">No trainers available</td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Modal for viewing document */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //           <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
// //             <button
// //               onClick={handleCloseModal}
// //               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
// //             >
// //               &times;
// //             </button>
// //             <h2 className="text-xl font-bold mb-4">Document Viewer</h2>
// //             {selectedFile && (
// //               <iframe
// //                 src={selectedFile}
// //                 title="Document"
// //                 className="w-full h-96 border-0"
// //               />
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Managetrainers;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Managetrainers = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   // Fetch trainers data from backend
//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/trainers/all');
//         setTrainers(response.data);
//       } catch (error) {
//         console.error('Error fetching trainers:', error);
//       }
//     };
//     fetchTrainers();
//   }, []);

//   const handleViewDocument = async (trainerId) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/trainers/certifications/${trainerId}`, {
//         responseType: 'blob' // Ensure the response is in blob format
//       });

//       const file = new Blob([response.data], { type: response.headers['content-type'] });
//       const fileURL = URL.createObjectURL(file);

//       setSelectedFile(fileURL);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching document:', error);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedFile(null);
//   };

//   const handleAddTrainer = () => {
//     navigate('/addtrainer'); // Programmatically navigate to the add trainer page
//   };

//   return (

//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
//         <h1 className="text-2xl font-bold mb-10">Admin Dashboard</h1>
//         <ul>
//           <li className="mb-4">
//             <Link to="/dashboard/home" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">🏠</span> Dashboard
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/managemember" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">👤</span> Manage Members
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/adminpage/managetrainers" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">📄</span> Manage Trainers
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
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

//     <div className="bg-gray-900 min-h-screen p-6 ml-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-bold text-white">Manage Trainers</h1>
//         <button
//           onClick={handleAddTrainer} // Use the function to handle navigation
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300"
//         >
//           Add Trainer
//         </button>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="py-3 px-4 border-b border-gray-600 rounded-tl-lg">Trainer Name</th>
//               <th className="py-3 px-4 border-b border-gray-600">Age</th>
//               <th className="py-3 px-4 border-b border-gray-600">Trainer Email</th>
//               <th className="py-3 px-4 border-b border-gray-600">Phone Number</th>
//               <th className="py-3 px-4 border-b border-gray-600">Specialization</th>
//               <th className="py-3 px-4 border-b border-gray-600">Certification</th>
//               <th className="py-3 px-4 border-b border-gray-600 rounded-tr-lg">Availability</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trainers.length > 0 ? (
//               trainers.map((trainer) => (
//                 <tr key={trainer.trainerid} className="bg-gray-800 hover:bg-gray-700">
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.trainername}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.age}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.trainerEmail}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.phonenumber}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.specialization}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">
//                     {trainer.certifications ? (
//                       <button
//                         onClick={() => handleViewDocument(trainer.trainerid)}
//                         className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300"
//                       >
//                         View Certification
//                       </button>
//                     ) : 'Not Available'}
//                   </td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.availability}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="py-3 px-4 text-center border-b border-gray-700">No trainers available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for viewing document */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               &times;
//             </button>
//             <h2 className="text-xl font-bold mb-4">Document Viewer</h2>
//             {selectedFile && (
//               <iframe
//                 src={selectedFile}
//                 title="Document"
//                 className="w-full h-96 border-0"
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default Managetrainers;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Managetrainers = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   // Fetch trainers data from backend
//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/trainers/all');
//         setTrainers(response.data);
//       } catch (error) {
//         console.error('Error fetching trainers:', error);
//       }
//     };
//     fetchTrainers();
//   }, []);

//   const handleViewDocument = async (trainerId) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/trainers/certifications/${trainerId}`, {
//         responseType: 'blob' // Ensure the response is in blob format
//       });

//       const file = new Blob([response.data], { type: response.headers['content-type'] });
//       const fileURL = URL.createObjectURL(file);

//       setSelectedFile(fileURL);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching document:', error);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedFile(null);
//   };

//   const handleAddTrainer = () => {
//     navigate('/addtrainer'); // Programmatically navigate to the add trainer page
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="fixed top-0 bottom-0 w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
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
//           {/* <li className="mb-4">
//             <Link to="/manageclasses" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">👥</span> Manage Classes
//             </Link>
//           </li> */}
//           <li className="mb-4">
//             <Link to="/adminreports" className="flex items-center text-white hover:text-gray-300">
//               <span className="mr-2">💬</span> Reports
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-900 min-h-screen p-6 ml-[20%]"> {/* Adjust margin-left based on the sidebar width */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-bold text-white">Manage Trainers</h1>
//           <button
//             onClick={handleAddTrainer} // Use the function to handle navigation
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300"
//           >
//             Add Trainer
//           </button>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
//             <thead className="bg-gray-700">
//               <tr>
//                 <th className="py-3 px-4 border-b border-gray-600 rounded-tl-lg">Trainer Name</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Age</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Trainer Email</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Phone Number</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Specialization</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Certification</th>
//                 <th className="py-3 px-4 border-b border-gray-600 rounded-tr-lg">Availability</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trainers.length > 0 ? (
//                 trainers.map((trainer) => (
//                   <tr key={trainer.trainerid} className="bg-gray-800 hover:bg-gray-700">
//                     <td className="py-3 px-4 border-b border-gray-700">{trainer.trainername}</td>
//                     <td className="py-3 px-4 border-b border-gray-700">{trainer.age}</td>
//                     <td className="py-3 px-4 border-b border-gray-700">{trainer.trainerEmail}</td>
//                     <td className="py-3 px-4 border-b border-gray-700">{trainer.phonenumber}</td>
//                     <td className="py-3 px-4 border-b border-gray-700">{trainer.specialization}</td>
//                     <td className="py-3 px-4 border-b border-gray-700">
//                       {trainer.certifications ? (
//                         <button
//                           onClick={() => handleViewDocument(trainer.trainerid)}
//                           className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300"
//                         >
//                           View Certification
//                         </button>
//                       ) : 'Not Available'}
//                     </td>
//                     <td className="py-3 px-4 border-b border-gray-700">{trainer.availability}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="py-3 px-4 text-center border-b border-gray-700">No trainers available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Modal for viewing document */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 relative">
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//               >
//                 &times;
//               </button>
//               <h2 className="text-xl font-bold mb-4">Document Viewer</h2>
//               {selectedFile && (
//                 <iframe
//                   src={selectedFile}
//                   title="Document"
//                   className="w-full h-96 border-0"
//                 />
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Managetrainers;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Managetrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Fetch trainers data from backend
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/trainers/all');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };
    fetchTrainers();
  }, []);

  const handleViewDocument = async (trainerid) => {
    try {
      const response = await axios.get(`http://localhost:8000/trainers/${trainerid}`, {
        responseType: 'arraybuffer' // Ensure the response is in arraybuffer format for binary data
      });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const fileURL = URL.createObjectURL(blob);

      setSelectedFile(fileURL);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  const handleAddTrainer = () => {
    navigate('/addtrainer'); // Programmatically navigate to the add trainer page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 bottom-0 w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
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
            <Link to="/manageclasses" className="flex items-center text-white hover:text-gray-300">
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
      <div className="flex-1 bg-gray-900 min-h-screen p-6 ml-[20%]"> {/* Adjust margin-left based on the sidebar width */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-white">Manage Trainers</h1>
          <button
            onClick={handleAddTrainer} // Use the function to handle navigation
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300"
          >
            Add Trainer
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-4 border-b border-gray-600 rounded-tl-lg">Trainer Name</th>
                <th className="py-3 px-4 border-b border-gray-600">Age</th>
                <th className="py-3 px-4 border-b border-gray-600">Trainer Email</th>
                <th className="py-3 px-4 border-b border-gray-600">Phone Number</th>
                <th className="py-3 px-4 border-b border-gray-600">Specialization</th>
                <th className="py-3 px-4 border-b border-gray-600">Certification</th>
                <th className="py-3 px-4 border-b border-gray-600 rounded-tr-lg">Availability</th>
              </tr>
            </thead>
            <tbody>
              {trainers.length > 0 ? (
                trainers.map((trainer) => (
                  <tr key={trainer.trainerid} className="bg-gray-800 hover:bg-gray-700">
                    <td className="py-3 px-4 border-b border-gray-700">{trainer.trainername}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{trainer.age}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{trainer.trainerEmail}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{trainer.phonenumber}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{trainer.specialization}</td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      {trainer.certifications ? (
                        <button
                          onClick={() => handleViewDocument(trainer.trainerid)}
                          className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300"
                        >
                          View Certification
                        </button>
                      ) : 'Not Available'}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">{trainer.availability}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-3 px-4 text-center border-b border-gray-700">No trainers available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal for viewing document */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Document Viewer</h2>
              {selectedFile ? (
                <img
                  src={selectedFile}
                  alt="Certification"
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                'No document available'
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Managetrainers;

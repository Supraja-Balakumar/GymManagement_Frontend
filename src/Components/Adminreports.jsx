// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Reports = () => {
//   const [membershipStats, setMembershipStats] = useState({});
//   const [trainerPerformance, setTrainerPerformance] = useState([]);
//   const [classAttendance, setClassAttendance] = useState([]);
//   const [financialSummary, setFinancialSummary] = useState({});
//   const [feedback, setFeedback] = useState([]);

//   useEffect(() => {
//     // Fetch reports data from the backend
//     const fetchReportsData = async () => {
//       try {
//         const [membershipRes, trainerRes, attendanceRes, financialRes, feedbackRes] = await Promise.all([
//           axios.get('http://localhost:8000/reports/membership'),
//           axios.get('http://localhost:8000/reports/trainers'),
//           axios.get('http://localhost:8000/reports/attendance'),
//           axios.get('http://localhost:8000/reports/financial'),
//           axios.get('http://localhost:8000/reports/feedback'),
//         ]);

//         setMembershipStats(membershipRes.data);
//         setTrainerPerformance(trainerRes.data);
//         setClassAttendance(attendanceRes.data);
//         setFinancialSummary(financialRes.data);
//         setFeedback(feedbackRes.data);
//       } catch (error) {
//         console.error('Error fetching reports data:', error);
//       }
//     };

//     fetchReportsData();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="fixed top-0 bottom-0 w-1/5 bg-gradient-to-b from-purple-700 to-pink-500 text-white p-5">
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

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-900 min-h-screen p-6 ml-[20%]">
//         <h1 className="text-4xl font-bold text-white mb-6">Reports</h1>

//         {/* Membership Statistics */}
//         <div className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-bold text-white mb-4">Membership Statistics</h2>
//           <p className="text-gray-300">Total Members: {membershipStats.totalMembers}</p>
//           <p className="text-gray-300">Active Members: {membershipStats.activeMembers}</p>
//           <p className="text-gray-300">New Signups This Month: {membershipStats.newSignups}</p>
//         </div>

//         {/* Trainer Performance */}
//         <div className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-bold text-white mb-4">Trainer Performance</h2>
//           <table className="w-full bg-gray-700 text-white rounded-lg shadow-lg border border-gray-600">
//             <thead>
//               <tr>
//                 <th className="py-3 px-4 border-b border-gray-600">Trainer Name</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Classes Taught</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Average Rating</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trainerPerformance.map((trainer) => (
//                 <tr key={trainer.trainerId} className="bg-gray-800 hover:bg-gray-700">
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.name}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.classesTaught}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{trainer.averageRating}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Class Attendance */}
//         <div className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-bold text-white mb-4">Class Attendance</h2>
//           <table className="w-full bg-gray-700 text-white rounded-lg shadow-lg border border-gray-600">
//             <thead>
//               <tr>
//                 <th className="py-3 px-4 border-b border-gray-600">Class Name</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Total Attendees</th>
//                 <th className="py-3 px-4 border-b border-gray-600">Average Attendance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {classAttendance.map((classItem) => (
//                 <tr key={classItem.classId} className="bg-gray-800 hover:bg-gray-700">
//                   <td className="py-3 px-4 border-b border-gray-700">{classItem.className}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{classItem.totalAttendees}</td>
//                   <td className="py-3 px-4 border-b border-gray-700">{classItem.averageAttendance}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Financial Summary */}
//         <div className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-bold text-white mb-4">Financial Summary</h2>
//           <p className="text-gray-300">Total Revenue: ${financialSummary.totalRevenue}</p>
//           <p className="text-gray-300">Total Expenses: ${financialSummary.totalExpenses}</p>
//           <p className="text-gray-300">Net Profit: ${financialSummary.netProfit}</p>
//         </div>

//         {/* User Feedback */}
//         <div className="bg-gray-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
//           <h2 className="text-2xl font-bold text-white mb-4">User Feedback</h2>
//           <ul>
//             {feedback.length > 0 ? (
//               feedback.map((item) => (
//                 <li key={item.feedbackId} className="mb-4 p-4 bg-gray-700 rounded-lg shadow-lg">
//                   <p className="text-gray-300">User: {item.username}</p>
//                   <p className="text-gray-300">Rating: {item.rating}</p>
//                   <p className="text-gray-300">Comment: {item.comment}</p>
//                 </li>
//               ))
//             ) : (
//               <p className="text-gray-300">No feedback available</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const Reports = () => {
  const [membershipStats, setMembershipStats] = useState({});
  const [trainerPerformance, setTrainerPerformance] = useState([]);
  const [classAttendance, setClassAttendance] = useState([]);
  const [financialSummary, setFinancialSummary] = useState({});
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Fetch reports data from the backend
    const fetchReportsData = async () => {
      try {
        const [membershipRes, trainerRes, attendanceRes, financialRes, feedbackRes] = await Promise.all([
          axios.get('http://localhost:8000/reports/membership'),
          axios.get('http://localhost:8000/reports/trainers'),
          axios.get('http://localhost:8000/reports/attendance'),
          axios.get('http://localhost:8000/reports/financial'),
          axios.get('http://localhost:8000/reports/feedback'),
        ]);

        setMembershipStats(membershipRes.data);
        setTrainerPerformance(trainerRes.data);
        setClassAttendance(attendanceRes.data);
        setFinancialSummary(financialRes.data);
        setFeedback(feedbackRes.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchReportsData();
  }, []);

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
            <Link to="/adminpage/manageclasses" className="flex items-center text-white hover:text-gray-300">
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
      <div className="flex-1 bg-gray-900 min-h-screen p-6 ml-[20%]">
        <h1 className="text-4xl font-bold text-white mb-6">Reports</h1>

        {/* Membership Statistics */}
        <div className="bg-gradient-to-r from-teal-400 to-green-400 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Membership Statistics</h2>
          <div className="flex justify-around">
            <PieChart width={300} height={300}>
              <Pie
                data={[
                  { name: 'Active Members', value: membershipStats.activeMembers },
                  { name: 'Inactive Members', value: membershipStats.totalMembers - membershipStats.activeMembers }
                ]}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {[
                  '#8884d8',
                  '#82ca9d'
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="mt-4 text-gray-900">
            <p>Total Members: {membershipStats.totalMembers}</p>
            <p>Active Members: {membershipStats.activeMembers}</p>
            <p>New Signups This Month: {membershipStats.newSignups}</p>
          </div>
        </div>

        {/* Trainer Performance */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Trainer Performance</h2>
          <BarChart width={600} height={300} data={trainerPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="classesTaught" fill="#82ca9d" />
            <Bar dataKey="averageRating" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Class Attendance */}
        <div className="bg-gradient-to-r from-yellow-400 to-red-400 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Class Attendance</h2>
          <LineChart width={600} height={300} data={classAttendance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="totalAttendees" stroke="#8884d8" />
            <Line type="monotone" dataKey="averageAttendance" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Financial Summary */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Financial Summary</h2>
          <RadarChart outerRadius={150} width={600} height={300} data={[
            { subject: 'Total Revenue', A: financialSummary.totalRevenue, fullMark: 1500 },
            { subject: 'Total Expenses', A: financialSummary.totalExpenses, fullMark: 1500 },
            { subject: 'Net Profit', A: financialSummary.netProfit, fullMark: 1500 }
          ]}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Financial" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>

        {/* User Feedback */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-6 mb-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">User Feedback</h2>
          <div className="space-y-4">
            {feedback.length > 0 ? (
              feedback.map((item) => (
                <div key={item.feedbackId} className="p-4 bg-gray-700 rounded-lg shadow-lg">
                  <p className="text-gray-300">User: {item.username}</p>
                  <p className="text-gray-300">Rating: {item.rating}</p>
                  <p className="text-gray-300">Comment: {item.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-300">No feedback available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

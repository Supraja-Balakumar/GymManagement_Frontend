
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null); // State to hold the selected member
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  // Fetch members data from backend
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/member/all');
        setMembers(response.data);
      } catch (error) {
        setError('Error fetching members');
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const handleViewMember = (memberId) => {
    // Find the member with the matching id from the members array
    const member = members.find(m => m.memberid === memberId);
    setSelectedMember(member);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedMember(null); // Clear selected member
  };

  if (loading) return <div className="text-white">Loading...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 bottom-0 w-1/5 bg-gradient-to-b from-teal-700 to-teal-500 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">Trainer Dashboard</h1>
        <ul>
          <li className="mb-4">
            <Link to="/trainer/profile" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">👤</span> Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/trainer/schedule" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">📅</span> Schedule
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/trainermanagemember" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">💪</span> Managemember
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/trainer/classes" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">🗓️</span> Upcoming Classes
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/trainer/feedback" className="flex items-center text-white hover:text-gray-300">
              <span className="mr-2">📝</span> Feedback
            </Link>
          </li>
        </ul>
      </div>


      {/* Main Content Area */}
      <div className="flex-1 bg-gray-900 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-white">Manage Members</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-4 border-b border-gray-600 rounded-tl-lg">Name</th>
                <th className="py-3 px-4 border-b border-gray-600">Gender</th>
                <th className="py-3 px-4 border-b border-gray-600">Age</th>
                <th className="py-3 px-4 border-b border-gray-600">Email</th>
                <th className="py-3 px-4 border-b border-gray-600">Phone</th>
                <th className="py-3 px-4 border-b border-gray-600">Plan Type</th>
                <th className="py-3 px-4 border-b border-gray-600 rounded-tr-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.length > 0 ? (
                members.map((member) => (
                  <tr key={member.memberid} className="bg-gray-800 hover:bg-gray-700">
                    <td className="py-3 px-4 border-b border-gray-700">{member.name}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{member.gender}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{member.age}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{member.email}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{member.phone}</td>
                    <td className="py-3 px-4 border-b border-gray-700">{member.plantype}</td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <button
                        onClick={() => handleViewMember(member.memberid)}
                        className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-500 transition duration-300"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-3 px-4 text-center border-b border-gray-700">No members available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Member Details */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Member Details</h2>
            <p><strong>Name:</strong> {selectedMember.name}</p>
            <p><strong>Gender:</strong> {selectedMember.gender}</p>
            <p><strong>Age:</strong> {selectedMember.age}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p><strong>Phone:</strong> {selectedMember.phone}</p>
            <p><strong>Plan Type:</strong> {selectedMember.plantype}</p>
            <p><strong>Address:</strong> {selectedMember.address}</p>
            <p><strong>City:</strong> {selectedMember.city}</p>
            <p><strong>Previous Gym Experience:</strong> {selectedMember.gymbefore}</p>
            {/* Add other member details as needed */}
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMembers;

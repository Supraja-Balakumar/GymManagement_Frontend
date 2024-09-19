import React from 'react';
 
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-gray-400 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text since the 1500s.
        </p>
 
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-start space-y-4 text-gray-400">
            <div className="flex items-center">
              <span className="text-2xl mr-4">🏠</span>
              <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">📞</span>
              <p>571-457-2321</p>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-4">✉️</span>
              <p>suprajaa33@gmail.com</p>
            </div>
          </div>
 
          {/* Right Section */}
          <div className="w-full lg:w-1/2 bg-white text-black rounded-lg shadow-lg p-8">
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Full Name"
                />
              </div>
 
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email"
                />
              </div>
 
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Type your message..."
                ></textarea>
              </div>
 
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ContactUs;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Pricesection from './Pricesection';
import Footer from './Footer';

const GymPriceList = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = (plan) => {
    navigate('/registerform', { state: { selectedPlan: plan } });
  };

  return (
    <div>
      <Navbar />

      {/* Add an image with text overlay */}
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/I/516NVc0DsoL._AC_UF1000,1000_QL80_.jpg"
          alt="Gym Image"
          className="w-full h-[800px] object-cover"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <div className="text-white p-4 max-w-lg">
            {/* <h1 className="text-4xl font-bold mb-2">Welcome to GymFit</h1>
            <p className="text-lg">Your journey to a healthier you starts here. Explore our membership plans and join the best fitness community today!</p> */}
            <h1 className="text-lg italic font-black text-center">
          <span className="text-yellow-500 text-4xl">Affordable Solution with Advanced Features</span><br></br>
          <span className='text-blue-500 text-8xl'>Pricing & Plan</span>
        </h1>
          </div>
        </div>
      </div>

      {/* <Pricesection /> */}

      <div className="bg-black text-white min-h-screen py-8 px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">JOIN MEMBERSHIP NOW</h1>
          <div className="border-b-2 border-gray-700 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-4">3 MONTHS</h2>
              <p className="text-gray-600">Variety of Workout Options</p>
              <p className="text-gray-600">Motivational Environment</p>
              <p className="text-gray-600">Access to Fitness Classes</p>
              <p className="text-gray-600">Expert Guidance from Trained Professionals</p>
              <div className="mt-6 text-2xl font-bold">Rs.6600</div>
              <button
                className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                onClick={() => handleBuyNowClick('3 MONTHS')}
              >
                Buy Now
              </button>
            </div>
            {/* Premium Plan */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-4">6 MONTHS</h2>
              <p className="text-gray-600">Variety of Workout Options</p>
              <p className="text-gray-600">Motivational Environment</p>
              <p className="text-gray-600">Access to Fitness Classes</p>
              <p className="text-gray-600">Expert Guidance from Trained Professionals</p>
              <div className="mt-6 text-2xl font-bold">Rs.14000</div>
              <button
                className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                onClick={() => handleBuyNowClick('6 MONTHS')}
              >
                Buy Now
              </button>
            </div>
            {/* Platinum Plan */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-4">1 YEAR</h2>
              <p className="text-gray-600">Sirius is the brighter star</p>
              <p className="text-gray-600">Sirius is the brighter star</p>
              <p className="text-gray-600">Sirius is the brighter star</p>
              <p className="text-gray-600">Sirius is the brighter star</p>
              <div className="mt-6 text-2xl font-bold">Rs.20000</div>
              <button
                className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                onClick={() => handleBuyNowClick('1 YEAR')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GymPriceList;

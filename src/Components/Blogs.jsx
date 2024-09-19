import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';
const Blogs = () => {
  return (
    <div>
        <Navbar />
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-4">Our Latest Blog</h1> */}
      
      <img 
        src="https://gymowl.in/assets/img/Boost%20Member%20Engagement%20Through%20Gym%20Software.png" // Replace with the path to your image
        alt="Blog Image"
        // className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-md" // Adjust as needed
      />
    </div>
    <Cards />
    <Footer />
    </div>
  );
};

export default Blogs;

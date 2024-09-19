import React from "react";
 
const FitnessSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6">
      {/* Left Side: Image */}
      <div className="md:w-1/2 p-4">
        <img
          src="https://i.pinimg.com/736x/95/ae/de/95aedea85c484b2998d19f215e8c1650.jpg" // Update this with your image path
          alt="Fitness Priority"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
 
      {/* Right Side: Text Content */}
      <div className="md:w-1/2 p-4 text-left">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Welcome to GYMFIT Studio
        </h1>
        <p className="text-gray-700 mb-4">
          GYMFIT Studio is not a gym; it is a way of life. It is widely recognized as a premium that promotes a healthy lifestyle. It is one of the best fitness centers in Chennai, a preferred destination for several top-notch training programs.
        </p>
        <p className="text-gray-700 mb-4 font-bold">
          Our personalized designs will assist you in having the best time of your life. We provide various services such as functional training, fitness boot camp, body transformation, weight loss, and weight gain.
        </p>
        <p className="text-gray-700">
          The goal of this venture was to provide the best fitness experience possible under the supervision of highly qualified and experienced professionals. SLAM Fitness Studio is growing across the city, ensuring a luxurious fitness experience, making it the best weight loss gym in Chennai.
        </p>
      </div>
    </div>
  );
};
 
export default FitnessSection;

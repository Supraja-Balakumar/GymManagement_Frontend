// // import React, { useState } from 'react';

// // const BMICalculator = () => {
// //   const [weight, setWeight] = useState('');
// //   const [height, setHeight] = useState('');
// //   const [bmi, setBmi] = useState(null);
// //   const [category, setCategory] = useState('');

// //   const calculateBMI = () => {
// //     if (weight && height) {
// //       const heightInMeters = height / 100; // Convert height from cm to meters
// //       const calculatedBMI = weight / (heightInMeters * heightInMeters);
// //       setBmi(calculatedBMI.toFixed(2));

// //       // Determine BMI category
// //       if (calculatedBMI < 18.5) {
// //         setCategory('Underweight');
// //       } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
// //         setCategory('Normal weight');
// //       } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
// //         setCategory('Overweight');
// //       } else {
// //         setCategory('Obesity');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen items-center justify-center bg-gray-100">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
// //         <h1 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h1>
// //         <form
// //           onSubmit={(e) => {
// //             e.preventDefault();
// //             calculateBMI();
// //           }}
// //           className="space-y-4"
// //         >
// //           <div>
// //             <label className="block text-gray-700 font-medium mb-2" htmlFor="weight">
// //               Weight (kg)
// //             </label>
// //             <input
// //               type="number"
// //               id="weight"
// //               value={weight}
// //               onChange={(e) => setWeight(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded-lg"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700 font-medium mb-2" htmlFor="height">
// //               Height (cm)
// //             </label>
// //             <input
// //               type="number"
// //               id="height"
// //               value={height}
// //               onChange={(e) => setHeight(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded-lg"
// //               required
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
// //           >
// //             Calculate BMI
// //           </button>
// //         </form>

// //         {bmi && (
// //           <div className="mt-6 text-center">
// //             <h2 className="text-xl font-semibold">Your BMI</h2>
// //             <p className="text-2xl font-bold">{bmi}</p>
// //             <p className="text-lg text-gray-700">{category}</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BMICalculator;



// import React, { useState } from 'react';

// const BMICalculator = () => {
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [bmi, setBmi] = useState(null);
//   const [category, setCategory] = useState('');

//   const calculateBMI = () => {
//     if (weight && height) {
//       const heightInMeters = height / 100; // Convert height from cm to meters
//       const calculatedBMI = weight / (heightInMeters * heightInMeters);
//       setBmi(calculatedBMI.toFixed(2));

//       // Determine BMI category
//       if (calculatedBMI < 18.5) {
//         setCategory('Underweight');
//       } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
//         setCategory('Normal weight');
//       } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
//         setCategory('Overweight');
//       } else {
//         setCategory('Obesity');
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
//           "Your Health, Your Journey"
//         </h1>
//         <h2 className="text-lg text-center text-gray-600 mb-6">
//           Calculate your BMI to understand your body better.
//         </h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             calculateBMI();
//           }}
//           className="space-y-4"
//         >
//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="weight">
//               Weight (kg)
//             </label>
//             <input
//               type="number"
//               id="weight"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="height">
//               Height (cm)
//             </label>
//             <input
//               type="number"
//               id="height"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//           >
//             Calculate BMI
//           </button>
//         </form>

//         {bmi && (
//           <div className="mt-6 text-center">
//             <h2 className="text-2xl font-semibold text-gray-800">Your BMI</h2>
//             <p className="text-3xl font-bold text-blue-600">{bmi}</p>
//             <p className="text-lg text-gray-700">{category}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BMICalculator;



import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [foodSuggestions, setFoodSuggestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI.toFixed(2));

      // Determine BMI category and food suggestions
      if (calculatedBMI < 18.5) {
        setCategory('Underweight');
        setFoodSuggestions([
          'Smoothie with banana, peanut butter, oats, and whole milk',
          'Handful of nuts and a protein bar',
          'Whole grain pasta with chicken, olive oil, and vegetables',
          'Greek yogurt with honey and berries',
          'Salmon, quinoa, and avocado salad',
          'Cheese and whole grain crackers',
        ]);
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        setCategory('Normal weight');
        setFoodSuggestions([
          'Oatmeal topped with fresh fruits and nuts',
          'Apple slices with almond butter',
          'Grilled chicken salad with mixed greens',
          'Carrot sticks and hummus',
          'Stir-fried tofu with broccoli and brown rice',
          'Mixed berries',
        ]);
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        setCategory('Overweight');
        setFoodSuggestions([
          'Scrambled eggs with spinach and whole grain toast',
          'Celery sticks with light cream cheese',
          'Quinoa bowl with black beans and diced peppers',
          'Greek yogurt with chia seeds',
          'Baked chicken breast with roasted vegetables',
          'Herbal tea and dark chocolate',
        ]);
      } else {
        setCategory('Obesity');
        setFoodSuggestions([
          'Smoothie with spinach, banana, and protein powder',
          'Cucumber slices with salsa',
          'Lentil soup with mixed greens',
          'Handful of almonds',
          'Grilled fish with steamed vegetables',
          'Sliced apple or pear',
        ]);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div>
      <Navbar />
          <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          "Your Health, Your Journey"
        </h1>
        <h2 className="text-lg text-center text-gray-600 mb-6">
          Calculate your BMI to understand your body better.
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateBMI();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="height">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Your BMI</h2>
            <p className="text-3xl font-bold text-blue-600">{bmi}</p>
            <p className="text-lg text-gray-700">{category}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Suggested Food Plan
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Food Suggestions:</h3>
            <ul className="text-left text-gray-700">
              {foodSuggestions.map((food, index) => (
                <li key={index} className="my-1">• {food}</li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
};

export default BMICalculator;

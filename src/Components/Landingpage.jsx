// import React from 'react'
// import Navbar from './Navbar';
// import Carousel from './Carousel'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';

// function AppRouter() {
//   return (
//     <Router>
// <Navbar />
//       <h1 className="text-lg italic font-black text-center"><span className="text-green-500 text-4xl ">Scotland    </span>
//         Supraja</h1>
//       <Routes>
//         <Carousel />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Login from './Login';
import Cards from './Cards';
import Footer from './Footer';
import Pricesection from './Pricesection';
import Contact from './Contact';

function AppRouter() {
  return (
    
      <div>
      <h1 className="text-lg italic font-black text-center">
          <span className="text-green-500 text-4xl">GYMFIT</span>Studio
        </h1>
        <Navbar />
        <Carousel />
        <Pricesection />
        <Cards />
        <Contact />
        <Footer />
      </div>
  );
}

export default AppRouter;

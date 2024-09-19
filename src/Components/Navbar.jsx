// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default () => {
//     const [state, setState] = useState(false);

//     const navigation = [
//         { title: "Features", path: "javascript:void(0)" },
//         { title: "Pricing", path: "/pricelist" },
//         { title: "Blog", path: "javascript:void(0)" },
//         { title: "Contact", path: "javascript:void(0)" }
//     ];

//     useEffect(() => {
//         document.onclick = (e) => {
//             const target = e.target;
//             if (!target.closest(".menu-btn")) setState(false);
//         };
//     }, []);

//     return (
//         <nav className={`bg-white pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
//             <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
//                 <div className="flex items-center justify-between py-5 md:block">
//                     <a href="javascript:void(0)">
//                         <img
//                             src="https://www.floatui.com/logo.svg"
//                             width={120}
//                             height={50}
//                             alt="Float UI logo"
//                         />
//                     </a>
//                     <div className="md:hidden">
//                         <button className="menu-btn text-gray-500 hover:text-gray-800"
//                             onClick={() => setState(!state)}
//                         >
//                             {
//                                 state ? (
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                                     </svg>
//                                 ) : (
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                     </svg>
//                                 )
//                             }
//                         </button>
//                     </div>
//                 </div>
//                 <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
//                     <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
//                         {
//                             navigation.map((item, idx) => {
//                                 return (
//                                     <li key={idx} className="text-gray-700 hover:text-gray-900">
//                                         <a href={item.path} className="block">
//                                             {item.title}
//                                         </a>
//                                     </li>
//                                 )
//                             })
//                         }
//                     </ul>
//                     <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
//                         <Link to="/login" className="block text-gray-700 hover:text-gray-900">
//                             Log in
//                         </Link>
//                         <Link to="/register" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
//                             Sign up
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                                 <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };


// import React from 'react';
// import { Link } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person'; // Import the Person icon

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-800 text-white px-4 py-3 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="/gymfit.jpg" alt="Logo" className="h-8" /> {/* Ensure the image is in the public folder */}
//             <span className="hidden md:inline ml-2">MyLogo</span>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex flex-grow justify-center space-x-6">
//           <Link to="/" className="hover:text-gray-300">Home</Link>
//           <Link to="/features" className="hover:text-gray-300">Features</Link>
//           <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
//           <Link to="/explore" className="hover:text-gray-300">Explore</Link>
//           <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//         </div>

//         {/* Login Button with Icon */}
//         <div className="flex items-center space-x-2">
//           <Link to="/login" className="flex items-center text-white hover:text-gray-300">
//             <PersonIcon className="mr-1" /> {/* Margin-right for spacing */}
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
// import { Menu, MenuItem, IconButton } from '@mui/material';

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogin = (role) => {
//     handleClose();
//     // Navigate to the login page with role query parameter
//     navigate(`/login?role=${role}`);
//   };

//   return (
//     <nav className="bg-blue-800 text-white px-4 py-3 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="/gymfit.jpg" alt="Logo" className="h-8" />
//             <span className="hidden md:inline ml-2">GYMFIT</span>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex flex-grow justify-center space-x-6">
//           <Link to="/" className="hover:text-gray-300">Home</Link>
//           <Link to="/features" className="hover:text-gray-300">Features</Link>
//           <Link to="/pricelist" className="hover:text-gray-300">Pricing</Link>
//           <Link to="/explore" className="hover:text-gray-300">Explore</Link>
//           <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//         </div>

//         {/* Login Button with Dropdown */}
//         <div className="flex items-center space-x-2">
//           <IconButton
//             aria-controls="account-menu"
//             aria-haspopup="true"
//             onClick={handleClick}
//             color="inherit"
//           >
//             <PersonIcon />
//           </IconButton>
//           <Menu
//             id="account-menu"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//             PaperProps={{
//               style: {
//                 backgroundColor: '#ffffff',
//                 color: '#000000',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               },
//             }}
//           >
//             <MenuItem onClick={() => handleLogin('member')}>Member</MenuItem>
//             <MenuItem onClick={() => handleLogin('trainer')}>Trainer</MenuItem>
//             <MenuItem onClick={() => handleLogin('admin')}>Admin</MenuItem>
//           </Menu>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { Menu, MenuItem, IconButton } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = (role) => {
    handleClose();
    // Navigate to the login page with role query parameter
    navigate(`/login?role=${role}`);
  };

  return (
    <nav className="text-white px-4 py-3 shadow-md" style={{ backgroundColor: '#002B5B' }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/gym2.webp" alt="Logo" className="h-8" />
            <span className="hidden md:inline ml-2 text-xl">GYMFIT</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/" className="hover:text-gray-300">Features</Link>
          <Link to="/pricelist" className="hover:text-gray-300">Pricing</Link>
          <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
          <Link to="/bmi" className="hover:text-gray-300">BMI</Link>
          <Link to="/contactus" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Login Button with Dropdown */}
        <div className="flex items-center space-x-2">
          <IconButton
            aria-controls="account-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <PersonIcon />
          </IconButton>
          <span className="text-white">Login</span> {/* Added Login text */}
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: '#ffffff',
                color: '#000000',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <MenuItem onClick={() => handleLogin('member')}>Member</MenuItem>
            <MenuItem onClick={() => handleLogin('trainer')}>Trainer</MenuItem>
            <MenuItem onClick={() => handleLogin('admin')}>Admin</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


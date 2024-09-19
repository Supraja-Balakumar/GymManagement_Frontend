// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
// import Carousel from './Carousel';
// import Login from './Login';
// import Register from './Register';
// import Cards from './Cards';
// import Footer from './Footer';
// import Landingpage from './Landingpage';
// import Userpage from './Userpage';
// import Adminpage from './Adminpage';
// import Managetrainers from './Managetrainers';
// import AddTrainer from './Addtrainer';
// import ManageClasses from './Manageclasses';


// function AppRouter() {
//   return (
//     <Router>
       
//         <Routes>
//           <Route path='/' element={<Landingpage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path='/userpage' element={<Userpage />} />

//           <Route path='/adminpage' element={<Adminpage />} />
//           <Route path='/adminpage/managetrainers' element={<Managetrainers />} />
//           <Route path='/addtrainer' element={<AddTrainer />} />
//           <Route path='/adminpage/manageclasses' element={<ManageClasses />} />
          
//         </Routes>
//     </Router>
//   );
// }

// export default AppRouter;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Landingpage';
import Login from './Login';
import Userpage from './Userpage';
import Adminpage from './Adminpage';
import Managetrainers from './Managetrainers';
import AddTrainer from './Addtrainer';
import ManageClasses from './Manageclasses';
import Pricelist from './Pricelist';
import Registrationpage from './Registrationpage';
import Payment from './Payment';
import Memberpage from './Memberpage';
import Pricesection from './Pricesection';
import PaymentView from './Paymentview';
import Trainerpage from './Trainerpage';
import Blogs from './Blogs';
import Slotspage from './Slotspage';
import ApplyMembership from './Applymembership';
import Profilemodal from './Profilemodal';
import Loginmember from './Loginmember';
import ManageMembers from './Managemembers';
import Workoutplans from './Workoutplans';
import Memberdash from './Memberdash';
import Adminreports from './Adminreports';
import Contact from './Contact';
import Trainermanagemember from './Trainermanagemember';
import Bmi from './Bmi';
import MembersSchedule from './MembersSchedule';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<Userpage />} />

        <Route path="/adminpage" element={<Adminpage />}>
          <Route index element={<div>Welcome to the Admin Dashboard</div>} />
          {/* <Route path="managetrainers" element={<Managetrainers />} /> */}
          {/* <Route path="managetrainers/addtrainer" element={<AddTrainer />} /> */}
          <Route path="manageclasses" element={<ManageClasses />} />
        </Route>

        <Route path='/addtrainer' element={<AddTrainer />} />
        <Route path='/managemember' element={<ManageMembers />} />
        <Route path='/managetrainers' element={<Managetrainers />} />
        <Route path='/adminreports' element={<Adminreports />} />
        <Route path='/trainermanagemember' element={<Trainermanagemember />} />
        <Route path='/memberschedule' element={<MembersSchedule />} />
        
        

        <Route path='/bmi' element={<Bmi />} />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/registerform" element={<Registrationpage />} />
        <Route path="/paymentpage" element={<Payment />} />
        <Route path="/pricesection" element={<Pricesection />} />
        <Route path="/loginmember" element={<Loginmember />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/memberpage" element={<Memberpage />} />
        <Route path="/paymentview" element={<PaymentView />} />
        <Route path="/slotspage" element={<Slotspage />} />
        <Route path="/applymembership" element={<ApplyMembership />} />
        <Route path="/profileview" element={<Profilemodal />} />
        <Route path="/trainerpage" element={<Trainerpage />} />
        <Route path='/contactus' element={<Contact />} />

        <Route path='/workoutplans' element={<Workoutplans />} />
        <Route path='/memberdashboard' element={<Memberdash />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

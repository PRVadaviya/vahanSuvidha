import React from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {Navigate, Outlet,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  
  
  return (
    <div className="bg-gray-50">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

// const App = ()=>{
//   const isAuth = useSelector((state) => state.login.isAuthenticated)
//   return isAuth ? (
//     <div className="bg-gray-50">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   ) : (
//     <Navigate to="/Login" replace />
//   );
// }

// function App() {
//   const isAuth = useSelector((state) => state.login.isAuthenticated);
//   const location = useLocation();

//   if (!isAuth) {
//     return <Navigate to="/Login" state={{ from: location }} replace />;
//   }

//   return (
//     <div className="bg-gray-50">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

export default App
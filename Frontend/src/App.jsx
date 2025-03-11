import React, { createContext, useContext } from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Theme = createContext()

const useTheme = () => useContext(Theme)

function App() {

  const colors = {
    primary: '#C4B106',
    light: "#fff",
    dark: "#000",
    black : "#000"
  }

  return (
    <Theme.Provider value={colors}>
      <div className="bg-gray-50">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Theme.Provider>
  );
}

export { useTheme }

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
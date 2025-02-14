import React from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App
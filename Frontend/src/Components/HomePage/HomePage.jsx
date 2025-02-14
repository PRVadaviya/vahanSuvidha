import React from "react";
import image from './car.jpg'
import image2 from './IMG-20250109-WA0017.jpg';
import './home.css'


const HomePage = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Header */}
      <header className="w-full h-20 bg-[#157145] flex items-center justify-between px-5">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-15 h-15 bg-[#F8F8F8] rounded-full flex items-center justify-center">
            <span className="text-[#6A8EAE] text-6xl font-normal">VV</span>
          </div>
        </div>
        {/* Sign In / Join */}
        <button className="w-48 h-11 bg-[#5EC25E] border-4 border-[#FEFFFD] shadow-md rounded-full text-white font-bold text-lg">
          SIGN IN / JOIN
        </button>
      </header>



      {/* Navigation */}
      <nav className="w-full bg-[#4FC55B] h-20 flex justify-around items-center">
        <a href="#" className="text-white font-bold text-2xl">
          Reservation
        </a>
        <a href="#" className="text-white font-bold text-2xl">
          Vehicle
        </a>
        <a href="#" className="text-white font-bold text-2xl">
          Equipment
        </a>
        <a href="#" className="text-white font-bold text-2xl">
          Booking Status
        </a>
      </nav>

      <div className="img w-full">
        <img src={image2} alt="" />
      </div>

      {/* Main Section */}
      <main className="mt-10 px-5">
        {/* All Vehicles Section */}
        <section className="text-center my-20">
          <h2 className="text-4xl font-bold text-black mb-10">All Vehicle</h2>
          <div className="grid grid-cols-4 gap-10">
            {/* Vehicle Items */}
            <div className="text-center">
              <img src={image} alt="Car" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Car</p>
            </div>
            <div className="text-center">
              <img src="/tractor.jpg" alt="Tractor" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Tractor</p>
            </div>
            <div className="text-center">
              <img src="/truck.jpg" alt="Truck" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Truck</p>
            </div>
            <div className="text-center">
              <img src="/bulldozer.jpg" alt="Bulldozer" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Bulldozer</p>
            </div>
          </div>
          {/* View All Vehicles Button */}
          <button className="mt-10 w-80 h-16 bg-[#157145] rounded-full text-white font-bold text-lg">
            View All Vehicles
          </button>
        </section>

        {/* All Equipment Section */}
        <section className="text-center my-20">
          <h2 className="text-4xl font-bold text-black mb-10">All Equipment</h2>
          <div className="grid grid-cols-4 gap-10">
            {/* Equipment Items */}
            <div className="text-center">
              <img src="/car.jpg" alt="Car" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Car</p>
            </div>
            <div className="text-center">
              <img src="/tractor.jpg" alt="Tractor" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Tractor</p>
            </div>
            <div className="text-center">
              <img src="/truck.jpg" alt="Truck" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Truck</p>
            </div>
            <div className="text-center">
              <img src="/bulldozer.jpg" alt="Bulldozer" className="w-48 h-32 border border-black" />
              <p className="text-2xl font-bold text-[#157145] mt-3">Bulldozer</p>
            </div>
          </div>
          {/* View All Equipment Button */}
          <button className="mt-10 w-80 h-16 bg-[#157145] rounded-full text-white font-bold text-lg">
            View All Equipment
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

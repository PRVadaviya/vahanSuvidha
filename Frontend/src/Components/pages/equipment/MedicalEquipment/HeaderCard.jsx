import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderCard = () => {
  return (
    <div className="bg-white py-8 px-4 border-b border-gray-200">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Compare Passenger Vehicles
        </h1>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Choose from a variety of passenger vehicles in this category, including economy, full-size, or luxury models. Whether you are looking for fuel efficiency, spacious seating, or comfort and style, you are sure to find the perfect passenger vehicle. No matter if you’re planning a quick family visit or an adventurous road trip, our selection has you covered. <a href="#" className="text-green-700 underline">road trip</a>.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto mt-8">
        {/* <div className="flex justify-center space-x-6 text-sm md:text-base font-semibold">

          <NavLink to="/vehicles/passenger/car" end className={({isActive})=> `pb-1 ${isActive ? 'text-green-700 underline' : 'text-black'}`}>Car</NavLink>
          <NavLink to="/vehicles/passenger/bike" className={({isActive})=> `pb-1 ${isActive ? 'text-green-700 underline' : 'text-black'}`}>Bike</NavLink>
          <NavLink to="/vehicles/passenger/bus" className={({isActive})=> `pb-1 ${isActive ? 'text-green-700 underline' : 'text-black'}`}>Bus</NavLink>
        </div> */}

        <div className="flex justify-center space-x-6 text-sm md:text-base font-semibold">
          <NavLink
            to="/equipment/medicalequipment"
            end
            className={({ isActive }) => `pb-1 ${isActive ? 'text-green-700 underline' : 'text-black'}`}
          >
            Chair
          </NavLink>
          <NavLink
            to="/equipment/medicalequipment/walker"
            className={({ isActive }) => `pb-1 ${isActive ? 'text-green-700 underline' : 'text-black'}`}
          >
            Walker
          </NavLink>
          {/* <NavLink
            to="/vehicles/passenger/bus"
            className={({ isActive }) => `pb-1 ${isActive ? 'text-green-700 underline' : 'text-black'}`}
          >
            Bus
          </NavLink> */}
        </div>
      </div>

      {/* Button */}
      {/* <div className="absolute top-4 right-4">
        <button className="border border-green-700 text-green-700 px-4 py-2 rounded-full text-sm hover:bg-green-700 hover:text-white">
          Start a Reservation
        </button>
      </div> */}
    </div>
  );
};

export default HeaderCard;
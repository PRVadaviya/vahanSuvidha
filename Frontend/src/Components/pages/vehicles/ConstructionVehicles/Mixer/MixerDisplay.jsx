import React from "react";
import CAR_DATA from "./MixerData";
import './mixer.css'
import HeaderCard from "../HeaderCard";

const MixerDisplay = () => {
  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Mixer</h1>
        <div className="car-grid">
          {CAR_DATA.map((carGroup, index) => (
            carGroup.map((car, carID) => (
              <div key={carID} className="car-card">
                <div className="car-image">
                  <img src={car.img} alt={car.name} />
                </div>
                <div className="car-details">
                  <div className="font-bold text-green-700 underline">
                    <h3>{car.name}</h3>
                  </div>
                  <p className="car-price">${car.price} per day</p>
                  <div className="car-specs">
                    <p>Model: {car.model}</p>
                    <p>Doors: {car.doors}</p>
                    <p>Fuel: {car.fuel}</p>
                    <p>Transmission: {car.transmission}</p>
                  </div>
                  <button className="book-btn">Add To Cart</button>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default MixerDisplay;

import React, { useEffect, useState } from "react";
import CarList from "./CarData";

import './car.css'
import HeaderCard from "../HeaderCard";
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CarDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [CarData, setCarData] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      const data = await CarList();
      console.log(data);

      setCarData(data);
    };
    loadCars();
  }, []);
// 

  const isCarInCart = (car) => {
    return items.some((item) => item.vehicleNumber === car.vehicleNumber);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Car</h1>
        <div className="car-grid">
          {CarData.map((car, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={car.img} alt={car.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{car.vehicleName}</h3>
                </div>
                <p className="car-price">${car.vehicleRentPrice
                } per day</p>
                <div className="car-specs">
                  <p>Model: {car.vehicleName}</p>
                  <p>Seating Capacity: {car.seatingCapacity}</p>
                  <p>Fuel: {car.fuelType}</p>
                  <p>Transmission: {car.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(car))}
                  className={`book-btn ${isCarInCart(car) ? "added" : ""}`}
                >
                  {isCarInCart(car) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDisplay;

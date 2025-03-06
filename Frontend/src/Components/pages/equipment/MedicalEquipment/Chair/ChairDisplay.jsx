import React, { useEffect } from "react";
import CarData from "./ChairData";
import './chair.css'
import HeaderCard from "../HeaderCard";
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ChairDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux

  useEffect(() => {
    console.log(items);
  }, [items]);

  // Function to check if a car is already in the cart
  const isCarInCart = (car) => {
    return items.some((item) => item.name === car.name);
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

export default ChairDisplay;

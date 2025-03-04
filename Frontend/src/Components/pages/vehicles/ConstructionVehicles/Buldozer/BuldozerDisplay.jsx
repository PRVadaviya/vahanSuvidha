import React, { useEffect } from "react";
import CarData from './BulzorData'
import './buldozer.css'
import HeaderCard from '../HeaderCard'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const BuldozerDisplay = () => {

  const dispatch = useDispatch()

  const items = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(items);
  }, [items])


  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Buldozer</h1>
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
                    onClick={() => {
                      dispatch(addToCart(car))
                    }}
                    className="book-btn">Add To Cart</button>
                </div>
              </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default BuldozerDisplay;

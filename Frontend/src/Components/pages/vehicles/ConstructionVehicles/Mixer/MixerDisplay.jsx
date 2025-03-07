import React, { useEffect, useState } from "react";
import MixerList from "./MixerData";
import './mixer.css'
import HeaderCard from "../HeaderCard";
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const MixerDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [MixerData, setMixerData] = useState([]);

  useEffect(() => {
    const loadMixers = async () => {
      const data = await MixerList();
      console.log(data);

      setMixerData(data);
    };
    loadMixers();
  }, []);

  // Function to check if a car is already in the cart
  const isMixerInCart = (mixer) => {
    return items.some((item) => item.vehicelNumber === mixer.vehicelNumber);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Mixer</h1>
        <div className="car-grid">
          {MixerData.map((mixer, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={mixer.img} alt={mixer.vahicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{mixer.vahicleName}</h3>
                </div>
                <p className="car-price">${mixer.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {mixer.vahicleName}</p>
                  <p>Seating Capacity: {mixer.seatingCapacity}</p>
                  <p>Fuel: {mixer.fuelType}</p>
                  <p>Transmission: {mixer.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(mixer))}
                  className={`book-btn ${isMixerInCart(mixer) ? "added" : ""}`}
                >
                  {isMixerInCart(mixer) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MixerDisplay;

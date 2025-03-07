import React, { useEffect, useState } from "react";
import BuldozerList from './BulzorData'
import './buldozer.css'
import HeaderCard from '../HeaderCard'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const BuldozerDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [buldozerData, setBuldozerData] = useState([]);

  useEffect(() => {
    const loadBuldozers = async () => {
      const data = await BuldozerList();
      console.log(data);

      setBuldozerData(data);
    };
    loadBuldozers();
  }, []);

  const isBuldozerInCart = (buldozer) => {
    return items.some((item) => item.vehicleNumber === buldozer.vehicleNumber);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Buldozer</h1>
        <div className="car-grid">
          {buldozerData.map((buldozer, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={buldozer.img} alt={buldozer.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{buldozer.vehicleName}</h3>
                </div>
                <p className="car-price">${buldozer.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {buldozer.vehicleName}</p>
                  <p>Seating Capacity: {buldozer.seatingCapacity}</p>
                  <p>Fuel: {buldozer.fuelType}</p>
                  <p>Transmission: {buldozer.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(buldozer))}
                  className={`book-btn ${isBuldozerInCart(buldozer) ? "added" : ""}`}
                >
                  {isBuldozerInCart(buldozer) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuldozerDisplay;

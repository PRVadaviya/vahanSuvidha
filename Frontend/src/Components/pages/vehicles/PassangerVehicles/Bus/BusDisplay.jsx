import React, { useEffect,useState } from "react";
import HeaderCard from '.././HeaderCard'
import BusList from './BusData'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const BusDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux

  const [BusData, setBusData] = useState([]);

  useEffect(() => {
    const loadBuss = async () => {
      const data = await BusList();
      console.log(data);

      setBusData(data);
    };
    loadBuss();
  }, []);

  // Function to check if a car is already in the cart
  const isBusInCart = (bus) => {
    return items.some((item) => item.vehicleNumber === bus.vehicleNumber);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Bus</h1>
        <div className="car-grid">
          {BusData.map((bus, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={bus.img} alt={bus.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{bus.vehicleName}</h3>
                </div>
                <p className="car-price">${bus.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {bus.vehicleName}</p>
                  <p>Seating Capacity: {bus.seatingCapacity}</p>
                  <p>Fuel: {bus.fuelType}</p>
                  <p>Transmission: {bus.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(bus))}
                  className={`book-btn ${isBusInCart(bus) ? "added" : ""}`}
                >
                  {isBusInCart(bus) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusDisplay;

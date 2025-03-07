import React, { useEffect,useState } from "react";
import TruckList from './TruckData'
import './truck.css'
import HeaderCard from '../HeaderCard'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function TruckDisplay() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [TruckData, setTruckData] = useState([]);

  useEffect(() => {
    const loadTrucks = async () => {
      const data = await TruckList();
      console.log(data);

      setTruckData(data);
    };
    loadTrucks();
  }, []);
  const isTruckInCart = (truck) => {
    return items.some((item) => item.name === truck.name);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Truck</h1>
        <div className="car-grid">
          {TruckData.map((truck, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={truck.img} alt={truck.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{truck.vehicleName}</h3>
                </div>
                <p className="car-price">${truck.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {truck.vehicleName}</p>
                  <p>SeatingCapacity: {truck.seatingCapacity}</p>
                  <p>Fuel: {truck.fuelType}</p>
                  <p>Transmission: {truck.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(truck))}
                  className={`book-btn ${isTruckInCart(truck) ? "added" : ""}`}
                >
                  {isTruckInCart(truck) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TruckDisplay

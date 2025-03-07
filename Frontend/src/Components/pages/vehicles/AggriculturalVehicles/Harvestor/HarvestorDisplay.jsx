import React, { useEffect,useState } from "react";
import HarvestorList from './HarvestorData'
import './harvestor.css'
import HeaderCard from '../HeaderCard'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function HarvestorDisplay() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [HarvestorData, setHarvestorData] = useState([]);

  useEffect(() => {
    const loadHarvestors = async () => {
      const data = await HarvestorList();
      console.log(data);

      setHarvestorData(data);
    };
    loadHarvestors();
  }, []);

  const isHarvestorInCart = (harvestor) => {
    return items.some((item) => item.name === harvestor.name);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Harvestor</h1>
        <div className="car-grid">
          {HarvestorData.map((harvestor, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={harvestor.img} alt={harvestor.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{harvestor.vehicleName}</h3>
                </div>
                <p className="car-price">${harvestor.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {harvestor.vehicleName}</p>
                  <p>Seating Capacity: {harvestor.seatingCapacity}</p>
                  <p>Fuel: {harvestor.fuelType}</p>
                  <p>Transmission: {harvestor.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(harvestor))}
                  className={`book-btn ${isHarvestorInCart(harvestor) ? "added" : ""}`}
                >
                  {isHarvestorInCart(harvestor) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HarvestorDisplay

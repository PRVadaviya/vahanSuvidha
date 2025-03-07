import React, { useEffect,useState } from "react";
import HeaderCard from '../HeaderCard'
import TractorList from './TractorData'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function TractorDisplay() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [TractorData, setTractorData] = useState([]);

  useEffect(() => {
    const loadTractors = async () => {
      const data = await TractorList();
      console.log(data);

      setTractorData(data);
    };
    loadTractors();
  }, []);

  const isTractorInCart = (tractor) => {
    return items.some((item) => item.name === tractor.name);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Tractor</h1>
        <div className="car-grid">
          {TractorData.map((tractor, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={tractor.img} alt={tractor.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{tractor.vehicleName}</h3>
                </div>
                <p className="car-price">${tractor.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {tractor.vehicleName}</p>
                  <p>Seating Capacity: {tractor.seatingCapacity}</p>
                  <p>Fuel: {tractor.fuelType}</p>
                  <p>Transmission: {tractor.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(tractor))}
                  className={`book-btn ${isTractorInCart(tractor) ? "added" : ""}`}
                >
                  {isTractorInCart(tractor) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TractorDisplay

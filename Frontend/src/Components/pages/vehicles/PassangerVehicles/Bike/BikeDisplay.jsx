import React, { useEffect ,useState} from "react";
import BikeList from './BikeData'
import './bike.css'
import HeaderCard from '../HeaderCard'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const BikeDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux
  const [BikeData, setBikeData] = useState([]);

  useEffect(() => {
    const loadBikes = async () => {
      const data = await BikeList();
      console.log(data);

      setBikeData(data);
    };
    loadBikes();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  // Function to check if a car is already in the cart
  const isCarInCart = (bike) => {
    return items.some((item) => item.vehicleNumber === bike.vehicleNumber);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Bike</h1>
        <div className="car-grid">
          {BikeData.map((bike, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={bike.img} alt={bike.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{bike.vehicleName}</h3>
                </div>
                <p className="car-price">${bike.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {bike.vehicleName}</p>
                  <p>Seating Capacity: {bike.seatingCapacity}</p>
                  <p>Fuel: {bike.fuelType}</p>
                  <p>Transmission: {bike.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(bike))}
                  className={`book-btn ${isCarInCart(bike) ? "added" : ""}`}
                >
                  {isCarInCart(bike) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeDisplay;

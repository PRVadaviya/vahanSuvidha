import React, { useEffect ,useState} from "react";
import HeaderCard from '../HeaderCard'
import RollerList from './RollerData'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const RollerDisplay = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux

  const [RollerData, setRollerData] = useState([]);

  useEffect(() => {
    const loadRollers = async () => {
      const data = await RollerList();
      console.log(data);

      setRollerData(data);
    };
    loadRollers();
  }, []);

  const isRollerInCart = (roller) => {
    return items.some((item) => item.vehicleNumber === roller.vehicleNumber);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Roller</h1>
        <div className="car-grid">
          {RollerData.map((roller, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={roller.img} alt={roller.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{roller.vehicleName}</h3>
                </div>
                <p className="car-price">${roller.vehicleRentPrice} per day</p>
                <div className="car-specs">
                  <p>Model: {roller.vehicleName}</p>
                  <p>Seating Capacity: {roller.seatingCapacity}</p>
                  <p>Fuel: {roller.fuelType}</p>
                  <p>Transmission: {roller.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(roller))}
                  className={`book-btn ${isRollerInCart(roller) ? "added" : ""}`}
                >
                  {isRollerInCart(roller) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollerDisplay;

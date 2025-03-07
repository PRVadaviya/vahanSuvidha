import React, { useEffect , useState} from "react";
import HeaderCard from '../HeaderCard'
import TrailerList from './TrailerData'
import { addToCart } from "../../../../../features/AddToCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function TrailerDisplay() {
    const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart items from Redux

  const [TrailerData, setTrailerData] = useState([]);

  useEffect(() => {
    const loadTrailers = async () => {
      const data = await TrailerList();
      console.log(data);

      setTrailerData(data);
    };
    loadTrailers();
  }, []);

  const isTrailerInCart = (trailer) => {
    return items.some((item) => item.name === trailer.name);
  };

  return (
    <div>
      <HeaderCard />
      <div className="app-container">
        <h1>Trailer</h1>
        <div className="car-grid">
          {TrailerData.map((trailer, index) => (
            <div key={index} className="car-card">
              <div className="car-image">
                <img src={trailer.img} alt={trailer.vehicleName} />
              </div>
              <div className="car-details">
                <div className="font-bold text-green-700 underline">
                  <h3>{trailer.vehicleName}</h3>
                </div>
                <p className="car-price">${trailer.vehicleRentPrice
                } per day</p>
                <div className="car-specs">
                  <p>Model: {trailer.vehicleName}</p>
                  <p>seatingCapacity: {trailer.seatingCapacity}</p>
                  <p>Fuel: {trailer.fuelType}</p>
                  <p>Transmission: {trailer.transmission}</p>
                </div>
                <button
                  onClick={() => dispatch(addToCart(trailer))}
                  className={`book-btn ${isTrailerInCart(trailer) ? "added" : ""}`}
                >
                  {isTrailerInCart(trailer) ? "✓ Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrailerDisplay

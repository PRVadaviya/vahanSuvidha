import React from "react";
import {useNavigate} from "react-router-dom";

const CarCard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/passenger-vehicles"); // Define the route for the passenger vehicle page
  };

  return (
    <div className="flex items-center justify-between border rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
      {/* Content Section */}
      <div className="flex-1 mr-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Cars</h2>
        <p className="text-gray-600 mb-4">
          <span className="mr-2">👥</span>2-5 People &nbsp; | &nbsp;
          <span className="mr-2">🧳</span>1-4 Bags
        </p>
        <p className="text-gray-700 mb-6">
          Choose from a variety of rental cars in this category including
          economy, full-size, or luxury sedans. Whether you are looking for
          fuel-efficiency, space, or comfort and style, you are sure to find
          the perfect rental car no matter whether you are going on a quick
          family visit or an adventurous{" "}
          <a href="/road-trip" className="text-green-600 hover:underline">
            road trip
          </a>
          .
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          View All
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/200" // Replace with the actual car image URL
          alt="Car"
          className="w-48 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default CarCard;

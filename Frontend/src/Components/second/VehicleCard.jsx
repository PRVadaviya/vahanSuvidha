import React from "react";

function VehicleCard({ name, type, transmission, price, imageUrl }) {
  return (
    <div className="border rounded shadow-md p-4">
      <img src={imageUrl} alt={name} className="w-full h-32 object-cover rounded" />
      <h4 className="font-bold text-lg mt-4">{name}</h4>
      <p className="text-sm text-gray-600">{type}</p>
      <p className="text-sm text-gray-600">{transmission}</p>
      <p className="text-sm text-green-600 font-bold">{price}</p>
      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded w-full">
        Add to Cart
      </button>
    </div>
  );
}

export default VehicleCard;

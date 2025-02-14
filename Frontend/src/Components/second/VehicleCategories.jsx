import React from "react";

function VehicleCategories() {
  const categories = [
    { name: "Car", type: "Passenger Vehicle" },
    { name: "Bike", type: "Passenger Vehicle" },
    { name: "Bus", type: "Passenger Vehicle" },
    { name: "Truck", type: "Commercial Vehicle" },
    { name: "Cargo", type: "Commercial Vehicle" },
    { name: "Trailers", type: "Commercial Vehicle" },
    { name: "Tractor", type: "Agriculture Vehicle" },
    { name: "Harvester", type: "Agriculture Vehicle" },
    { name: "Bulldozer", type: "Construction Vehicle" },
    { name: "Roller", type: "Construction Vehicle" },
    { name: "Cement Mixer", type: "Construction Vehicle" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Category</h3>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="border p-2 rounded hover:bg-green-600 hover:text-white"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VehicleCategories;

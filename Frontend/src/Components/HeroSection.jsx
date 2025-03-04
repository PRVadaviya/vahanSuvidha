import React, { useState } from "react";
import image from "../assets/green.jpg";

const HeroSection = ({ onComplete }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [vehicleClass, setVehicleClass] = useState("");

  const countries = {
    India: {
      Gujarat: ["Rajkot", "Ahmedabad", "Surat"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Texas: ["Houston", "Dallas", "Austin"],
    },
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = () => {
    if (vehicleClass === "Vehicle") {
      onComplete("vehicle");
    } else if (vehicleClass === "Equipment") {
      onComplete("equipment");
    } else {
      onComplete(); // Proceed with the default flow
    }
  };

  return (
    <section
      className="py-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div className="container mx-auto my-6 p-6 bg-white rounded shadow-lg max-w-4xl">
        <h3 className="text-lg font-bold mb-4 text-center">Select Location</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select a Country</option>
              {Object.keys(countries).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">State</label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={!selectedCountry}
            >
              <option value="">Select a State</option>
              {selectedCountry &&
                Object.keys(countries[selectedCountry]).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={!selectedState}
            >
              <option value="">Select a City</option>
              {selectedState &&
                countries[selectedCountry][selectedState].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Pick-up</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Vehicle Class</label>
            <select
              value={vehicleClass}
              onChange={(e) => setVehicleClass(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select a Class (Optional)</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Equipment">Equipment</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              className="w-full bg-green-700 text-white py-2 rounded font-bold"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

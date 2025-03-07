import React, { useState } from "react";
import image from "../assets/green.jpg";
import API from "../api";
import { addToSerchData } from "../features/searchData/searchData";
import { useDispatch } from "react-redux";

const HeroSection = () => {



  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedState, setSelectedState] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  // const [pickupDate, setPickupDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  // const [vehicleClass, setVehicleClass] = useState("");



  // const handleCountryChange = (e) => {
  //   setSelectedCountry(e.target.value);
  //   setSelectedState("");
  //   setSelectedCity("");
  // };

  // const handleStateChange = (e) => {
  //   setSelectedState(e.target.value);
  //   setSelectedCity("");
  // };

  // const handleCityChange = (e) => {
  //   setSelectedCity(e.target.value);
  // };

  // const handleSearch = async() => {
  //   if (vehicleClass === "Vehicle") {
  //     onComplete("vehicle");

  //   try {
  //     const response = await fetch(`${API}/vehicle/search`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(onComplete),
  //     });

  //     const data = await response.json();


  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError("Something went wrong!");
  //   }



  //   } else if (vehicleClass === "Equipment") {
  //     onComplete("equipment");
  //   } else {
  //     onComplete(); // Proceed with the default flow
  //   }
  // };

  const dispatch = useDispatch()

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

  const [data, setData] = useState({
    country: "",
    state: "",
    city: "",
    pickupDate: "",
    returnDate: "",
    class: "",
  });

  // Handle changes in dropdowns & inputs
  const onChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      let updatedData = { ...prevData, [name]: value };

      // Reset dependent fields when parent field changes
      if (name === "country") {
        updatedData.state = "";
        updatedData.city = "";
      } else if (name === "state") {
        updatedData.city = "";
      }

      return updatedData;
    });
    console.log(data);
    
  };

  // Handle Search Button Click
  const handleSearch = () => {
    
    console.log(data);
    
    dispatch(addToSerchData(data))
    

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
          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              name="country"
              value={data.country}
              onChange={onChange}
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

          {/* State */}
          <div>
            <label className="block text-sm font-medium mb-2">State</label>
            <select
              name="state"
              value={data.state}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={!data.country}
            >
              <option value="">Select a State</option>
              {data.country &&
                Object.keys(countries[data.country]).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <select
              name="city"
              value={data.city}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={!data.state}
            >
              <option value="">Select a City</option>
              {data.state &&
                countries[data.country][data.state].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Date & Class Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Pick-up</label>
            <input
              type="date"
              name="pickupDate"
              value={data.pickupDate}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Return</label>
            <input
              type="date"
              name="returnDate"
              value={data.returnDate}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Vehicle Class */}
          <div>
            <label className="block text-sm font-medium mb-2">Vehicle Class</label>
            <select
              name="class"
              value={data.class}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select a Class (Optional)</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Equipment">Equipment</option>
            </select>
          </div>

          {/* Search Button */}
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
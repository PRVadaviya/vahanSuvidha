import React, { useState } from "react";
import image from "../../../assets/green.jpg";
import API from "../../../api";
import { addToSerchData } from "../../../features/searchData/searchData";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Serch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    searchCountry: "",
    searchState: "",
    searchCity: "",
    pickupDate: "",
    returnDate: "",
    classType: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      let updatedData = { ...prevData, [name]: value };

      if (name === "searchCountry") {
        updatedData.searchState = "";
        updatedData.searchCity = "";
      } else if (name === "searchState") {
        updatedData.searchCity = "";
      }

      return updatedData;
    });
  };

  const handleSearch = async () => {
    console.log("Search Data:", data);
    try {
      const response = await fetch(`${API}/vehicle/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Search Result:", result);
      navigate("/vehicles");
    } catch (error) {
      console.error("Error:", error);
    }
    dispatch(addToSerchData(data));
  };

  // ✅ Ensure the return statement is inside the function
  return (
    <section className="py-8 min-h-[60vh] bg-gray-100">
      <div className="container mx-auto my-6 p-6 bg-white rounded shadow-lg max-w-4xl">
        <h3 className="text-lg font-bold mb-4 text-center">Select Location</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              name="searchCountry"
              value={data.searchCountry}
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

          <div>
            <label className="block text-sm font-medium mb-2">State</label>
            <select
              name="searchState"
              value={data.searchState}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={!data.searchCountry}
            >
              <option value="">Select a State</option>
              {data.searchCountry &&
                Object.keys(countries[data.searchCountry]).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <select
              name="searchCity"
              value={data.searchCity}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={!data.searchState}
            >
              <option value="">Select a City</option>
              {data.searchState &&
                countries[data.searchCountry][data.searchState].map((city) => (
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
              name="pickupDate"
              value={data.pickupDate}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

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

          <div>
            <label className="block text-sm font-medium mb-2">Vehicle Class</label>
            <select
              name="classType"
              value={data.classType}
              onChange={onChange}
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

export default Serch;
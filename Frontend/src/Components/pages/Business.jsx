import { useState, useEffect } from "react";

// const AddVehicle = () => {
//   const [formData, setFormData] = useState({
//     vehicleName: "",
//     vehicleNumber: "",
//     category: "",
//     type: "",
//     country: "",
//     state: "",
//     city: "",
//     seatingCapacity: "",
//     fuelType: "",
//     transmission: "",
//     numOfWheels: "",
//     rentPrice: "",
//     additionalInfo: "",
//   });

//   const [vehicleTypes, setVehicleTypes] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const locationData = {
//     India: {
//       Maharashtra: ["Mumbai", "Pune"],
//       Gujarat: ["Ahmedabad", "Surat"],
//       Karnataka: ["Bangalore", "Mysore"],
//     },
//     USA: {
//       California: ["Los Angeles", "San Francisco"],
//       Texas: ["Houston", "Dallas"],
//     },
//   };

//   const typeOfVehicle = {
//     passenger_vehicle: ["Bike", "Car", "Bus"],
//     agriculture_vehicle: ["Tractor", "Harvester"],
//     construction_vehicle: ["Bulldozer", "Roller", "Cement Mixer"],
//     commercial_vehicle: ["Truck", "Cargo", "Trailers"],
//   };

//   useEffect(() => {
//     if (formData.category) {
//       setVehicleTypes(typeOfVehicle[formData.category] || []);
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     if (formData.country) {
//       setStates(Object.keys(locationData[formData.country] || {}));
//       setCities([]);
//     }
//   }, [formData.country]);

//   useEffect(() => {
//     if (formData.state) {
//       setCities(locationData[formData.country]?.[formData.state] || []);
//     }
//   }, [formData.state]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {


//       const response = await fetch("http://localhost:9203/vehicle/addvehicle", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       console.log("data" , data);

//       if (response.ok) {
//         alert("Vehicle added successfully!");
//         setFormData({
//           vehicleName: "",
//           vehicleNumber: "",
//           category: "",
//           type: "",
//           country: "",
//           state: "",
//           city: "",
//           seatingCapacity: "",
//           fuelType: "",
//           transmission: "",
//           numOfWheels: "",
//           rentPrice: "",
//           additionalInfo: "",
//         });
//       } else {
//         alert(data.message || "Failed to add vehicle.");
//       }
//     } catch (error) {
//       alert("Error adding vehicle. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
//         <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">
//           Add Vehicle Details
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Vehicle Details */}
//           <div>
//             <label className="block text-sm font-medium">Vehicle Name</label>
//             <input
//               type="text"
//               name="vehicleName"
//               value={formData.vehicleName}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded"
//               placeholder="Enter vehicle name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Vehicle Number</label>
//             <input
//               type="text"
//               name="vehicleNumber"
//               value={formData.vehicleNumber}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded"
//               placeholder="Enter vehicle number"
//             />
//           </div>

//           {/* Category & Type */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium">Category</label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select Category</option>
//                 <option value="passenger_vehicle">Passenger Vehicle</option>
//                 <option value="agriculture_vehicle">Agriculture Vehicle</option>
//                 <option value="construction_vehicle">Construction Vehicle</option>
//                 <option value="commercial_vehicle">Commercial Vehicle</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Type</label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select Type</option>
//                 {vehicleTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Location: Country, State, City */}
//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium">Country</label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select Country</option>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium">State</label>
//               <select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select State</option>
//                 {states.map((state) => (
//                   <option key={state} value={state}>
//                     {state}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium">City</label>
//               <select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select City</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Additional Details */}
//           <h3 className="text-lg font-semibold text-gray-700 mt-4">Additional Details</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium">Seating Capacity</label>
//               <select name="seatingCapacity" value={formData.seatingCapacity} onChange={handleChange} required className="w-full p-2 border rounded">
//                 <option value="">Select seating capacity</option>
//                 <option value="2">2</option>
//                 <option value="4">4</option>
//                 <option value="6">6</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium">No. of Wheels</label>
//               <select name="numOfWheels" value={formData.numOfWheels} onChange={handleChange} required className="w-full p-2 border rounded">
//                 <option value="">Select number of wheels</option>
//                 <option value="2">2</option>
//                 <option value="4">4</option>
//                 <option value="6">6</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//           <div>
//               <label className="block text-sm font-medium">Fuel Type</label>
//               <select name="fuelType" value={formData.fuelType} onChange={handleChange} required className="w-full p-2 border rounded">
//                 <option value="">Select fuel type</option>
//                 <option value="Petrol">Petrol</option>
//                 <option value="Diesel">Diesel</option>
//                 <option value="Electric">Electric</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium">Transmission</label>
//               <select name="transmission" value={formData.transmission} onChange={handleChange} required className="w-full p-2 border rounded">
//                 <option value="">Select transmission</option>
//                 <option value="Manual">Manual</option>
//                 <option value="Automatic">Automatic</option>

//               </select>
//             </div>
//           </div>


//           <div>
//             <label className="block text-sm font-medium">Rent Price</label>
//             <input
//               type="number"
//               name="rentPrice"
//               value={formData.rentPrice}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded"
//               placeholder="Enter vehicle Rent Price"
//             />
//           </div>

//           {/* Additional Info */}
//           <label className="block text-sm font-medium">Additional Information</label>
//           <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Add any extra details" />

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800 transition">
//             Add Vehicle
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddVehicle;

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleName: "",
    vehicleNumber: "",
    category: "",
    type: "",
    country: "",
    state: "",
    city: "",
    seatingCapacity: "",
    fuelType: "",
    transmission: "",
    numOfWheels: "",
    rentPrice: "",
    additionalInfo: "",
  });

  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const locationData = {
    India: {
      Maharashtra: ["Mumbai", "Pune"],
      Gujarat: ["Ahmedabad", "Surat"],
      Karnataka: ["Bangalore", "Mysore"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"],
    },
  };

  const typeOfVehicle = {
    passenger_vehicle: ["Bike", "Car", "Bus"],
    agriculture_vehicle: ["Tractor", "Harvester"],
    construction_vehicle: ["Bulldozer", "Roller", "Cement Mixer"],
    commercial_vehicle: ["Truck", "Cargo", "Trailers"],
  };

  useEffect(() => {
    if (formData.category) {
      setVehicleTypes(typeOfVehicle[formData.category] || []);
    }
  }, [formData.category]);

  useEffect(() => {
    if (formData.country) {
      setStates(Object.keys(locationData[formData.country] || {}));
      setCities([]);
    }
  }, [formData.country]);

  useEffect(() => {
    if (formData.state) {
      setCities(locationData[formData.country]?.[formData.state] || []);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      const response = await fetch("http://localhost:9203/vehicle/addvehicle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("data" , data);

      if (response.ok) {
        alert("Vehicle added successfully!");
        setFormData({
          vehicleName: "",
          vehicleNumber: "",
          category: "",
          type: "",
          country: "",
          state: "",
          city: "",
          seatingCapacity: "",
          fuelType: "",
          transmission: "",
          numOfWheels: "",
          rentPrice: "",
          additionalInfo: "",
        });
      } else {
        alert(data.message || "Failed to add vehicle.");
      }
    } catch (error) {
      alert("Error adding vehicle. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">
          Add Vehicle Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Details */}
          <div>
            <label className="block text-sm font-medium">Vehicle Name</label>
            <input
              type="text"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="Enter vehicle name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="Enter vehicle number"
            />
          </div>

          {/* Category & Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Category</option>
                <option value="passenger_vehicle">Passenger Vehicle</option>
                <option value="agriculture_vehicle">Agriculture Vehicle</option>
                <option value="construction_vehicle">Construction Vehicle</option>
                <option value="commercial_vehicle">Commercial Vehicle</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Type</option>
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location: Country, State, City */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Details */}
          <h3 className="text-lg font-semibold text-gray-700 mt-4">Additional Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Seating Capacity</label>
              <select name="seatingCapacity" value={formData.seatingCapacity} onChange={handleChange} required className="w-full p-2 border rounded">
                <option value="">Select seating capacity</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">No. of Wheels</label>
              <select name="numOfWheels" value={formData.numOfWheels} onChange={handleChange} required className="w-full p-2 border rounded">
                <option value="">Select number of wheels</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-medium">Fuel Type</label>
              <select name="fuelType" value={formData.fuelType} onChange={handleChange} required className="w-full p-2 border rounded">
                <option value="">Select fuel type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Transmission</label>
              <select name="transmission" value={formData.transmission} onChange={handleChange} required className="w-full p-2 border rounded">
                <option value="">Select transmission</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>

              </select>
            </div>
          </div>


          <div>
            <label className="block text-sm font-medium">Rent Price</label>
            <input
              type="number"
              name="rentPrice"
              value={formData.rentPrice}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="Enter vehicle Rent Price"
            />
          </div>

          {/* Additional Info */}
          <label className="block text-sm font-medium">Additional Information</label>
          <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Add any extra details" />

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800 transition">
            Add Vehicle
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
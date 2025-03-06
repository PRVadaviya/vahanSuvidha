import { useState, useEffect } from "react";
import AddVehicle from "./AddVehicle";
import AddEquipment from "./AddEquipment";

const Business = () => {
  const [activeForm, setActiveForm] = useState("vehicle");

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeForm === "vehicle" ? "bg-green-600 text-white" : "bg-gray-300"
            }`}
          onClick={() => setActiveForm("vehicle")}
        >
          Add Vehicle
        </button>
        <button
          className={`px-4 py-2 rounded ${activeForm === "equipment" ? "bg-green-600 text-white" : "bg-gray-300"
            }`}
          onClick={() => setActiveForm("equipment")}
        >
          Add Equipment
        </button>
      </div>
      <div className="bg-white rounded-lg  w-4/5">
        {activeForm === "vehicle" ? <AddVehicle /> : <AddEquipment />}

      </div>
    </div>
  );
}

export default Business

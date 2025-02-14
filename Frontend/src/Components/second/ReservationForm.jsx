import React from "react";

function ReservationForm() {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Reserve a Vehicle</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Select Your Location"
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-4">
          <input type="date" className="p-2 border rounded flex-1" />
          <input type="date" className="p-2 border rounded flex-1" />
        </div>
        <select className="w-full p-2 border rounded">
          <option>Vehicle / Equipment</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;

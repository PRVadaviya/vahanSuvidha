import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-green-600">VahanSuvidha</span>, your trusted partner in car rentals. Our mission is to provide reliable, affordable, and comfortable rental cars that cater to your travel needs—whether it's a family vacation, a business trip, or an adventurous road journey.
        </p>
      </div>

      {/* Section: Why Choose Us */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Wide Range of Vehicles</h3>
          <p className="text-gray-600">
            Choose from a diverse range of vehicles, including economy, luxury, SUVs, and passenger vans to meet your every need.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Affordable Prices</h3>
          <p className="text-gray-600">
            We offer competitive pricing and transparent rental agreements with no hidden fees.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Exceptional Customer Support</h3>
          <p className="text-gray-600">
            Our dedicated support team is available 24/7 to assist you with bookings, queries, or any issues.
          </p>
        </div>
      </div>

      {/* Section: Company Info */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          Founded in [Year], <span className="font-semibold text-green-600">VahanSuvidha</span> has grown from a small local rental service to one of the most trusted car rental companies in the industry. With a commitment to quality and customer satisfaction, we continuously strive to improve and expand our offerings.
        </p>
      </div>

      {/* Section: Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/vehicles"
          className="bg-green-600 text-white px-9 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          View Our Vehicles
        </a>

        <a
          href="/equipment"
          className="bg-green-600 text-white px-5 py-3 rounded-lg text-lg font-semibold ml-5 hover:bg-blue-700 transition duration-200"
        >
          View Our Equipments
        </a>

      </div>
    </div>
  );
}

export default AboutUs;

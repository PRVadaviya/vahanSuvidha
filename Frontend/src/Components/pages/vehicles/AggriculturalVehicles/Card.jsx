import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, people, bags, description, buttonText, imageSrc ,url}) => {

    const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-4 border rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4 mb-6">
      <div className="flex-1">
        {/* Title */}
        <h2 className="text-xl font-bold text-green-700 mb-2">{title}</h2>

        {/* Icons Section */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
          <div className="flex items-center gap-1">
            <span className="material-icons">people</span>
            <span>{people}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons">work</span>
            <span>{bags}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Button */}
        <button
        onClick={() => navigate(url)}
         className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
          {buttonText}
        </button>
      </div>

      {/* Image */}
      <div className="w-48">
        <img src={imageSrc} alt={title} className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Card;

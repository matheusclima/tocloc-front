import React from 'react';

interface CardProps {
  name: string;
  description: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ name, description, location }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm p-4">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-gray-500 mt-4 italic">{location}</p>
    </div>
  );
};

export default Card;

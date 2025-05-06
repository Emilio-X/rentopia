// src/components/ItemCard.jsx
import { FaStar, FaRegHeart } from "react-icons/fa";

export default function ItemCard({ title, distance, rating, availableFrom, price }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      {/* placeholder image */}
      <div className="h-40 bg-gray-200 rounded mb-4" />

      {/* title and favorite icon */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold">{title}</h3>
        <FaRegHeart className="cursor-pointer" />
      </div>

      {/* distance, rating */}
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="mr-2">{distance}</span>
        <FaStar className="text-yellow-500 mr-1" />
        <span>{rating}</span>
      </div>

      {/* available & price */}
      <div className="mt-auto text-sm text-gray-700">
        <p>Available from {availableFrom}</p>
        <p className="font-semibold mt-1">${price} / day</p>
      </div>
    </div>
  );
}

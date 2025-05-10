// src/components/ItemCard.jsx
import Image from 'next/image'
import { FaStar, FaRegHeart } from 'react-icons/fa'

export default function ItemCard({ title, distance, rating, availableFrom, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col overflow-hidden shadow 
      transform hover:-translate-y-1 hover:shadow-lg 
      transition-all duration-200 ease-out">
      {/* 1) Photo */}
      <div className="relative h-40 w-full rounded overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* 2) Title + Favorite */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <FaRegHeart className="cursor-pointer text-gray-500 hover:text-red-500" />
      </div>

      {/* 3) Distance & Rating */}
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="mr-2">{distance}</span>
        <FaStar className="text-yellow-500 mr-1" />
        <span>{rating}</span>
      </div>

      {/* 4) Availability & Price */}
      <div className="mt-auto text-sm text-gray-700">
        <p>Available from {availableFrom}</p>
        <p className="font-semibold mt-1">${price} / day</p>
      </div>
    </div>
  )
}

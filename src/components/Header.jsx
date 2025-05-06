'use client';

import Link from 'next/link';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white py-4 px-6 shadow-sm">
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold">Rentopia</span>
      </Link>

      {/* Search bar */}
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for items to rent…"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <Link href="/list-item">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            List your item
          </button>
        </Link>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaUserCircle size={24} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
}

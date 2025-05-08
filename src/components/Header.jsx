// src/components/Header.jsx
'use client';

import Link from 'next/link';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header({ searchQuery, setSearchQuery }) {
  const { data: session, status } = useSession();

  return (
    <header className="flex items-center justify-between bg-white py-4 px-6 shadow-sm">
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold">Rentopia</span>
      </Link>

      {/* Search bar */}
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for items to rent…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

        {status === 'loading' ? (
          <div>Loading…</div>
        ) : session ? (
          <>
            <img
              src={session.user.image}
              alt={session.user.name}
              className="h-8 w-8 rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="px-3 py-1 text-sm text-gray-700 hover:underline"
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn('github')}
            className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            <FaUserCircle />
            <span>Sign in</span>
          </button>
        )}
      </div>
    </header>
  );
}

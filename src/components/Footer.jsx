'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white mt-12 py-10 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/forums">Forums</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/press">Press</Link></li>
          </ul>
        </div>

        {/* Renting */}
        <div>
          <h4 className="font-semibold mb-3">Renting</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/safety">Safety</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com"><FaFacebookF size={20} className="text-gray-600 hover:text-blue-600" /></Link>
            <Link href="https://twitter.com"><FaTwitter   size={20} className="text-gray-600 hover:text-blue-400" /></Link>
            <Link href="https://instagram.com"><FaInstagram size={20} className="text-gray-600 hover:text-pink-500" /></Link>
            <Link href="https://linkedin.com"><FaLinkedinIn size={20} className="text-gray-600 hover:text-blue-700" /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Rentopia. All rights reserved.
      </div>
    </footer>
  );
}

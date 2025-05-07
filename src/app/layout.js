import { Geist, Geist_Mono } from "next/font/google";
// src/app/layout.js
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Rentopia',
  description: 'Rent anything, anywhere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow max-w-7xl mx-auto px-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

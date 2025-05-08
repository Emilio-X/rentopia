import { Geist, Geist_Mono } from "next/font/google";
// src/app/layout.js
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';

export const metadata = {
  title: 'Rentopia',
  description: 'Rent anything, anywhere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
       <Providers>
         <Header />

         <main className="flex-grow max-w-7xl mx-auto px-4">
           {children}
         </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

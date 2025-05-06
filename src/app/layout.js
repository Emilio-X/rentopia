import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Rentopia',
  description: 'Rent anything, anywhere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Header />

        <main className="max-w-7xl mx-auto px-4">
          {children}
        </main>

        {/* You can add <Footer /> here later */}
      </body>
    </html>
  );
}

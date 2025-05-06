// src/components/CategoryNav.jsx
import { 
    FaCar, 
    FaLaptop, 
    FaTools, 
    FaTshirt, 
    FaBasketballBall 
  } from 'react-icons/fa';
  
  export default function CategoryNav() {
    return (
      <nav className="flex justify-center space-x-8 py-6 bg-white shadow-sm">
        <button className="flex flex-col items-center">
          <FaCar size={24} />
          <span className="mt-1 text-sm">Transport</span>
        </button>
        <button className="flex flex-col items-center">
          <FaLaptop size={24} />
          <span className="mt-1 text-sm">Electronics</span>
        </button>
        <button className="flex flex-col items-center">
          <FaTools size={24} />
          <span className="mt-1 text-sm">Tools</span>
        </button>
        <button className="flex flex-col items-center">
          <FaTshirt size={24} />
          <span className="mt-1 text-sm">Fashion</span>
        </button>
        <button className="flex flex-col items-center">
          <FaBasketballBall size={24} />
          <span className="mt-1 text-sm">Sports</span>
        </button>
      </nav>
    );
  }
  
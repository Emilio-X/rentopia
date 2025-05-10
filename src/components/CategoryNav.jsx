'use client'

import {
  FaCar,
  FaLaptop,
  FaTools,
  FaTshirt,
  FaBasketballBall,
} from 'react-icons/fa'

export default function CategoryNav({ selectedCategory, onSelectCategory }) {
  const categories = [
    { key: 'transport',   Icon: FaCar,            label: 'Transportation' },
    { key: 'electronics', Icon: FaLaptop,         label: 'Electronics'    },
    { key: 'tools',       Icon: FaTools,          label: 'Tools'          },
    { key: 'fashion',     Icon: FaTshirt,         label: 'Fashion'        },
    { key: 'sports',      Icon: FaBasketballBall, label: 'Sports'         },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <ul className="flex">
          {categories.map(({ key, Icon, label }) => {
            const isActive = key === selectedCategory
            return (
              <li
                key={key}
                onClick={() => onSelectCategory(isActive ? null : key)}
                className={`
                  flex-1 cursor-pointer flex flex-col items-center py-4
                  transition-colors duration-200
                  ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-700'
                  }
                `}
              >
                <Icon
                  className={`
                    transition-transform duration-200
                    ${isActive
                      ? 'w-10 h-10 scale-110'
                      : 'w-8 h-8 hover:scale-110'
                    }
                  `}
                />
                <span className={`
                  mt-2 text-sm font-medium whitespace-nowrap
                  ${isActive ? 'font-semibold' : ''}
                `}>
                  {label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

  
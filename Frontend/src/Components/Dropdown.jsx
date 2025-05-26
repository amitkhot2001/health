import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-800 bg-white border-none rounded-md  hover:bg-gray-50"
      >
        This Week
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={18} />
      </button>

    
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              This Month
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              This Year
            </a>
          
          </div>
        </div>
      )}
    </div>
  );
}

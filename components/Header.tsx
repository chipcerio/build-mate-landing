'use client';

import { ChevronDown, MapPinned } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm border-b border-gray-100'>
      <div className='container-custom'>
        <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-wokka-orange rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>Px</span>
              </div>
              <span className='text-xl font-bold text-gray-900'>PickAxe DH</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a href='#' className='text-gray-700 hover:text-wokka-orange transition-colors'>
              Home
            </a>
            <a href='#' className='text-gray-700 hover:text-wokka-orange transition-colors'>
              Services
            </a>
            <a href='#' className='text-gray-700 hover:text-wokka-orange transition-colors'>
              About
            </a>
            <a href='#' className='text-gray-700 hover:text-wokka-orange transition-colors'>
              Blog
            </a>
          </nav>

          {/* Country Selector and Contact Button */}
          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className='flex items-center space-x-2 text-gray-700 hover:text-wokka-orange transition-colors'>
                <MapPinned className='w-5 h-5' />
                <span>Location</span>
                <ChevronDown className='w-4 h-4' />
              </button>

              {isLocationOpen && (
                <div className='absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                  <div className='py-2'>
                    <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                      Cebu City
                    </a>
                    <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                      Tagbilaran City
                    </a>
                    <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                      Panglao
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button className='btn-primary'>Contact us</button>
          </div>
        </div>
      </div>
    </header>
  );
}

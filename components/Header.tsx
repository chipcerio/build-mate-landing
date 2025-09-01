'use client';

import { ChevronDown, MapPinned } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Header() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm border-b border-gray-100'>
      <div className='container-custom'>
        <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-pickaxe-blue rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>Px</span>
              </div>
              <span className='text-xl font-bold text-gray-900'>PickAxe DH</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a href='#' className='text-gray-700 hover:text-pickaxe-blue transition-colors'>
              Home
            </a>
            <a href='#mission' className='text-gray-700 hover:text-pickaxe-blue transition-colors'>
              Mission
            </a>
            <a href='#solution' className='text-gray-700 hover:text-pickaxe-blue transition-colors'>
              Solution
            </a>
            <a href='#faq' className='text-gray-700 hover:text-pickaxe-blue transition-colors'>
              FAQ
            </a>
          </nav>

          {/* Country Selector and Contact Button */}
          <div className='flex items-center space-x-4'>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className='btn-primary'
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  );
}

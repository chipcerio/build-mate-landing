import { Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-wokka-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Px</span>
                </div>
                <span className="text-xl font-bold text-gray-900">PickAxe DH</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur. Egestas cursus commodo consequat id. Consectetur sed eget dolor.
              </p>
            </div>
            
            <div className="w-full"></div>
            
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">About</a>
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">Community</a>
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">Terms of Use</a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">Announcements</a>
                <a href="#" className="block text-gray-600 hover:text-wokka-orange transition-colors text-sm">Cookie Preferences</a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-wokka-orange transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-wokka-orange transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-wokka-orange transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-wokka-orange transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-wokka-orange transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              2025 © DigitalHorizon Inc. | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 
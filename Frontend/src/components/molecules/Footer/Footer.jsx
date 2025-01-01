import React from 'react';
import { FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 px-8 text-sm text-gray-600 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="text-gray-500">Copyright © 2024 10XCode</span>
          <nav className="flex items-center space-x-12">
            <a href="/help" className="hover:text-gray-900">Help Center</a>
            <a href="/terms" className="hover:text-gray-900">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <FaGlobe className="text-gray-500" />
          <span className="hover:text-gray-900 cursor-pointer">India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { Button } from './ui/button';

export const Header = () => {
  const navigationItems = [
    "Home",
    "About", 
    "Portfolio",
    "Service & Support",
    "Contact Us",
  ];

  return (
    <header className="relative z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          ADPRIX
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">📧</span>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">📞</span>
          </div>
        </div>
      </div>
    </header>
  );
};
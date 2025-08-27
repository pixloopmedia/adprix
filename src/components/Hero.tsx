import React from 'react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creative Solutions for
            <br />
            <span className="text-orange-500">Modern Brands</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse
          </p>
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
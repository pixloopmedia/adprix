import React from 'react';
import { Button } from './ui/button';

export const About = () => {
  const statistics = [
    { number: "2350+", label: "Project Completed" },
    { number: "1500+", label: "Happy Clients" },
    { number: "16895+", label: "Cup Of Coffee Consumed" },
    { number: "10+", label: "Experience" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Turning Screens Into
              <br />
              Stories & Events Into
              <br />
              <span className="text-orange-500">Experiences</span>
            </h2>
          </div>
          
          <div>
            <div className="text-9xl font-medium text-black mb-4">10</div>
            <div className="text-3xl font-normal text-black tracking-widest mb-8">
              Years
              <br />
              Experience
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300">
              Know More
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-3">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
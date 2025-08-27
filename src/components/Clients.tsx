import React from 'react';
import { Card, CardContent } from './ui/card';

export const Clients = () => {
  const clientLogos = [
    { name: "Client 1", placeholder: "C1" },
    { name: "Client 2", placeholder: "C2" },
    { name: "Client 3", placeholder: "C3" },
    { name: "Client 4", placeholder: "C4" },
    { name: "Client 5", placeholder: "C5" },
    { name: "Client 6", placeholder: "C6" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Trusted by
              <br />
              <span className="text-orange-500">our Customers</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {clientLogos.map((client, index) => (
              <Card key={index} className="bg-gray-50 border-0 hover:bg-gray-100 transition-colors duration-300">
                <CardContent className="p-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">
                      {client.placeholder}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
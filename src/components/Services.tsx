import React from 'react';
import { Card, CardContent } from './ui/card';
import { Monitor, Signpost, Calendar } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "LED Display Screen",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.",
      icon: Monitor,
    },
    {
      title: "Signage Solutions", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.",
      icon: Signpost,
    },
    {
      title: "Events & exhibitions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.",
      icon: Calendar,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Solutions That
              <br />
              <span className="text-orange-500">Move You Forward</span>
            </h2>
          </div>
          
          <div className="flex items-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-8">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-4 cursor-pointer group">
                    <span className="text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                      Know More
                    </span>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Joe Marvin",
      position: "Company CEO",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Kate Johnson", 
      position: "Marketing Director",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Mike Wilson",
      position: "Project Manager",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            What People <span className="text-orange-500">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-center">
                  <div className="font-bold text-black text-xl mb-2">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.position}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
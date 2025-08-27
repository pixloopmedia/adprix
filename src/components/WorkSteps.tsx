import React from 'react';
import { Card, CardContent } from './ui/card';
import { FileText, Lightbulb, Calculator, Wrench, Factory, Truck } from 'lucide-react';

export const WorkSteps = () => {
  const workSteps = [
    {
      number: "1",
      title: "Information Collection",
      icon: FileText,
    },
    {
      number: "2", 
      title: "Concept Design",
      icon: Lightbulb,
    },
    {
      number: "3",
      title: "Cost Estimation",
      icon: Calculator,
    },
    {
      number: "4",
      title: "Product Prototyping",
      icon: Wrench,
    },
    {
      number: "5",
      title: "Product Production",
      icon: Factory,
    },
    {
      number: "6",
      title: "Logistics Operation",
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Steps of <span className="text-orange-500">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
                  <step.icon className="w-8 h-8 text-orange-500" />
                </div>

                <h3 className="text-xl font-bold text-black leading-tight">
                  {step.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
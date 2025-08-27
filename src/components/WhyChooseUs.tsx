import React from 'react';
import { DollarSign, Network, Settings, Award } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Value for Money",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: DollarSign,
    },
    {
      title: "Network of Offices to Support our Clients",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: Network,
    },
    {
      title: "One Stop Integrated Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: Settings,
    },
    {
      title: "10+ Years Experience in the Region",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-8">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
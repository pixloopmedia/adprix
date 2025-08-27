import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const branches = [
    {
      title: "Branch 1",
      address: "Jeddah Saudi Arabia, P.O Box-22234\nKingdom of Saudi Arabia",
      phone: "+966 5588 14663",
      email: "sales@adprixarabia.com",
    },
    {
      title: "Branch 2", 
      address: "Dammam Saudi Arabia, P.O Box-32242\nKingdom of Saudi Arabia",
      phone: "+966 5588 14663",
      email: "sales@adprixarabia.com",
    },
    {
      title: "Branch 3",
      address: "Bay Square-Dubai, Marasi Dr-Business\nBay United Arab Emirates",
      phone: "",
      email: "sales@adprixarabia.com",
    },
    {
      title: "Branch 4",
      address: "Xinhe Xinxing Industrial Park, Baoan\nDistrict, Shenzhen Guangdong, China",
      phone: "",
      email: "sales@adprixarabia.com",
    },
  ];

  const footerLinks = {
    services: ["LED Display Screen", "Signage Solutions", "Events & exhibitions"],
    links: ["Home", "About", "What We Do"],
    portfolio: ["Portfolio", "Maintenance", "Contact Us"],
    social: ["Twitter", "Facebook", "Instagram"],
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-3xl font-bold mb-6">ADPRIX</div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <div key={index} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <div className="space-y-3">
              {footerLinks.links.map((link, index) => (
                <div key={index} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
            <div className="space-y-3 mt-6">
              {footerLinks.portfolio.map((item, index) => (
                <div key={index} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="space-y-3">
              {footerLinks.social.map((social, index) => (
                <div key={index} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {branches.map((branch, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{branch.title}</h4>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  {branch.address.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              {branch.phone && (
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <div className="text-gray-400 text-sm">{branch.phone}</div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <div className="text-gray-400 text-sm">{branch.email}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="text-gray-400">
            © 2025 Adprix Arabia. All Rights Reserved | Designed By Weboft
          </div>
        </div>
      </div>
    </footer>
  );
};
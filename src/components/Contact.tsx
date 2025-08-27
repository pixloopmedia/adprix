import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Get In <span className="text-orange-500">Touch!</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <form className="space-y-8">
            <div>
              <label className="block text-white text-lg mb-4">
                Name
              </label>
              <Input 
                className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 pb-2 text-white placeholder:text-white/60 focus:border-orange-500" 
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-white text-lg mb-4">
                Email
              </label>
              <Input 
                type="email"
                className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 pb-2 text-white placeholder:text-white/60 focus:border-orange-500" 
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-white text-lg mb-4">
                Phone
              </label>
              <Input 
                type="tel"
                className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 pb-2 text-white placeholder:text-white/60 focus:border-orange-500" 
                placeholder="Enter your phone"
              />
            </div>

            <div>
              <label className="block text-white text-lg mb-4">
                Message
              </label>
              <Textarea 
                className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 pb-2 text-white placeholder:text-white/60 resize-none focus:border-orange-500" 
                placeholder="Enter your message"
                rows={4}
              />
            </div>

            <div className="flex items-center gap-4">
              <Checkbox 
                className="w-6 h-6 border-white data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" 
              />
              <label className="text-white text-lg">
                I agree that my data is collected.
              </label>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Services } from "../../components/Services";
import { Clients } from "../../components/Clients";
import { WhyChooseUs } from "../../components/WhyChooseUs";
import { WorkSteps } from "../../components/WorkSteps";
import { Contact } from "../../components/Contact";
import { Testimonials } from "../../components/Testimonials";
import { Footer } from "../../components/Footer";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <WhyChooseUs />
      <WorkSteps />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
};
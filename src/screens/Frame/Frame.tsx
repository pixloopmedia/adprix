import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

export const Frame = (): JSX.Element => {
  const navigationItems = [
    "Home",
    "About",
    "Portfolio",
    "Service & Support",
    "Contact Us",
  ];

  const statistics = [
    { number: "2350+", label: "Project Completed" },
    { number: "1500+", label: "Happy Clients" },
    { number: "16895+", label: "Cup Of Coffee Consumed" },
    { number: "10+", label: "Experience" },
  ];

  const services = [
    {
      title: "LED Display Screen",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.",
      icon: "/vector-smart-object-3.png",
    },
    {
      title: "Signage Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.",
      icon: "/vector-smart-object-2.png",
    },
    {
      title: "Events & exhibitions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.",
      icon: "/vector-smart-object-1.png",
    },
  ];

  const clientLogos = [
    { src: "/layer-26.png", alt: "Client logo" },
    { src: "/layer-27.png", alt: "Client logo" },
    { src: "/layer-28.png", alt: "Client logo" },
    { src: "/layer-29.png", alt: "Client logo" },
    { src: "/layer-34-2.png", alt: "Client logo" },
    { src: "/layer-31.png", alt: "Client logo" },
    { src: "/layer-33.png", alt: "Client logo" },
  ];

  const features = [
    {
      title: "Value for Money",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: "/vector-smart-object-4.png",
    },
    {
      title: "Network of Offices to Support our Clients",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: "/vector-smart-object-5.png",
    },
    {
      title: "One Stop Integrated Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: "/vector-smart-object-6.png",
    },
    {
      title: "10+ Years Experience in the Region",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      icon: "/vector-smart-object-7.png",
    },
  ];

  const workSteps = [
    {
      number: "1",
      title: "Information Collection",
      icon: "/vector-smart-object-8.png",
    },
    {
      number: "2",
      title: "Concept Design",
      icon: "/vector-smart-object-13.png",
    },
    {
      number: "3",
      title: "Cost Estimation",
      icon: "/vector-smart-object-14.png",
    },
    {
      number: "4",
      title: "Product Prototyping",
      icon: "/vector-smart-object-15.png",
    },
    {
      number: "5",
      title: "Product Production",
      icon: "/vector-smart-object-16.png",
    },
    {
      number: "6",
      title: "Logistics Operation",
      icon: "/vector-smart-object-17.png",
    },
  ];

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Joe Marvin",
      position: "company seo",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Kate Johnson",
      position: "company seo",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Joe Marvin",
      position: "company seo",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      name: "Joe Marvin",
      position: "company seo",
    },
  ];

  const branches = [
    {
      title: "Branche: 1",
      address: "Jeddah Saudi Arabia, P.O Box-22234\nKingdom of Saudi Arabia",
      phone: "+966 5588 14663  |  +966 5588 14663",
      email: "sales@adprixarabia.com",
    },
    {
      title: "Branche: 2",
      address: "Dammam Saudi Arabia, P.O Box-32242\nKingdom of Saudi Arabia",
      phone: "+966 5588 14663",
      email: "sales@adprixarabia.com",
    },
    {
      title: "Branche: 3",
      address: "Bay Square-Dubai, Marasi Dr-Business\nBay United Arab Emirates",
      phone: "",
      email: "sales@adprixarabia.com",
    },
    {
      title: "Branche: 4",
      address:
        "Xinhe Xinxing Industrial Park, Baoan\nDistrict, Shenzhen Guangdong, China",
      phone: "",
      email: "sales@adprixarabia.com",
    },
  ];

  const footerLinks = {
    links: ["Home", "About", "What We Do"],
    portfolio: ["Portfolio", "Maintenance", "Contact Us"],
    services: [
      "LED Display Screen",
      "Signage Solutions",
      "Events & exhibitions",
    ],
    social: ["Twitter", "Facebook", "Instagram"],
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="relative w-full">
        <img
          className="absolute w-full h-[9431px] top-0 left-0"
          alt="Layer"
          src="/layer-0.png"
        />

        <div className="absolute w-full h-[1191px] top-0 left-0">
          <img
            className="absolute w-full h-[1191px] top-0 left-0"
            alt="Layer"
            src="/layer-45.png"
          />
        </div>

        <img
          className="absolute w-full h-[475px] top-0 left-0"
          alt="Layer"
          src="/layer-46.png"
        />

        <img
          className="absolute w-full h-[1913px] top-0 left-0"
          alt="Layer"
          src="/layer-47.png"
        />

        <img
          className="w-full h-[2330px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-10.svg"
        />

        <header className="relative z-10">
          <img
            className="absolute w-[247px] h-[66px] top-[60px] left-[171px]"
            alt="Vector smart object"
            src="/vector-smart-object.png"
          />

          <nav className="absolute top-[84px] left-[1096px]">
            <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px] whitespace-nowrap">
              {navigationItems.join("          ")}
            </div>
          </nav>

          <div className="absolute w-[127px] h-[152px] top-[474px] left-[1844px]">
            <img
              className="absolute w-[127px] h-[152px] top-0 left-0"
              alt="Rectangle"
              src="/rectangle-16.svg"
            />
            <img
              className="absolute w-[77px] h-px top-[76px] left-0"
              alt="Layer"
              src="/layer-52.png"
            />
            <img
              className="absolute w-[45px] h-[45px] top-[17px] left-3"
              alt="Layer"
              src="/layer-53.png"
            />
            <img
              className="absolute w-[45px] h-[45px] top-[92px] left-3"
              alt="Layer"
              src="/layer-54.png"
            />
          </div>
        </header>

        <section className="relative z-10">
          <h1 className="absolute top-[631px] left-[168px] [font-family:'Poppins',Helvetica] font-bold text-white text-[78px] tracking-[0] leading-[79.6px]">
            Creative Solutions for
            <br />
            Modern Brands.
          </h1>

          <p className="w-[839px] top-[805px] left-[171px] text-white leading-[31.6px] absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse
          </p>

          <Button className="absolute top-[918px] left-[172px] h-[50px] w-[193px] bg-transparent border-0 p-0">
            <img
              className="w-[193px] h-[50px]"
              alt="Rectangle"
              src="/rectangle-1.svg"
            />
            <span className="absolute inset-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px]">
              Contact Us
            </span>
          </Button>
        </section>

        <section className="relative z-10">
          <h2 className="absolute top-[1204px] left-[169px] [font-family:'Poppins',Helvetica] font-bold text-black text-[64px] tracking-[0.03px] leading-[77.6px]">
            Turning Screens Into
            <br />
            Stories & Events Into
            <br />
            Experiences
          </h2>

          <div className="top-[1290px] left-[1081px] text-[238px] tracking-[0.93px] leading-[238.0px] absolute [font-family:'Poppins',Helvetica] font-medium text-black whitespace-nowrap">
            10
          </div>

          <div className="absolute top-[1403px] left-[1329px] [font-family:'Poppins',Helvetica] font-normal text-black text-[35px] tracking-[9.10px] leading-[45.6px]">
            Years
            <br />
            Experience
          </div>

          <p className="w-[677px] top-[1526px] left-[1091px] text-black absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.
            <br />
            <br />
            Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut.
          </p>

          <Button className="absolute top-[1811px] left-[1093px] h-[49px] w-48 bg-transparent border-0 p-0">
            <img
              className="w-48 h-[49px]"
              alt="Rectangle copy"
              src="/rectangle-1-copy-3.svg"
            />
            <span className="absolute inset-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px]">
              Know More
            </span>
          </Button>
        </section>

        <Separator className="absolute w-[1576px] h-px top-[1982px] left-[170px] bg-black border border-solid opacity-20" />

        <section className="relative z-10">
          <div className="flex justify-between items-center absolute top-[2107px] left-[170px] w-[1576px]">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-[54px] leading-[54px] tracking-[0]">
                  {stat.number}
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6 mt-[12px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <img
          className="w-[959px] h-[1860px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2.svg"
        />

        <section className="relative z-10">
          <h2 className="absolute top-[2448px] left-[170px] [font-family:'Poppins',Helvetica] font-bold text-black text-[64px] tracking-[0.06px] leading-[77.6px]">
            Solutions That
            <br />
            Move You Forward
          </h2>

          <p className="w-[772px] top-[2506px] left-[982px] text-black absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <div className="absolute top-[2722px] left-[214px] flex gap-[319px]">
            {services.map((service, index) => (
              <Card
                key={index}
                className="w-[425px] bg-transparent border-0 shadow-none"
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 mb-[86px] relative">
                    <img
                      className="w-20 h-20"
                      alt="Rectangle"
                      src="/rectangle-14-copy.svg"
                    />
                    <img
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      alt="Vector smart object"
                      src={service.icon}
                    />
                  </div>

                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[30px] mb-[25px]">
                    {service.title}
                  </h3>

                  <p className="w-[421px] text-black [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px] mb-[79px]">
                    {service.description}
                  </p>

                  <Separator className="w-[425px] h-px mb-[63px] bg-black" />

                  <div className="flex items-center gap-4">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#ec4926] text-lg tracking-[0] leading-[18px]">
                      Know More
                    </span>
                    <div className="w-[43px] h-[43px] relative">
                      <img
                        className="w-[43px] h-[43px]"
                        alt="Ellipse"
                        src="/ellipse-1.svg"
                      />
                      <img
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-[18px]"
                        alt="Vector smart object"
                        src="/vector-smart-object-copy-9.png"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <img
          className="w-full h-[4285px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-8.svg"
        />

        <section className="relative z-10">
          <h2 className="absolute top-[3654px] left-[170px] [font-family:'Poppins',Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[77.6px]">
            Trusted by
            <br />
            our Customers
          </h2>

          <p className="w-[578px] top-[3833px] left-[171px] text-black absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices.
          </p>

          <div className="absolute top-[3416px] left-[948px] grid grid-cols-3 gap-[11px]">
            {clientLogos.map((logo, index) => (
              <Card
                key={index}
                className="w-[252px] h-[280px] bg-transparent border-0 shadow-none"
              >
                <CardContent className="p-0 flex items-center justify-center h-full">
                  <img
                    className="max-w-full max-h-full object-contain"
                    alt={logo.alt}
                    src={logo.src}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <img
          className="w-full h-[5304px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-9.svg"
        />

        <section className="relative z-10 bg-gradient-to-b from-transparent to-black">
          <img
            className="absolute w-full h-[1635px] top-[5197px] left-0"
            alt="Rectangle"
            src="/rectangle-11.svg"
          />

          <h2 className="absolute top-[4309px] left-[170px] [font-family:'Poppins',Helvetica] font-bold text-white text-[64px] tracking-[0] leading-[64px] whitespace-nowrap">
            Why Choose us
          </h2>

          <p className="w-[651px] top-[4395px] left-[171px] text-white absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="absolute top-[4522px] left-[173px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-[28px] mb-[148px]"
              >
                <div className="w-[70px] h-[71px] relative flex-shrink-0">
                  <img
                    className="w-[70px] h-[71px]"
                    alt="Rectangle"
                    src="/rectangle-4-copy.svg"
                  />
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    alt="Vector smart object"
                    src={feature.icon}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[30px] mb-[42px]">
                    {feature.title}
                  </h3>
                  <p className="w-[528px] text-white [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10">
          <h2 className="absolute top-[5312px] left-[168px] [font-family:'Poppins',Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[77.6px]">
            Discover our
            <br />
            latest projects
          </h2>

          <p className="w-[660px] top-[5353px] left-[758px] text-black absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Button className="absolute top-[5358px] left-[1526px] h-[49px] w-[222px] bg-transparent border-0 p-0">
            <img
              className="w-[222px] h-[49px]"
              alt="Rectangle copy"
              src="/rectangle-1-copy-3.svg"
            />
            <span className="absolute inset-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px]">
              View all Projects
            </span>
          </Button>

          <div className="absolute top-[6030px] left-[215px] flex gap-[319px]">
            <div className="w-[422px] h-[70px]">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-[35px]">
                Lorem ipsum de
                <br />
                set amet
              </div>
              <div className="absolute w-[142px] h-[63px] top-px left-[278px] bg-white rounded-[15px]">
                <img
                  className="absolute w-[87px] h-[38px] top-3.5 left-6"
                  alt="Layer"
                  src="/layer-34-1.png"
                />
              </div>
            </div>

            <div className="w-[425px] h-[72px]">
              <div className="top-0.5 [font-family:'Poppins',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-[35px]">
                Lorem ipsum de
                <br />
                set amet
              </div>
              <div className="absolute w-[142px] h-[63px] top-0 left-[281px] bg-white rounded-[15px]">
                <img
                  className="absolute w-[121px] h-9 top-[15px] left-[7px]"
                  alt="Layer"
                  src="/layer-34-2.png"
                />
              </div>
            </div>

            <div className="w-[425px] h-[71px]">
              <div className="top-px [font-family:'Poppins',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-[35px]">
                Lorem ipsum de
                <br />
                set amet
              </div>
              <div className="absolute w-[142px] h-[63px] top-0 left-[281px] bg-white rounded-[15px]">
                <img
                  className="absolute w-[87px] h-[38px] top-3.5 left-6"
                  alt="Layer"
                  src="/layer-34-3.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10">
          <h2 className="absolute top-[6266px] left-[734px] [font-family:'Poppins',Helvetica] font-bold text-black text-[64px] tracking-[0.06px] leading-[64px] whitespace-nowrap">
            Steps of Work
          </h2>

          <div className="absolute top-[6390px] left-[173px] flex gap-[14px]">
            {workSteps.map((step, index) => (
              <Card
                key={index}
                className="w-[251px] h-[277px] bg-transparent border-0 shadow-none"
              >
                <CardContent className="p-0 relative">
                  <img
                    className="w-[251px] h-[277px]"
                    alt="Rectangle copy"
                    src="/rectangle-2-copy-10.svg"
                  />

                  <div className="absolute top-[38px] left-[29px] w-[69px] h-[69px]">
                    <img
                      className="w-[69px] h-[69px]"
                      alt="Rectangle"
                      src="/rectangle-15.svg"
                    />
                    <img
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      alt="Vector smart object"
                      src={step.icon}
                    />
                  </div>

                  <div className="absolute top-[21px] right-[27px] w-[33px] h-8">
                    <img
                      className="w-[33px] h-8"
                      alt="Rectangle copy"
                      src="/rectangle-2-copy-13.svg"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15px] tracking-[0] leading-[15px] [font-family:'Poppins',Helvetica] font-medium text-black">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="absolute top-[172px] left-[28px] [font-family:'Poppins',Helvetica] font-bold text-black text-[26px] tracking-[0] leading-[34.6px]">
                    {step.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word}
                        {i < step.title.split(" ").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <img
          className="w-full h-[7915px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-12.svg"
        />

        <section className="relative z-10">
          <h2 className="absolute top-[7074px] left-[1031px] [font-family:'Poppins',Helvetica] font-bold text-white text-[64px] tracking-[0.06px] leading-[64px] whitespace-nowrap">
            Get In Touch!
          </h2>

          <p className="w-[660px] top-[7154px] left-[1033px] text-white absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form className="absolute top-[7267px] left-[1033px] w-[615px]">
            <div className="mb-[46px]">
              <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px] block mb-[20px]">
                Name
              </label>
              <Input className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 text-white placeholder:text-white/60" />
            </div>

            <div className="mb-[46px]">
              <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px] block mb-[20px]">
                Email
              </label>
              <Input className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 text-white placeholder:text-white/60" />
            </div>

            <div className="mb-[46px]">
              <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px] block mb-[20px]">
                Phone
              </label>
              <Input className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 text-white placeholder:text-white/60" />
            </div>

            <div className="mb-[74px]">
              <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0.14px] leading-[18px] block mb-[20px]">
                Message
              </label>
              <Textarea className="w-full bg-transparent border-0 border-b border-white/20 rounded-none p-0 text-white placeholder:text-white/60 resize-none" />
            </div>

            <div className="flex items-center gap-[34px] mb-[49px]">
              <Checkbox className="w-[23px] h-[23px] border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
              <label className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px]">
                I agree that my data is collected.
              </label>
            </div>

            <Button className="h-[49px] w-[222px] bg-transparent border-0 p-0">
              <img
                className="w-[222px] h-[49px]"
                alt="Rectangle copy"
                src="/rectangle-1-copy-3.svg"
              />
              <span className="absolute inset-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[18px]">
                Send Message
              </span>
            </Button>
          </form>
        </section>

        <img
          className="absolute w-full h-[946px] top-[7791px] left-0"
          alt="Rectangle"
          src="/rectangle-11.svg"
        />

        <section className="relative z-10">
          <h2 className="absolute top-[7907px] left-[684px] [font-family:'Poppins',Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[64px] whitespace-nowrap">
            What People Say
          </h2>

          <div className="absolute top-[8043px] left-[172px] flex gap-[45px]">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={index}
                className="w-[495px] h-[402px] bg-transparent border-0 shadow-none"
              >
                <CardContent className="p-0 relative">
                  <img
                    className="w-[495px] h-[402px]"
                    alt="Rectangle copy"
                    src="/rectangle-2-copy-23.svg"
                  />

                  <blockquote className="w-[402px] absolute top-[50px] left-[40px] text-black leading-[29.6px] [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0]">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="absolute bottom-[49px] left-[165px]">
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl leading-6 tracking-[0.09px]">
                      {testimonial.name}
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0.07px] leading-[18px] mt-[29px]">
                      {testimonial.position}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="absolute top-[8492px] left-[914px] flex gap-[49px] items-center">
            <img
              className="w-[17px] h-[17px]"
              alt="Ellipse copy"
              src="/ellipse-2-copy-4.svg"
            />
            <img
              className="w-[39px] h-[15px]"
              alt="Rectangle"
              src="/rectangle-6.svg"
            />
            <img
              className="w-[17px] h-[17px]"
              alt="Ellipse copy"
              src="/ellipse-2-copy-4.svg"
            />
          </div>
        </section>

        <img
          className="absolute w-full h-[9431px] top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-7.svg"
        />

        <footer className="relative z-10 bg-black">
          <img
            className="absolute w-[267px] h-[71px] top-[8768px] left-[172px]"
            alt="Vector smart object"
            src="/vector-smart-object-9.png"
          />

          <p className="w-[501px] top-[8875px] left-[171px] text-white absolute [font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[29.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>

          <div className="absolute top-[8761px] left-[916px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[26px] mb-[63px]">
              Services
            </h3>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[34.0px]">
              {footerLinks.services.map((service, index) => (
                <div key={index}>{service}</div>
              ))}
            </div>
          </div>

          <div className="absolute top-[8761px] left-[1224px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[26px] mb-[63px]">
              Links
            </h3>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[34.0px]">
              {footerLinks.links.map((link, index) => (
                <div key={index}>{link}</div>
              ))}
            </div>
          </div>

          <div className="absolute top-[8824px] left-[1380px] [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[34.0px]">
            {footerLinks.portfolio.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>

          <div className="absolute top-[8761px] left-[1628px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[26px] tracking-[0.10px] leading-[26px] mb-[63px]">
              Follow Us
            </h3>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[34.0px]">
              {footerLinks.social.map((social, index) => (
                <div key={index}>{social}</div>
              ))}
            </div>
          </div>

          <div className="absolute top-[9073px] left-[170px] grid grid-cols-4 gap-[231px]">
            {branches.map((branch, index) => (
              <div key={index}>
                <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] leading-[22px] tracking-[0.09px] mb-[37px]">
                  {branch.title}
                </h4>

                <div className="flex items-start gap-[19px] mb-[37px]">
                  <img
                    className="w-2.5 h-4 mt-1"
                    alt="Vector smart object"
                    src="/vector-smart-object-copy-4-1.png"
                  />
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[26.0px]">
                    {branch.address.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>

                {branch.phone && (
                  <div className="flex items-center gap-[19px] mb-[37px]">
                    <img
                      className="w-[13px] h-[13px]"
                      alt="Vector smart object"
                      src="/vector-smart-object-copy-2.png"
                    />
                    <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[17px]">
                      {branch.phone}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-[19px]">
                  <img
                    className="w-3.5 h-2.5"
                    alt="Vector smart object"
                    src="/vector-smart-object-copy-4.png"
                  />
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[17px]">
                    {branch.email}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="absolute w-[1576px] h-px top-[9347px] left-[173px] bg-white/20" />

          <div className="absolute top-[9381px] left-[696px] [font-family:'Poppins',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[17px] whitespace-nowrap">
            © 2025 Adprix Arabia. All Rights Reserved | Designed By Weboft
          </div>
        </footer>

        <img
          className="absolute w-[139px] h-[123px] top-[8325px] left-0"
          alt="Layer"
          src="/layer-2.png"
        />

        <img
          className="w-[678px] h-[3264px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy.svg"
        />

        <img
          className="w-[1213px] h-[3264px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-2.svg"
        />

        <img
          className="w-[1747px] h-[3264px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-3.svg"
        />

        <img
          className="w-[678px] h-[6145px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-4.svg"
        />

        <img
          className="w-[1203px] h-[6145px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-5.svg"
        />

        <img
          className="w-[1728px] h-[6145px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-6.svg"
        />

        <img
          className="w-full h-[6145px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-7.svg"
        />

        <img
          className="w-full h-[7881px] absolute top-0 left-0"
          alt="Clipping rectangle"
          src="/clipping---rectangle-2-copy-18.svg"
        />

        <img
          className="absolute w-[313px] h-[8401px] top-0 left-0"
          alt="Clipping ellipse"
          src="/clipping---ellipse-2.svg"
        />

        <img
          className="absolute w-[852px] h-[8401px] top-0 left-0"
          alt="Clipping ellipse"
          src="/clipping---ellipse-2-copy.svg"
        />

        <img
          className="w-[1393px] absolute h-[8401px] top-0 left-0"
          alt="Clipping ellipse"
          src="/clipping---ellipse-2-copy-2.svg"
        />

        <img
          className="w-full absolute h-[8401px] top-0 left-0"
          alt="Clipping ellipse"
          src="/clipping---ellipse-2-copy-5.svg"
        />

        <img
          className="absolute w-[494px] h-[401px] top-[8044px] left-[1793px]"
          alt="Rectangle copy"
          src="/rectangle-2-copy-23.svg"
        />

        <div className="w-[402px] left-[1832px] absolute top-[8093px] [font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0] leading-[29.6px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse."
        </div>

        <div className="left-[1957px] tracking-[0.09px] absolute top-[8324px] [font-family:'Poppins',Helvetica] font-semibold text-black text-2xl leading-6 whitespace-nowrap">
          Joe Marvin
        </div>

        <div className="left-[1957px] absolute top-[8353px] [font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0.07px] leading-[18px] whitespace-nowrap">
          company seo
        </div>
      </div>
    </div>
  );
};

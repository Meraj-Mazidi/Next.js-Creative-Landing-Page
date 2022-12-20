import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import GoogleLogo from "../assets/images/google.png";
import DropboxLogo from "../assets/images/dropbox.png";
import PaypalLogo from "../assets/images/paypal.png";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const clientLogo = [
    {
      id: 1,
      logo: PaypalLogo,
      alt: "paypal-logo",
    },
    {
      id: 2,
      logo: GoogleLogo,
      alt: "google-logo",
    },
    {
      id: 3,
      logo: DropboxLogo,
      alt: "dropbox-logo",
    },
  ];

  return (
    <header className="relative w-screen h-screen content" id="home">
      {/* Background Image */}
      <div
        className="absolute top-0 hero-bg bg-cover bg-center w-full h-screen"
        ref={ref}
      >
        {/* Content */}
        <div
          className="w-full lg:w-[48%] lg:h-[85%] mt-24 px-5 lg:ml-20 md:flex md:justify-center lg:block"
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="flex flex-col gap-8 sm:gap-5 md:gap-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-big-titles font-arvo md:w-[50rem] lg:w-full lg:leading-normal">
              A Creative way to grow your Exciting Business ideas
            </h1>
            <p className="text-[#02073e] text-sm sm:text-lg lg:ml-8 leading-loose font-dm md:w-[40rem] md:ml-20">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>

            <div className="flex flex-row gap-5 sm:justify-center">
              <input
                type="email"
                placeholder="Enter Email address"
                className="py-4 px-3 w-[23rem] rounded-md drop-shadow-md hover:drop-shadow-2xl outline-none focus:outline-[#56bbd0] focus:outline-4 transition-all duration-300 ease-in-out"
              />
              <button className="bg-[#56bbd0] w-44 rounded-md text-white font-bold text-xs sm:text-lg drop-shadow-md hover:drop-shadow-xl hover:bg-[#02073e] transition-all duration-700 ease-in-out">
                Get Started
              </button>
            </div>

            <div className="flex flex-row gap-6 w-full items-center justify-center">
              <p className="text-[#787d83]">Our Clients</p>
              {clientLogo.map((item) => (
                <Image
                  key={item.id}
                  src={item.logo}
                  alt={item.alt}
                  className="object-contain"
                  width="auto"
                  height="auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

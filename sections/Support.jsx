import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import SupportImg from "../assets/images/support.png";
import { SupportBullets } from "../Components";

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="w-screen" ref={ref}>
      {/* Container */}
      <div className="py-20 px-5 lg:px-20 flex lg:flex-row flex-col">
        {/* Left side */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center"
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image
            src={SupportImg}
            alt="SupportImg"
            className="object-contain md:w-[80%] lg:w-full"
            width="auto"
            height="auto"
          />
        </div>

        {/* Right Side */}
        <div
          className="w-full lg:w-1/2 md:px-20 lg:px-5 lg:pr-10 pt-5 flex flex-col gap-8 sm:text-center lg:text-left"
          style={{
            transform: isInView ? "none" : "translateX(300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2 className="text-3xl font-bold leading-relaxed text-big-titles font-arvo">
            Customer support is our main priority with their hundred percent
            satisfaction.
          </h2>
          <p className="text-md leading-loose font-dm">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
          </p>
          <div className="w-82 h-32">
            <SupportBullets />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

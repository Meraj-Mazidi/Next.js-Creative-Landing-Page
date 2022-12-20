import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import clientsLogos from "../assets/images/clients.png";
import { Link } from "../Components";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  

  return (
    <section className="w-screen h-auto">
      <div className="py-16 pt-28 flex flex-col gap-5" ref={ref}>
        {/* Title */}
        <div className="flex flex-col gap-6 text-center justify-center items-center">
          <p
            className="text-text-blue-small font-semibold text-xl font-dm"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Meet our Partners
          </p>
          <h3
            className="font-arvo font-bold text-2xl text-big-titles"
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Companies who also worked with us
          </h3>
          <p
            className="font-dm"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Every email, web page, and social media post makes an impression on
            your <br /> customers. With our software you can be confident on
            it's impression.
          </p>
          <Link path={"#"} text={"Explore Details"} styles={"text-lg"} />
        </div>

        {/* Content */}
        <div
          className="px-0 lg:px-20"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image
            src={clientsLogos}
            alt="clients-logo"
            className="object-contain w-full"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { FooterMenu, FooterNav } from "../Components";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <footer className="bg-gray-bg w-screen h-auto mt-10 pb-5 md:pb-0" ref={ref}>
      <div
        className="px-1 lg:px-28 pt-10 w-full flex flex-col justify-center md:block"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <FooterMenu />
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;

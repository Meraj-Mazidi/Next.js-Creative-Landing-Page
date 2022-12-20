import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/images/logooo.jpg";
import Sticky from "react-stickynode";
import NavDrawer from "./NavDrawer";

const navData = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "features",
    label: "Feature",
  },
  {
    path: "pricing",
    label: "Pricing",
  },
  {
    path: "support",
    label: "Support",
  },
  {
    path: "testimonials",
    label: "Testimonials",
  },
  {
    path: "blog",
    label: "Blog",
  },
  {
    path: "faq",
    label: "Faq",
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const size = useWindowSize();
  let isMobile = size.width < 900 ? true : false;

  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setIsSticky(true)
      : setIsSticky(false);
  };

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  return (
    <Sticky
      enabled={true}
      top={0}
      innerZ={100}
      activeClass="w-screen"
      onStateChange={handleStateChange}
    >
      <div
        className={`w-screen py-3 absolute top-0 right-0 left-0 transition-all duration-700 ${
          isSticky ? "bg-white/95 drop-shadow-xl py-6" : "bg-transparent"
        }`}
        id="navbar"
      >
        <nav
          className={`flex flex-row ml-20 gap-8 items-center ${
            isMobile && " justify-around"
          }`}
        >
          <span>
            <Image
              priority={true}
              src={Logo}
              alt="Logo"
              className="rounded-xl"
              width="144"
              height="auto"
            />
          </span>

          <span>
            {isMobile ? (
              <NavDrawer data={navData} />
            ) : (
              <ul className="flex gap-5 ml-10">
                {navData.map((nav, i) => (
                  <li key={i} className="first-of-type:text-blue-800">
                    <a
                      href={`#${nav.path}`}
                      className="hover:text-blue-800 cursor-pointer font-dm"
                    >
                      {nav.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </nav>
      </div>
    </Sticky>
  );
};

export default Navbar;

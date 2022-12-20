import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "../assets/images/logooo.jpg";

const NavDrawer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>
        <FiMenu className="text-2xl hover:text-text-blue-small transition-all duration-300" />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" size={300}>
        <div className="flex flex-col py-5 h-full justify-between">
          <div className="flex flex-col gap-5">
            <span className="flex justify-around items-center">
              <Image
                src={Logo}
                alt="logo"
                width="auto"
                height="auto"
                className="w-1/2 "
              />
              <FiX
                className="text-2xl cursor-pointer text-gray-600 hover:text-black"
                onClick={toggleDrawer}
              />
            </span>

            <ul className="px-8 mt-5">
              {data.map((nav, i) => (
                <a href={`#${nav.path}`} key={i} onClick={toggleDrawer}>
                  <li className="font-dm border-t border-b py-3 text-sm text-gray-500 hover:text-black hover:border-b-2 hover:border-b-text-blue-small transition-all duration-300">
                    {nav.label}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          <span className="w-full flex justify-center">
            <button
              className="w-56 h-11 bg-text-blue-small rounded text-white font-arvo font-bold text-sm"
              onClick={toggleDrawer}
            >
              Donate Now
            </button>
          </span>
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;

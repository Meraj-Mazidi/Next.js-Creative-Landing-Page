import React from "react";
import { footerNav } from "./footerData";
import Logo from "../assets/images/logooo.jpg";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";

const FooterNav = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-around lg:justify-between border-t-2 my-8 py-0 items-center pt-3 mx-0 gap-5 md:gap-0">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 items-center">
        <Image
          priority={false}
          src={Logo}
          alt="logo"
          width={200}
          className="object-contain pt-1"
        />
        <span className="flex items-center gap-1">
          <p className="text-gray-400 font-dm text-xs pt-2 hover:text-black hover:underline">
            <a
              href="https://meraj-main-portfolio.pages.dev/"
              rel="noreferrer"
              target="_blank"
            >
              Copyright by 2022, by{" "}
              <span className="font-bold text-gray-900 animate-pulse">
                Meraj Mazidi
              </span>
            </a>
          </p>
          <span>
            <a
              href="https://meraj-main-portfolio.pages.dev/"
              rel="noreferrer"
              target="_blank"
            >
              <CgWebsite className="mt-2" />
            </a>
          </span>
        </span>
      </div>

      <ul className="flex flex-row flex-wrap gap-4 w-full md:w-auto justify-center px-3 md:px-0">
        {footerNav.map((item, i) => (
          <li className="font-dm text-md hover:text-text-blue-small" key={i}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;

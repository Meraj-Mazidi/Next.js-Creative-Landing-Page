import React from "react";
import Image from "next/image";
import Icon1 from "../assets/images/icons/1.png";
import Icon2 from "../assets/images/icons/2.png";
import { FiArrowRight } from "react-icons/fi";

const supportTwoData = [
  {
    icon: Icon1,
    title: "Email client support",
    desc: "Ultimate access to all credit popular exercises and assessments materials",
  },
  {
    icon: Icon2,
    title: "Live ticket support",
    desc: "Total assessment corrections with live support tickets download access system",
  },
];

const SupportTwoDetail = () => {
  return (
    <div className="flex flex-col">
      {supportTwoData.map((item, i) => (
        <div
          className="flex gap-5 p-5 rounded-xl hover:drop-shadow-lg hover:shadow-lg cursor-pointer"
          key={i}
        >
          <Image
            src={item.icon}
            alt="icon"
            className="object-contain"
            width="auto"
            height="auto"
          />
          <span>
            <span className="flex gap-2 items-center">
              <p className="font-bold font-dm text-[#313131] text-base">
                {item.title}
              </p>
              <FiArrowRight className="mt-1" />
            </span>
            <p className="font-dm text-sm">{item.desc}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default SupportTwoDetail;

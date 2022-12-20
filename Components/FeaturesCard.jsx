import React from "react";
import Image from "next/image";
import { Link } from "../Components";

const FeaturesCard = ({ card }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 h-96 border flex flex-col justify-center hover:bg-white hover:drop-shadow-2xl hover:border-none transition-all duration-500 ease-in-out">
      <span className="px-8 py-10 flex flex-col gap-8">
        <Image
          src={card.icon}
          alt="card-icon"
          className="w-16"
          width="auto"
          height="auto"
        />
        <span>
          <p className="font-semibold text-lg mb-2">{card.title}</p>
          <p className="leading-8 text-sm font-dm">{card.description}</p>
        </span>
        <Link path={"#"} text={"Learn More"} />
      </span>
    </div>
  );
};

export default FeaturesCard;

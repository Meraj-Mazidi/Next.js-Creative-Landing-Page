import React from "react";
import Image from "next/image";

const TestimonialsCard = ({ image, text, name, username }) => {
  return (
    <div className="bg-white rounded-md mb-5 p-5 shadow-lg">
      <p className="font-dm leading-loose">{text}</p>
      <div className="flex gap-4 pt-5">
        <Image
          src={image}
          alt="user-profile"
          className="object-cover"
          width="50"
          height="auto"
        />
        <div>
          <p className="font-bold font-dm">{name}</p>
          <p className="font-semibold text-blue-500 hover:underline underline-offset-4 cursor-pointer font-dm">
            {username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

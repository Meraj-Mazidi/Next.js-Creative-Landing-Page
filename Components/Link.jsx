import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Link = ({ path, text, styles }) => {
  return (
    <span className="flex items-center gap-1 hover:gap-3 transition-all duration-500">
      <a
        href={path}
        className={`text-darker-blue font-semibold text-sm font-dm ${styles}`}
      >
        {text}
      </a>
      <FiChevronRight className="text-md text-darker-blue" />
    </span>
  );
};

export default Link;

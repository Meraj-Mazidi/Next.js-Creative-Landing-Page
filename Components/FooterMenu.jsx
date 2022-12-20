import React from "react";
import { menuItems } from "./footerData";

const FooterMenu = () => {
  return (
    <div className="flex justify-around flex-wrap">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-5 px-0 md:px-5 py-6" key={item.id}>
          <p className="font-dm font-semibold text-lg mb-3">{item.title}</p>
          <ul className="flex flex-col gap-4 font-dm text-sm text-gray-500">
            {item.items.map((list, i) => (
              <li className="hover:text-black cursor-pointer" key={i}>
                <a href="#">{list.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;

import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      {Children}
    </>
  );
};

export default Layout;

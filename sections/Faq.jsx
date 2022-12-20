import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { FaqQuestions } from "../Components";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section id="faq" className="w-screen h-auto" ref={ref}>
      <div className="py-10 pt-8 px-5 lg:px-32 flex flex-col gap-10">
        {/* Title */}
        <div className="flex flex-col text-center gap-5">
          <p
            className="text-text-blue-small font-semibold text-lg font-dm"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Get your question answer
          </p>
          <h3
            className="font-arvo font-bold text-xl md:text-2xl text-big-titles"
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Frequently asked question
          </h3>
        </div>

        {/* Questions */}
        {domLoaded && <FaqQuestions />}

        <span className="flex justify-center">
          <button className="font-dm font-bold text-sm bg-gray-100 py-4 px-5 rounded-lg shadow-md text-gray-500 hover:bg-text-blue-small hover:text-white hover:shadow-xl transition-all duration-500">
            Still Questions? Contact Us
          </button>
        </span>
      </div>
    </section>
  );
};

export default Faq;

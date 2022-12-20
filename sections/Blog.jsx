import React, { useRef } from "react";
import { BlogCards } from "../Components";
import { useInView } from "framer-motion";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="blog" className="w-screen h-auto">
      <div className="py-16 px-10 flex flex-col gap-5 justify-center" ref={ref}>
        {/* title */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-text-blue-small font-semibold text-xl font-dm"
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Latest newsfeed
          </p>
          <h3
            className="font-arvo font-bold text-2xl text-big-titles"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Our recent blog post that updated
          </h3>
        </div>

        {/* Content - Blog Posts */}
        <div
          className="mx-0 lg:mx-16 h-auto my-10 p-0 lg:p-5"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <BlogCards />
        </div>
      </div>
    </section>
  );
};

export default Blog;

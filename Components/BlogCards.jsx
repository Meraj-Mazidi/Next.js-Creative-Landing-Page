import React from "react";
import Image from "next/image";
import { Link } from "../Components";
import blogImage1 from "../assets/images/blog/1.png";
import blogImage2 from "../assets/images/blog/2.png";
import blogImage3 from "../assets/images/blog/3.png";
import blogImage4 from "../assets/images/blog/4.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "Introducing our newest team with great experience",
    description:
      "Brian Halligan knows that you need more than a great product to have a great brand.",
    path: "/",
    linkLabel: "Learn More",
  },
  {
    image: blogImage2,
    title:
      "New banking application has developed and we expecting good feedback",
    description: null,
    path: "/",
    linkLabel: "Learn More",
  },
];

const BLOG_DATA2 = [
  {
    image: blogImage3,
    title: "Develop you design experience with figma features.",
    description: null,
    path: "/",
    linkLabel: null,
  },
  {
    image: blogImage4,
    title: "Ui/UX industry are doing great job in previous year history",
    description: null,
    path: "/",
    linkLabel: null,
  },
];

const BlogCards = () => {
  return (
    <section className="flex flex-col md:flex-row gap-16 md:gap-5 w-full">
      {/* First Two posts */}
      {BLOG_DATA.map((card, i) => (
        <article key={i} className="flex flex-col gap-5 lg:w-1/3 w-full">
          <Image
            src={card.image}
            alt="blog-img"
            className="object-contain rounded-lg"
            width="auto"
            height="auto"
          />
          <p className="font-semibold font-arvo text-xl md:text-lg lg:text-xl">
            {card.title}
          </p>
          {card.description !== null && (
            <p className="font-dm text-sm">{card.description}</p>
          )}

          {card.linkLabel !== null && <Link path={"#"} text={"Learn More"} />}
        </article>
      ))}

      {/* Second two posts */}
      <article className="flex flex-col gap-16 md:gap-5 lg:w-1/3 w-full">
        {BLOG_DATA2.map((card, i) => (
          <span key={i}>
            <Image
              src={card.image}
              alt="blog-img"
              className="object-contain rounded-lg"
              width="auto"
              height="auto"
            />
            <p className="font-semibold font-arvo text-xl md:text-lg lg:text-xl mt-4">
              {card.title}
            </p>
          </span>
        ))}
      </article>
    </section>
  );
};

export default BlogCards;

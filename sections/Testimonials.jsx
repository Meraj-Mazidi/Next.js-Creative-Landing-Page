import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { TestimonialsCard } from "../Components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import testimonialsImage1 from "../assets/images/Testimonials/testimonial-1-1.png";
import testimonialsImage2 from "../assets/images/Testimonials/testimonial-1-2.png";
import testimonialsImage3 from "../assets/images/Testimonials/testimonial-1-3.png";
import testimonialsImage4 from "../assets/images/Testimonials/testimonial-1-4.png";
import testimonialsImage5 from "../assets/images/Testimonials/testimonial-1-5.png";
import testimonialsImage6 from "../assets/images/Testimonials/testimonial-1-6.png";

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.",
      username: "@hello.mimmie",
      name: "Minnie Horn",
    },
    {
      image: testimonialsImage2,
      text: "Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.",
      username: "@merryn.manley",
      name: "Merryn Manley",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
      username: "@hi.veona",
      name: "Veona Watson",
    },
    {
      image: testimonialsImage4,
      text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result",
      username: "@hey.nku",
      name: "Paseka Nku",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Thank you for all your help. Your service was excellent and very FAST.",
      username: "@cherice.me",
      name: "Cherice Justin",
    },
    {
      image: testimonialsImage6,
      text: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
      username: "@myself.thais",
      name: "Thais Carballal",
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: "I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.",
      username: "@hello.mimmie",
      name: "Minnie Horn",
    },
    {
      image: testimonialsImage2,
      text: "Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.",
      username: "@merryn.manley",
      name: "Merryn Manley",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
      username: "@hi.veona",
      name: "Veona Watson",
    },
    {
      image: testimonialsImage4,
      text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result",
      username: "@hey.nku",
      name: "Paseka Nku",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Thank you for all your help. Your service was excellent and very FAST.",
      username: "@cherice.me",
      name: "Cherice Justin",
    },
    {
      image: testimonialsImage6,
      text: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
      username: "@myself.thais",
      name: "Thais Carballal",
    },
  ],
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 0,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <section id="testimonials" className="w-screen h-auto">
      <div className="bg-[#F4F4F6] py-24" ref={ref}>
        {/* Title */}
        <div className="flex text-center flex-col gap-5">
          <p className="text-text-blue-small font-semibold text-xl md:text-xl font-dm">
            Customer Testimonial
          </p>
          <h3 className="font-bold font-arvo text-xl md:text-3xl text-big-titles">
            What clients say about us
          </h3>
        </div>
        {/* Content */}
        {domLoaded && (
          <div className="pt-16 cursor-pointer">
            <Swiper
              {...testimonialCarousel}
              style={{
                transform: isInView ? "none" : "translateX(-500px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {TESTIMONIALS_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                  {item.map(({ image, text, name, username }, _index) => (
                    <TestimonialsCard
                      key={_index}
                      image={image}
                      text={text}
                      name={name}
                      username={username}
                    />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

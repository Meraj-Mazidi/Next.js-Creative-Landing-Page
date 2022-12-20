import React, { useState, useRef } from "react";
import { FiUser, FiUsers } from "react-icons/fi";
import {
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { useInView } from "framer-motion";

const PRICE_MONTHLY_FREE_DATA = [
  {
    title: "Free Plan",
    amount: "0/mo",
    options: [
      {
        status: true,
        label: "Limited access to some pre-made projects",
      },
      {
        status: true,
        label: "Free access to download one project per week",
      },
      {
        status: true,
        label: "Free advice on how to start your grow your business creatively",
      },
      {
        status: false,
        label: "Customer support is not fully available for this plan",
      },
      {
        status: false,
        label: "Limited access to the resources of the Creative Project",
      },
    ],
  },
];

const PRICE_MONTHLY_REC = [
  {
    title: "For Team pack",
    amount: "49.99/mo",
    options: [
      {
        status: true,
        label: "Unlimited access to all projects, solutions and resources",
      },
      {
        status: true,
        label:
          "Free advice and special consulting on how to grow your business",
      },
      {
        status: true,
        label: "Accepting orders of new projects in a fast process",
      },
      {
        status: true,
        label: "Full and complete customer support 24/7",
      },
      {
        status: false,
        label: "Special expert services on large scale projects",
      },
    ],
  },
];

const PRICE_YEARLY_DATA = [
  {
    title: "For Team pack",
    amount: "99.99/yr",
    options: [
      {
        status: true,
        label:
          "Accepting orders of new projects in a fast process with special discounts",
      },
      {
        status: true,
        label: "Full and complete customer support 24/7",
      },
      {
        status: true,
        label:
          "Providing some special resources to create some amazing projects alongside our experts",
      },
      {
        status: true,
        label:
          "Complete access to our servers and hosting plans + some special offers",
      },
      {
        status: false,
        label: "Special expert services on large scale projects",
      },
    ],
  },
];

const PRICE_YEARLY_REC = [
  {
    title: "For Organization pack",
    amount: "199.99/yr",
    options: [
      {
        status: true,
        label:
          "Ultimate access to all projects alongside all day access to our experts",
      },
      {
        status: true,
        label:
          "Providing the tools and resources to create large scale projects with a 24/7 support team available",
      },
      {
        status: true,
        label:
          "Complete access to our servers and hosting plans for organizations",
      },
      {
        status: true,
        label:
          "Troubleshooting, consulting and providing assistance all the way, from the beginning to the end",
      },
      {
        status: true,
        label: "2 years of full guarantee of all projects",
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const ActiveLinkClass = "bg-white shadow-lg";

  const activeMonth = () => setIsMonthly(true);
  const activeYear = () => setIsMonthly(false);

  const firstData = isMonthly ? PRICE_MONTHLY_FREE_DATA : PRICE_YEARLY_DATA;
  const recData = isMonthly ? PRICE_MONTHLY_REC : PRICE_YEARLY_REC;

  return (
    <section className="w-screen" id="pricing">
      {/* Container */}
      <div className="flex flex-col items-center py-10 gap-10" ref={ref}>
        {/* Title */}
        <div className="text-center flex flex-col gap-5">
          <p className="text-text-blue-small font-semibold text-lg md:text-xl font-dm">
            Deal for your business
          </p>
          <h3 className="font-arvo font-bold text-lg md:text-2xl text-big-titles">
            Meet our pricing plan that suit you
          </h3>
        </div>

        {/* Switch button */}
        <div className="flex flex-row justify-center items-center gap-3 bg-[#f8f7f7] w-[19rem] h-16 rounded-md shadow-md font-semibold font-dm my-5">
          <button
            className={`px-5 py-3 rounded-md transition-all duration-300 ${
              isMonthly ? ActiveLinkClass : ""
            }`}
            onClick={activeMonth}
          >
            Monthly Plan
          </button>
          <button
            className={`px-5 py-3 rounded-md transition-all duration-1000 ${
              isMonthly ? "" : ActiveLinkClass
            }`}
            onClick={activeYear}
          >
            Annual Plan
          </button>
        </div>

        {/* Plans */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[43rem] px-5 md:px-20 lg:px-32 gap-16">
          {/* Free Plan */}
          <div
            className="lg:w-1/2 sm:w-full h-[48rem] sm:h-[40rem] lg:h-auto border rounded-xl shadow-lg hover:shadow-2xl flex flex-col gap-5 px-10 pt-3 relative overflow-hidden"
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <FiUser className="text-8xl ml-4 mt-5 text-text-blue-small" />
            {firstData.map((item, i) => (
              <span key={i} className={`flex flex-col gap-5`}>
                <h4 className="font-bold text-2xl font-arvo py-3">
                  {item.title}
                </h4>

                {item.options.map((option, i) =>
                  option.status ? (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCheckmarkCircle className="text-green-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm">{option.label}</p>
                    </span>
                  ) : (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCloseCircle className="text-red-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm text-gray-400">{option.label}</p>
                    </span>
                  )
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-[#f8f8fa]">
                  <div className="flex items-center justify-between py-5 px-10">
                    <span className="flex flex-col ">
                      <p className="font-dm font-bold text-xl">Starting from</p>
                      <p className="font-arvo font-bold text-2xl text-text-blue-small">
                        {item.amount}
                      </p>
                    </span>
                    <IoIosArrowRoundForward className="text-5xl text-gray-800 hover:text-black hover:shadow-lg rounded-full hover:bg-white transition-all duration-500 cursor-pointer animate-pulse" />
                  </div>
                </div>
              </span>
            ))}
          </div>

          {/* Recommended */}
          <div
            className="lg:w-1/2 sm:w-full h-[48rem] sm:h-[40rem] lg:h-auto border-text-blue-small border-2 rounded-xl relative shadow-lg hover:shadow-2xl px-10 pt-3"
            style={{
              transform: isInView ? "none" : "translateX(300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <span className="absolute -top-4 left-14 bg-text-blue-small px-4 py-1 rounded-md text-white font-semibold font-dm drop-shadow-lg">
              Recommended
            </span>
            <FiUsers className="text-8xl ml-4 mt-10 text-text-blue-small" />
            {recData.map((item, i) => (
              <span key={i} className="flex flex-col gap-5">
                <h4 className="font-bold text-2xl font-arvo py-3">
                  {item.title}
                </h4>

                {item.options.map((option, i) =>
                  option.status ? (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCheckmarkCircle className="text-green-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm">{option.label}</p>
                    </span>
                  ) : (
                    <span className="flex gap-1" key={i}>
                      <span className="mr-1">
                        <IoIosCloseCircle className="text-red-400 text-2xl w-8" />
                      </span>
                      <p className="font-dm text-gray-400">{option.label}</p>
                    </span>
                  )
                )}

                <div className=" absolute bottom-0 left-0 right-0 bg-[#f8f8fa] rounded-xl">
                  <div className="flex items-center justify-between py-5 px-10">
                    <span className="flex flex-col ">
                      <p className="font-dm font-bold text-xl">Starting from</p>
                      <p className="font-arvo font-bold text-2xl text-text-blue-small">
                        {item.amount}
                      </p>
                    </span>
                    <IoIosArrowRoundForward className="text-5xl text-gray-800 hover:text-black hover:shadow-lg rounded-full hover:bg-white transition-all duration-500 cursor-pointer animate-pulse" />
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

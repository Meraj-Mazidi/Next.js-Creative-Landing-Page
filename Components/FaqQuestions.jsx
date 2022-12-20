import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FiMinus, FiPlus } from "react-icons/fi";

const data = [
  {
    id: 1,
    title: `01. Which domain should I purchase?`,
    contents: (
      <div>
        Get your website tests delivered at the home collect a sample. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What are some tips when choosing a name?`,
    contents: (
      <div>
        We make it easy to move to CometNine. Simply contact us and we'll move
        your hosting account from any other provider, regardless of the control
        panel. If at anytime your website is down for more than 0.1% result with
        proper investigation experiments.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What if I need help choosing the right domain?`,
    contents: (
      <div>
        Create a hub for cross-functional work that also works with all. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Can I upgrade or downgrade my web hosting subscription system?`,
    contents: (
      <div>
        The pricing made me a little hesitant at first but I have been. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. Learn from community on Brandwagon`,
    contents: (
      <div>
        Stop your viewers from getting distracted. Publish videos to. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
];

const FaqQuestions = () => {
  const [isOpen, setIsOpen] = useState(1);
  const active = "border-black";
  const minus = <FiMinus className="text-gray-800 text-lg" />;
  const plus = <FiPlus className="text-gray-400 text-lg" />;

  return (
    <Accordion
      allowMultipleExpanded={false}
      preExpanded={[1]}
      className="border-none"
    >
      {data.map((item, i) => (
        <AccordionItem
          className={`py-5 mb-8 border-b-2 flex flex-col md:flex-row justify-between lg:px-5 items-center gap-8 ${
            item.id === isOpen ? active : ""
          }`}
          key={item.id}
          uuid={item.id}
        >
          <AccordionItemHeading className="w-full md:w-1/2">
            <AccordionItemButton className=" font-medium text-xl font-dm leading-10">
              {item.title}
              {/* <AccordionItemState>
                {({ expanded }) => expanded && setIsOpen(item.id)}
              </AccordionItemState> */}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="w-full md:w-1/2 pt-5 font-dm text-sm leading-7">
            {item.contents}
          </AccordionItemPanel>
          {item.id === isOpen ? minus : plus}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqQuestions;

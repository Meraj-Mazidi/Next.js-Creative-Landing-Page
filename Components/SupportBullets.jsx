import { IoIosCheckmarkCircle } from "react-icons/io";

const boxOne = [
  {
    title: "Medical and vision",
  },
  {
    title: "HSAs and FSAs",
  },
];

const boxTwo = [
  {
    title: "Life insurance",
  },
  {
    title: "Commuter benefits",
  },
];

const SupportBullets = () => {
  const iconStyle = "text-text-blue-small text-xl";
  return (
    <ul className="flex sm:flex-row flex-col lg:justify-start md:justify-center font-dm font-medium w-full">
      <span className="flex flex-col w-full md:w-1/3 lg:w-1/2">
        {boxOne.map((item, i) => (
          <li key={i} className="flex items-center gap-2 pb-5">
            <span>
              <IoIosCheckmarkCircle className={iconStyle} />
            </span>
            {item.title}
          </li>
        ))}
      </span>

      <span className="flex flex-col w-full md:w-1/3 lg:w-1/2">
        {boxTwo.map((item, i) => (
          <li key={i} className="flex items-center gap-2 pb-5">
            <span className="flex flex-col">
              <IoIosCheckmarkCircle className={iconStyle} />
            </span>
            {item.title}
          </li>
        ))}
      </span>
    </ul>
  );
};

export default SupportBullets;

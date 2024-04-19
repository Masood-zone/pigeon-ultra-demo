import React from "react";
import { reservations } from "../../assets/images";
import { tickDouble } from "../../assets/svgs";

function Reservations() {
  const RESERVATION_LIST = [
    { id: 1, list: "Full Business Day Support" },
    { id: 2, list: "Order Management" },
    { id: 3, list: "Delivery" },
    { id: 4, list: "Dine-In & Pickup Reservations" },
  ];
  return (
    <article className="grid grid-cols-2 h-max   max-lg:grid-cols-1 mx-auto gap-10">
      {/* Image */}
      <div className="w-full h-full rounded-xl overflow-hidden">
        <img
          src={reservations}
          className="w-full h-full max-md:h-[450px] object-cover"
          alt="reservations-section"
        />
      </div>
      {/* Content */}
      <div className="w-full">
        <h1 className="text-[#4B4C6D] text-3xl my-5  font-bold">
          Restaurant and specialty ordering tools for every appetite.
        </h1>
        <p className="text-[#79756F] my-6 text-[16px]">
          Reach new customers by joining the PigeonUltra Network. Manage
          everything with our online ordering system and dedicated support from
          our team.
        </p>
        <h1 className="text-[#4B4C6D] text-3xl pt-8 mb-5  font-bold">
          Enjoy Simplified Operations
        </h1>
        <p className="text-[#79756F] my-6 text-[16px]">
          Manage everything with our online ordering system and dedicated
          support from our team, such as
        </p>
        <ul className="flex flex-col text-[#79756F] text-base">
          {RESERVATION_LIST.map((item) => (
            <li key={item.id} className="flex items-center justify-start">
              <img src={tickDouble} alt="option-logo" className="pr-2 my-1" />
              {item.list}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Reservations;

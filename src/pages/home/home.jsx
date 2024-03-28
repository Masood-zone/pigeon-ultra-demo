import React from "react";
import { appStoreLink, googlePlayLink } from "../../assets/svgs";
import { Link } from "react-router-dom";
import { pizza, rider } from "../../assets/images";
import Carousel from "../../components/carousel";

function MainPage() {
  const IMAGES = [
    {
      id: 1,
      src: pizza,
      alt: "pizza-food",
    },
    {
      id: 2,
      src: rider,
      alt: "biker",
    },
  ];
  return (
    <div className="relative w-full grid grid-cols-2 gap-0 overflow-hidden h-max px-3 mx-auto max-xl:max-w-6xl max-lg:max-w-[992px] max-md:max-w-[720px] max-sm:max-w-[540px] max-md:grid-cols-1">
      {/* Text Content */}
      <div className="pt-10 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-centers max-md:h-full">
        <h1 className="pb-5">
          <span className="text-[#4B4C6D] text-7xl font-bold block">
            Think <span className="text-[#F2AA4C]">Delivery</span>
          </span>
          <span className="text-[#4B4C6D] text-7xl font-bold block">
            Get <span className="text-[#F2AA4C]">Ultra</span>
          </span>
        </h1>
        <p className="text-[1.3rem] leading-6 font-medium text-[#1018206b] py-2">
          Get food faster to your homes, offices and gatherings.
          <span className="block">
            <span className="text-[#F2AA4C] font-bold">
              Download the app now.
            </span>{" "}
            A free discount awaits!
          </span>
        </p>
        <div className="flex gap-2 mt-4">
          <Link
            to="https://play.google.com/store/apps/details?id=com.nyeova.pigeonbolt.client"
            target="_blank"
            className="bg-black py-2 px-3 rounded-md"
          >
            <img src={googlePlayLink} alt="google-play-link" />
          </Link>
          <Link
            to="https://apps.apple.com/us/app/pigeonbolt/id1546397948"
            target="_blank"
            className="bg-black py-2 px-3 rounded-md"
          >
            <img src={appStoreLink} alt="app-store-link" />
          </Link>
        </div>
      </div>
      {/* Carousel */}
      <div className="">
        <Carousel data={IMAGES} />
      </div>
    </div>
  );
}

export default MainPage;

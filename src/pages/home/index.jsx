import React from "react";
import Services from "../services";
import WhyUltra from "../about/whyUltra";
import Apps from "../apps";
import Contact from "../contact";
import Newsletter from "../newsletter";
import Shops from "../shops";
import MainPage from "./home";

function Home() {
  return (
    <div className="max-w-[1340px] max-lg:max-w-screen-lg max-md:max-w-screen-md max-sm:max-w-screen-sm m-auto scroll-behaviour ">
      <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        {/* Home component */}
        <div id="home">
          <MainPage />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="whyultra">
          <WhyUltra />
        </div>
        <div id="apps">
          <Apps />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="newsletter">
          <Newsletter />
        </div>
        <div id="shops">
          <Shops />
        </div>
      </div>
    </div>
  );
}

export default Home;

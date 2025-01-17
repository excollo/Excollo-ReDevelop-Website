import React, { useState } from "react";
import HeroPageSection3 from "../Components/LandingPage/HeroPageSection3/HeroPageSection3";
import HeroPageSection2 from "../Components/LandingPage/HeroPageSection2";
import HeroPageSection7 from "../Components/LandingPage/HeroPageSection7";
import HeroPageSection6 from "../Components/LandingPage/HeroPageSection6";
import HeroPageSection4 from "../Components/LandingPage/HeroPageSection4";
import HeroPageSection5 from "../Components/LandingPage/HeroPageSection5";
import ThreeDE from "../Components/ThreeDE";
import OurServices from "../Components/OurServices/OurServices";

const HeroPage1 = () => {
  return (
    <div>
      <HeroPageSection2 />
      <HeroPageSection4 />
      <HeroPageSection6 />
      <HeroPageSection4 />
    </div>
  );
};

export default HeroPage1;

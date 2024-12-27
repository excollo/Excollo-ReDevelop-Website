import React, { useState } from "react";
import HeroPageSection4 from "../Components/HeroPageSection4";
import HeroPageSection5 from "../Components/HeroPageSection5";
import ServiceSection from "../Components/HeroPageSection3";
import HeroPageSection6 from "../Components/HeroPageSection6";
import HeroPageSection7 from "../Components/HeroPageSection7";
import Footer from "../Components/Footer";
import ThreeDE from "../Components/ThreeDE";
import ThreeDE1 from "../Components/ThreeDE1";
import HeroPageSection2 from "../Components/HeroPageSection2";
import HeroPageSection1 from "../Components/HeroPageSection1";

const HeroPage1 = () => {
  const [isSection5Complete, setIsSection5Complete] = useState(false);

  return (
    <div>
      <HeroPageSection5/>
      <HeroPageSection6 />
      <HeroPageSection7 />
      <Footer />
    </div>
  );
};

export default HeroPage1;

import React, { useState } from "react";
import HeroPageSection3 from "../Components/HeroPageSection3/HeroPageSection3";
import HeroPageSection2 from "../Components/HeroPageSection2";

const HeroPage1 = () => {
  const [isSection5Complete, setIsSection5Complete] = useState(false);

  const handleSection5Complete = () => {
    setIsSection5Complete(true);
  };

  return (
    <div>
      <HeroPageSection2 />
      <HeroPageSection3 />
    </div>
  );
};

export default HeroPage1;
import React, { useEffect, useState } from "react";

const LogoCarousel = () => {
  const [position, setPosition] = useState(0);
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/65125db37c831a5d00befcbb_e205a756c543d313b31aa7cdb5e90b744cd6d090%201.webp",
      alt: "Writesonic logo",
      width: "142",
      height: "36.25",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/6555a259a8c616b18f13e8cf_99A5EE2F-58E7-410B-A975-738527BE13EC_800x%201.webp",
      alt: "Media logo",
      width: "74",
      height: "69.64",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/65125df9b36f359952c5fc01_Group%201000004621.webp",
      alt: "Curastory logo",
      width: "142",
      height: "29.57",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/6555a2694fe941cc86a7f532_e205a756c543d313b31aa7cdb5e90b744cd6d090%201%20(1).webp",
      alt: "Schbang logo",
      width: "142",
      height: "38.15",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/65125df8264c5a679486cd52_99A5EE2F-58E7-410B-A975-738527BE13EC_800x%201.webp",
      alt: "Permanent Makeup clinic logo",
      width: "142",
      height: "55.11",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/6555a28fa8b87ce0b6ff9c56_image%2081.webp",
      alt: "Bullseye Internet Marketing logo",
      width: "142",
      height: "46.74",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/65125df93cd0d0af06264ba0_1685535607976%201.webp",
      alt: "Dikings logo",
      width: "62",
      height: "55.5",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/6555a2b41f91a5f72f482ba9_image%2086.webp",
      alt: "456 Growth Media logo",
      width: "77",
      height: "61.5",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/6555a2c77732d8a9017567dc_image%2085.webp",
      alt: "ykone logo",
      width: "124",
      height: "44.51",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/65125df824595224b1ca8f3d_RIGI-Logo_Purple-01%201.webp",
      alt: "RIGI Logo",
      width: "134",
      height: "38",
    },
    {
      src: "https://cdn.prod.website-files.com/64abddc9e146f7684d00cf6e/65125df962de0dee4719e4a3_RuKN1hcO_400x400%201.webp",
      alt: "AFC Logo",
      width: "56.5",
      height: "56",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -100 ? 0 : prev - 0.1));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative w-full">
        <div
          className="flex items-center whitespace-nowrap"
          style={{
            transform: `translateX(${position}%)`,
            transition: "transform 0.02s linear",
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center space-x-16">
            {logos.map((logo, index) => (
              <div
                key={`set1-${index}`}
                className="inline-flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ minWidth: "142px" }}
              >
                <img
                  src={logo.src}
                  loading="lazy"
                  alt={logo.alt}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second set of logos for seamless loop */}
          <div className="flex items-center space-x-16">
            {logos.map((logo, index) => (
              <div
                key={`set2-${index}`}
                className="inline-flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ minWidth: "142px" }}
              >
                <img
                  src={logo.src}
                  loading="lazy"
                  alt={logo.alt}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

import React from "react";
import { Box, Typography } from "@mui/material";
import apache from "../../../assets/marqueelogo3/apache.png";
import metabase from "../../../assets/marqueelogo3/metabase.png";
import mongodb from "../../../assets/marqueelogo3/mongodb.png";
import mysql from "../../../assets/marqueelogo3/mysql.png";
import powerbi from "../../../assets/marqueelogo3/powerbi.png";
import python from "../../../assets/marqueelogo3/python.png";
import pytorch from "../../../assets/marqueelogo3/pytorch.png";

const MarqueeCarousel3 = () => {
  const technologies = [
    {
      name: "Technology 1",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <img src={apache} alt="Logo" style={{ height: 90, width: "auto" }} />
        </Box>
      ),
    },
    {
      name: "Technology 2",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <Typography sx={{ color: "gray.300", fontSize: "0.875rem" }}>
            <img
              src={metabase}
              alt="Logo"
              style={{ height: 70, width: "auto" }}
            />
          </Typography>
        </Box>
      ),
    },
    {
      name: "Technology 3",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <img src={mongodb} alt="Logo" style={{ height: 40, width: "auto" }} />
        </Box>
      ),
    },
    {
      name: "Technology 4",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <img src={mysql} alt="Logo" style={{ height: 40, width: "auto" }} />
        </Box>
      ),
    },
    {
      name: "Technology 5",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <img src={powerbi} alt="Logo" style={{ height: 70, width: "auto" }} />
        </Box>
      ),
    },
    {
      name: "Technology 6",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <img src={python} alt="Logo" style={{ height: 40, width: "auto" }} />
        </Box>
      ),
    },
    {
      name: "Technology 7",
      content: (
        <Box
          sx={{
            backgroundColor: "gray.700",
            height: 48,
            width: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <img src={pytorch} alt="Logo" style={{ height: 30, width: "auto" }} />
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          top: 0,
          bottom: 0,
        }}
      >
        <Box
          className="animate-marquee"
          sx={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {technologies.concat(technologies).map((tech, index) => (
            <Box key={index} sx={{ flex: "none", mx: 4, px: 4 }}>
              {tech.content}
            </Box>
          ))}
        </Box>
      </Box>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 16s linear infinite;
        }
      `}</style>
    </Box>
  );
};

export default MarqueeCarousel3;

import { Box } from '@mui/material'
import React from 'react'
import OurServices from '../Components/OurServices'
import NavBar from '../Components/NavBar';

const ServicesPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
        background: "#000000",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: "15%",
          background: `radial-gradient(ellipse at top, rgba(154, 106, 255, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 1, 
          opacity: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          marginTop: "1rem",
          opacity: 1,
        }}
      >
        <NavBar />
      </Box>  
      <Box>
        <OurServices />
      </Box>
    </Box>
  );
}

export default ServicesPage




  

 
 
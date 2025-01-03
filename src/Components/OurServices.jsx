import { Box, Typography } from '@mui/material'
import React from 'react'

const OurServices = () => {
  return (
    <Box>
      <Typography
      variant='h2'
      
        sx={{
          backgroundColor: "#000",
          fontSize: "2rem",
          justifyContent: "left",
          textAlign: "left",
          ml: "14%",
          mt: 30,
        }}
      >
        Our Core <br /> Services
      </Typography>
    </Box>
  );
}

export default OurServices
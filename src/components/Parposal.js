// Parposal.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Parposal.css';


const Parposal = () => {
  const handleAccept = (event) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    
    // Your navigation logic here
    window.location.href = '/yes';  // Change the URL to your desired route
  };
  const handleDecline = (event) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    
    // Your navigation logic here
    window.location.href = '/no';  // Change the URL to your desired route
  };

  const handleHover = () => {
    const button = document.querySelector('.Parposal-buttons-no');
    const buttonRect = button.getBoundingClientRect();

    // Assuming the picture has a width of 800px and height of 600px
    const maxX = 800 - buttonRect.width;
    const maxY = 600 - buttonRect.height;

    const randomX = Math.min(Math.max(0, Math.floor(Math.random() * maxX)), maxX);
    const randomY = Math.min(Math.max(0, Math.floor(Math.random() * maxY)), maxY);

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <Box className="Parposal-container">
      <Typography variant="h2" className="Parposal-title">
        Will You Be My Forever?
      </Typography>
      <Typography variant="body1" className="Parposal-message">
        My love, as we've shared beautiful moments together, I can't imagine my life without you.
        Will you make me the happiest person and spend forever with me?
      </Typography>
      <Box className="Parposal-buttons">
        <Button variant="contained" color="primary" onClick={handleAccept}>
          Yes, I will!
        </Button>
      </Box>
      <Box className='Parposal-buttons-no'>
        <Button variant="contained" color="secondary" onClick={handleDecline} onMouseEnter={handleHover}>
          Sorry, I can't
        </Button>
      </Box>
    </Box>
  );
};

export default Parposal;

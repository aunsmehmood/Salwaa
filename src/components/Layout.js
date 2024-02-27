// BeautifulLayout.js
import React, { useState } from 'react';
import { Box, Checkbox, Typography, Button } from '@mui/material';
import './Layout.css';

const BeautifulLayout = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSurpriseButtonClick = (event) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    
    // Your navigation logic here
    window.location.href = '/parposal';  // Change the URL to your desired route
  };

  return (
    <Box className={`root withBackground ${isChecked ? 'overlay' : ''}`}>
      <Typography variant="h2" className="title">
        Aaiye, aap ka intzar tha...
      </Typography>
      <Box>
        <Typography variant="h5" className="description" display={'grid'}>
          {isChecked && (
            <span className="overlayText">
              Welcome to my World!
              <div className="overlayLine"></div>
            </span>
          )}
          {!isChecked && (
            <span className="overlayText">
              Welcome to my World!
              <div className="overlayLine hidden"></div>
            </span>
          )}
          <span className={!isChecked ? 'hidden' : ''}>
            Welcome to our World!
          </span>
        </Typography>
        <Box>
          <Typography>
            Click in the box, to have some changes...
          </Typography>
          <Checkbox checked={isChecked} onChange={handleChange} />
        </Box>
      </Box>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom bgcolor={'purple'}>
          Okay Salwa I have some surprise for you.
        </Typography>
        {/* Use an anchor tag with an onClick event for custom navigation logic */}
        <a href="/parposal" onClick={handleSurpriseButtonClick}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!isChecked}
          >
            Surprise
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default BeautifulLayout;

// No.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If using react-router-dom for navigation

const No = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h2" gutterBottom>
        Congratulations its still a Yes!
      </Typography>
      <Typography variant="body1" paragraph>
        You've made a good decision but I take it as a Yes! Thank You Jan.
      </Typography>
      {/* You can replace the Link component with your preferred navigation method */}
      <Link to="/">
        <Button variant="contained" color="primary">
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default No;

// Yes.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If using react-router-dom for navigation
import './Yes.css';

const Yes = () => {
  return (
    <Box
    classname="YesContainer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      // bgcolor="#f5f5f5"
    >
      <Typography variant="h2" gutterBottom>
        Congratulations!
      </Typography>
      <Typography variant="body1" paragraph>
        I know you were mine already, but now i'm yours too.
      </Typography>
      <Typography variant="h4" paragraph>
        <sapn>
        Teri Tasveer sy Karun batain
        </sapn>
        <br />
        <span>
          Hayee Mumkin Nahi mula-qaatain
        </span>
      </Typography>
      <Typography variant="h5" paragraph>
        I love So Much Salwa and I hope you mean it.
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

export default Yes;

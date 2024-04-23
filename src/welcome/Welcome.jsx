import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Welcome = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dear Visitors,
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to myHeritage, your online gateway to explore and celebrate the rich tapestry of our family's history and legacy. Whether you're a member of our extended family or a curious visitor, we invite you to embark on a journey through generations past, present, and future.
      </Typography>
    </Box>
  );
};

export default Welcome;

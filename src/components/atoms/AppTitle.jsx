import { Typography } from '@mui/material';
import React from 'react';

const AppTitle = () => {
  return (
    <Typography
      variant="h1"
      sx={{ fontWeight: 'bold', fontSize: '40px', color: '#FFFFFF' }}
    >
      Smart todo list
    </Typography>
  );
};

export default AppTitle;

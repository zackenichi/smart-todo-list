import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const EmptyBoard = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontSize: '24px' }}>
        You have an empty list
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontSize: '20px', marginTop: '20px', lineHeight: '28px' }}
      >
        You can start by clicking on the add button or you can click on the
        sample buttons to get started.
      </Typography>
    </Box>
  );
};

export default EmptyBoard;

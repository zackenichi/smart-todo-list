import React from 'react';
import { Button } from '@mui/material';

const StyledButton = ({ btnLabel, btnIcon, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      startIcon={btnIcon}
      variant="contained"
      disableElevation
      sx={{
        borderRadius: '8px',
        paddingY: '10px',
        paddingX: '20px',
        textTransform: 'none',
        fontWeight: 'bold',
        background: '#14213d',
        '&:hover': {
          background: '#66C7F4',
          color: '#000',
        },
      }}
    >
      {btnLabel}
    </Button>
  );
};

export default StyledButton;

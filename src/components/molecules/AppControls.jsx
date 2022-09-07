import { Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import { StyledButton } from '../atoms';
import buttonLabels from '../resources/buttonLabels';
import sampleAContent from '../resources/sampleAContent';
import sampleBContent from '../resources/sampleBContent';
import sampleCContent from '../resources/sampleCContent';

const AppControls = ({ setOpenAdd, setCurrentChecklist }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const getClickFunction = (label) => {
    switch (label) {
      case 'Add':
        return () => setOpenAdd(true);
      case 'Sample A':
        return () => setCurrentChecklist(sampleAContent);
      case 'Sample B':
        return () => setCurrentChecklist(sampleBContent);
      case 'Sample C':
        return () => setCurrentChecklist(sampleCContent);
      default:
        return () => setCurrentChecklist([]);
    }
  };

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      spacing={2}
      sx={{ justifyContent: 'center' }}
    >
      {buttonLabels.map((btn) => (
        <StyledButton
          key={btn.id}
          btnLabel={btn.label}
          btnIcon={btn.icon}
          handleClick={getClickFunction(btn.label)}
        />
      ))}
    </Stack>
  );
};

export default AppControls;

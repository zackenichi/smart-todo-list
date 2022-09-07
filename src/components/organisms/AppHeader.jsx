import { AppBar, Grid, Toolbar, Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { AppTitle } from '../atoms';
import { AppControls } from '../molecules';

const AppHeader = ({ setOpenAdd, setCurrentChecklist }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#ff1053' }}>
        <Toolbar>
          <Grid container padding={2} spacing={2}>
            <Grid item xs={12}>
              <AppTitle />
            </Grid>
            <Grid item xs={12}>
              <AppControls
                setOpenAdd={setOpenAdd}
                setCurrentChecklist={setCurrentChecklist}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ height: isMobile ? '52vh' : '170px' }} />
    </Box>
  );
};

export default AppHeader;

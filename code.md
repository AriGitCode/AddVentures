<!-- Navbar initial:
 <Container maxWidth='lg'>
<Toolbar disableGutters>
<Box sx={{mr:1}}>
   <IconButton size='large' color='inherit'>
       <Menu/>
   </IconButton>
</Box>
<Typography
variant='h6'
component='h1'
noWrap 
sx={{flexGrow:1, display:{xs:'none', md: 'flex'}}}>
   PinJourney
</Typography>
<Typography
variant='h6'
component='h1'
noWrap 
sx={{flexGrow:1, display:{xs:'none', md: 'flex'}}}>
   PnJrny
</Typography>
</Toolbar>
</Container>
</AppBar>  -->

import React, { useState } from 'react';
import { AppBar, Backdrop, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
const Navbar = () => {
  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleMenuClick = () => {
    setBackdropOpen(!backdropOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set background to a semi-transparent color
          backdropFilter: backdropOpen ? 'blur(8px)' : 'none', // Add backdrop filter for blur effect
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton size="large" color="inherit" onClick={handleMenuClick} sx={{color: 'aqua'}}>
                <Menu />
              </IconButton>
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'aqua' }}>
              PinJourney
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Blurred Background */}
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Set a semi-transparent color for the backdrop
        }}
        open={backdropOpen}
      >
        {/* Content goes here */}
      </Backdrop>
    </>
  );
};

export default Navbar;
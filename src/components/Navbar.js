import React from 'react';
import { AppBar,Box, Container, IconButton, Toolbar, Typography, Button,} from '@mui/material';
import { Menu, Lock } from '@mui/icons-material';
import photoURL from '../profile-pic.png'
import UserIcons from './user/UserIcons';
import {useValue} from '../context/ContextProvider'

const user ={ name:'test', photoURL}

const Navbar = () => {
    const{
      state: {currentUser},dispatch} = useValue()

  return (
      <AppBar position="fixed" sx={{backgroundColor: 'rgba(255, 255, 255, 0.9)', }}
        >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton size="large" color="inherit"  sx={{color: 'aqua'}}>
                <Menu />
              </IconButton>
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'aqua' }}>
              AddVentures
            </Typography>
          {!currentUser ? (<Button sx={{color:'Blue'}} startIcon={<Lock/>} onClick={()=> dispatch({type: 'UPDATE_USER', payload: user})} > 
                Login
            </Button>) : (
                <UserIcons />
            )}
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Navbar;





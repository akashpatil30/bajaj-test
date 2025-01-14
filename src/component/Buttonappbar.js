import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from "../images/Bajaj-Finserv-logo.png";

const ButtonAppBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <img src={logo} height={"50px"} alt="Bajaj Finserv"/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bajaj Finserv
            </Typography>
            <Button color="inherit"><Link to="/">Home</Link></Button>
            <Button color="inherit"><Link to="/loans">Loans</Link></Button>
            <Button color="inherit"><Link to="/aboutus">About Us</Link></Button> 
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  export default ButtonAppBar;
import { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  CssBaseline,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  AppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';



const Home = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = () => {
    setState(!state);
  }


  const Listitems = () => (
    <List sx={{width: '220px', color: 'white' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '7.3px', }}>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, marginLeft: '2px' }}
            onClick={toggleDrawer}
            
          >
            <MenuIcon sx={{color: 'white'}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Breweries-App
          </Typography>
      </Box>
          <Divider/>
          <ListItem sx={{}}>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
              <ListItemIcon>
                <HomeIcon sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/companies" onClick={toggleDrawer}>
              <ListItemIcon>
                <BusinessIcon sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Companies" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/contact" onClick={toggleDrawer}>
              <ListItemIcon>
                <ContactMailIcon sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
  )

  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar position="static" sx={{backgroundColor: '#202020'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Breweries-App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Outlet/>
      <Drawer
        anchor='left'
        open={state}
        onClose={toggleDrawer}
        sx={{ 
          '& .MuiDrawer-paper': { backgroundColor: '#202020' },
          color:'white',
         }} 
      >
        <Box
        >
          {Listitems()}
        </Box>
        
      </Drawer>
    </Box>
  )
}

export default Home
import { useEffect, useState } from 'react'
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
  Menu,
  AppBar,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleOauth from '../Components/GoogleOauth';
import { GoogleOauthtype } from '../types/GoogleOauthtype';
import Footer from '../Components/Footer';



const Home = () => {
  const [state, setState] = useState(false)
  const [user, setUser] = useState<GoogleOauthtype | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const toggleDrawer = () => {
    setState(!state);
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    localStorage.removeItem('user');
  }

  useEffect(() => {
    // load user data from localStorage when component mounts
    const loadedUser = localStorage.getItem('user');
    if (loadedUser) {
        setUser(JSON.parse(loadedUser));
    }
}, []);


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
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {user && user.picture ? (
                  <img src={user.picture} alt="profile pic" style={{ height: '30px', width: '30px', borderRadius: '30%' }} />
                    ) : (
                  <AccountCircle fontSize='large'/>
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <GoogleOAuthProvider 
                    clientId="639166182342-g9h42d4lht0hmc2pu3eplgr3m4rsk61a.apps.googleusercontent.com"
                  >
                    <GoogleOauth/>
                  </GoogleOAuthProvider>
                </MenuItem>
                <MenuItem>
                  <Button variant='contained' onClick={handlelogout}>Log out</Button>
                </MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
      {/* <Outlet/>
      <Footer/> */}
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
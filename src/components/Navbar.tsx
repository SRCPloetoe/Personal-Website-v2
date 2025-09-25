import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../img/Logo.png';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Organizations', path: '/organizations' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <AppBar position="static" color="primary" sx={{ background: '#282828', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 72, maxWidth: 1800, mx: 'auto', width: '100%' }}>
        <Box display="flex" alignItems="center">
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="Project NexTech Logo" style={{ height: 38, width: 'auto', marginRight: 20 }} />
            <Typography variant="h6" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, color: '#fff' }}>
              Shounak Ray Chaudhuri
            </Typography>
          </Box>
        </Box>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={RouterLink}
              to={link.path}
              color="inherit"
              sx={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: location.pathname === link.path ? 700 : 400,
                color: location.pathname === link.path ? '#f24c02' : '#fff',
                mx: 1,
                textTransform: 'none',
                fontSize: 20,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Nav */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { background: '#222', color: '#fff' } }}>
            <Box sx={{ width: 220 }} role="presentation" onClick={handleDrawerToggle}>
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.path} disablePadding>
                    <ListItemButton component={RouterLink} to={link.path} selected={location.pathname === link.path} sx={{ color: '#fff' }}>
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontWeight: location.pathname === link.path ? 700 : 400,
                          color: location.pathname === link.path ? '#f24c02' : '#fff',
                          fontSize: 18,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
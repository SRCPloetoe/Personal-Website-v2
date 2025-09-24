import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import notFoundImg from '../img/404.png';

const NotFound: React.FC = () => (
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    alignItems="center"
    justifyContent="center"
    minHeight="70vh"
    width="100%"
    px={{ xs: 2, md: 8 }}
    py={8}
    boxSizing="border-box"
  >
    <Box flex={1} display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} justifyContent="center">
      <Typography
        variant="h1"
        sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, color: '#f24c02', mb: 1, fontSize: { xs: 64, md: 96 }, textAlign: { xs: 'center', md: 'left' } }}
      >
        404
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, color: '#ffffff', mb: 2, fontSize: { xs: 32, md: 48 }, textAlign: { xs: 'center', md: 'left' } }}
      >
        Page not found
      </Typography>
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        sx={{ color: '#4083cc', fontSize: { xs: 20, md: 28 }, mt: 2, textAlign: { xs: 'center', md: 'left' }, fontWeight: 500 }}
      >
        Return home
      </Link>
    </Box>
    <Box flex={1} display="flex" alignItems="center" justifyContent="center" sx={{ ml: { xs: 0, md: 8 } }}>
      <img
        src={notFoundImg}
        alt="404 Not Found"
        style={{ maxWidth: '100%', maxHeight: 700, minHeight: 300, borderRadius: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }}
      />
    </Box>
  </Box>
);

export default NotFound;

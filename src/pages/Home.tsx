
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { Link as RouterLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { bigNumbers as globalBigNumbers } from '../data/bigNumbers.ts';

import carousel1 from '../img/carousel_1.png';
import carousel2 from '../img/carousel_2.png';
import carousel3 from '../img/carousel_3.png';
import carousel4 from '../img/carousel_4.png';
import carousel5 from '../img/carousel_5.png';
import carousel6 from '../img/carousel_6.png';
import carousel7 from '../img/carousel_7.png';
import carousel8 from '../img/carousel_8.png';


const carouselImages = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
];

const carouselCaptions = [
  'Building robots and coding for the future',
  'Presenting @ 2025 Greater San Diego Science and Engineering Fair',
  'Installing automobile data collection modules in Kolkata, India',
  'Qualifying for the 2025 California State Speech tournament',
  'Installing computers for traffic safety project in Chula Vista, CA',
  'Presenting @ 2025 California Science and Engineering Fair',
  'The first of 65+ STEM workshops I\'ve led through Project NexTech',
  'Advocating to elected officials for STEM funding in Sacramento, CA',
];

const buttons = [
  { label: 'Learn about me', to: '/about', color: 'primary' },
  { label: 'View my projects', to: '/projects', color: 'secondary' },
  { label: 'See what I do', to: '/organizations', color: 'primary' },
  { label: 'Contact me', to: '/contact', color: 'secondary' },
  { label: 'Project NexTech', to: 'https://projectnextech.org', color: 'primary', external: true },
  { label: 'My LinkedIn', to: 'https://linkedin.com/in/shounakrc', color: 'secondary', external: true },
];


// Only show the relevant stats for Home page
const bigNumbers = [
  globalBigNumbers[0], // Students Taught
  globalBigNumbers[2], // Countries Reached
  globalBigNumbers[3], // Volunteer Hours
  globalBigNumbers[6], // Programs Run
];

const Home: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 0 }}>
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      width="100%"
      maxWidth={1800}
      sx={{ px: { xs: '7.5vw', md: '7.5vw' }, mt: 0 }}>
      {/* Left: Title, Subtitle, Buttons */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent="center"
        mb={{ xs: 0.1, sm: 0.1, md: 0, lg: 0, xl: 0 }}
        sx={{ minWidth: 0 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 550,
            color: '#fff',
            mb: 1.2,
            fontSize: { xs: 40, sm: 48, md: 56 },
            textAlign: 'left',
          }}
        >
          Shounak Ray Chaudhuri
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 500,
            color: '#fff',
            mb: 2,
            fontSize: { xs: 24, sm: 30, md: 32 },
            textAlign: 'left',
          }}
        >
          Student, Engineer, Programmer, Volunteer
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#b0b0b0', mb: 2 }}>
          I'm Shounak Ray Chaudhuri, an ambitious high school student, engineer, programmer, and volunteer in San Diego.
        </Typography>
        <Box sx={{ mb: 2 }} />
        <Grid container spacing={2} mb={0}>
          {buttons.map((btn, idx) => (
            <Grid item key={btn.label} xs={12} sm={6}>
              <Button
                fullWidth
                variant={btn.color === 'primary' ? 'contained' : 'contained'}
                color={btn.color === 'primary' ? 'primary' : undefined}
                size="large"
                component={btn.external ? 'a' : RouterLink}
                href={btn.external ? btn.to : undefined}
                to={!btn.external ? btn.to : undefined}
                target={btn.external ? '_blank' : undefined}
                rel={btn.external ? 'noopener noreferrer' : undefined}
                sx={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 500,
                  mb: 1,
                  textTransform: 'none',
                  fontSize: 20,
                  backgroundColor: btn.color === 'secondary' ? '#4083cc' : undefined,
                  color: btn.color === 'secondary' ? '#fff' : undefined,
                  '&:hover': btn.color === 'secondary' ? { backgroundColor: '#3366a3' } : {},
                }}
              >
                {btn.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Spacer between left content and carousel (desktop only) */}
      <Box display={{ xs: 'none', md: 'block', lg: 'block' }} sx={{ width: '7.5vw', minWidth: '7.5vw' }} />
      {/* Right: Carousel (desktop, >1200px), below buttons (900px-1200px and mobile) */}
      <Box
  flex={1.1}
  display={{ xs: 'none', md: 'none', lg: 'flex' }}
  justifyContent="flex-end"
  alignItems="center"
  minWidth={0}
  sx={{ width: '100%', mt: 10 }}
      >
        <Box sx={{ width: '100%', maxWidth: `calc(100vw - 2 * 7.5vw - 7.5vw - 400px)`, aspectRatio: '16/9', maxHeight: '80vh' }}>
            <Box sx={{ width: '100%', aspectRatio: '1/1', maxWidth: `calc(100vw - 2 * 7.5vw - 7.5vw - 400px)` }}>
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={4000}
                width="100%"
                dynamicHeight={false}
              >
              {carouselImages.map((img, idx) => (
                <div key={idx} style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                  <img src={img} alt={`STEM Carousel ${idx + 1}`} style={{ borderRadius: 16, objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '1/1' }} />
                  {idx !== 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 48,
                        px: 2,
                        py: 1.5,
                        background: 'rgba(0,0,0,0.55)',
                        color: '#fff',
                        borderRadius: 12,
                        fontSize: { xs: 16, md: 20 },
                        textAlign: 'center',
                        fontFamily: 'Inter, Arial, sans-serif',
                        fontWeight: 500,
                        maxWidth: '95%',
                        mx: 'auto',
                      }}
                    >
                      {carouselCaptions[idx]}
                    </Box>
                  )}
                </div>
              ))}
              </Carousel>
            </Box>
        </Box>
      </Box>
    </Box>
    {/* Carousel for mobile and 900px-1200px view (below buttons) */}
  <Box display={{ xs: 'block', md: 'block', lg: 'none' }} width="100%" sx={{ px: '7.5vw', mt: { xs: 0, sm: 0, md: 0, lg: 0.5, xl: 0.5 }, mb: { xs: 3, sm: 3, md: 3, lg: 2.5, xl: 2.5 } }}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', maxHeight: '60vw', maxWidth: 600, mx: 'auto' }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          width="100%"
          dynamicHeight={false}
        >
          {carouselImages.map((img, idx) => (
            <div key={idx} style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <img src={img} alt={`STEM Carousel ${idx + 1}`} style={{ borderRadius: 16, objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '16/9' }} />
              {idx !== 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 40,
                    px: 2,
                    py: 1.5,
                    background: 'rgba(0,0,0,0.55)',
                    color: '#fff',
                    borderRadius: 12,
                    fontSize: { xs: 14, md: 18 },
                    textAlign: 'center',
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontWeight: 500,
                    maxWidth: '98%',
                    mx: 'auto',
                  }}
                >
                  {carouselCaptions[idx]}
                </Box>
              )}
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
    {/* Big Numbers Section removed */}
  </Box>
);

export default Home;
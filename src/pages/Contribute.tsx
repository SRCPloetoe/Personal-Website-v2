
import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { bigNumbers as globalBigNumbers } from '../data/bigNumbers.ts';
import { InvertColors } from '@mui/icons-material';

const contributeTopColumns = [
  {
    title: 'Why Contribute?',
    body: 'Support our mission to make STEM education accessible for all. Your contribution helps us reach more students and schools.'
  },
  {
    title: 'How to Contribute',
    body: 'Donate, sponsor a program, or provide resources. Every bit helps us grow and impact more lives.'
  },
  {
    title: 'Who Can Contribute?',
    body: 'Individuals, organizations, and companies are all welcome to support our cause.'
  }
];


// Only show the relevant stats for Contribute page
const bigNumbers = [
  globalBigNumbers[0], // Students Taught
  globalBigNumbers[2], // Countries Reached
  globalBigNumbers[3], // Volunteer Hours
  globalBigNumbers[6], // Programs Run
];

const Contribute: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.async = true;
    script.setAttribute('paypalExpress', 'false');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
  <Box px={{ xs: 2, md: 6 }} py={6} sx={{ width: '100%', boxSizing: 'border-box' }}>
      {/* Three-column intro section */}
  <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6} sx={{ width: '100%', boxSizing: 'border-box' }}>
        {contributeTopColumns.map((col, idx) => (
          <Box key={idx} textAlign="center">
            <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">{col.title}</Typography>
            <Typography color="text.secondary" align="center">{col.body}</Typography>
          </Box>
        ))}
      </Box>

      {/* Orange box payment portal section - 1 column orange, 2 columns text */}
  <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6} sx={{ width: '100%', boxSizing: 'border-box' }}>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={4} border="3px solid #f24c02" display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' }, maxWidth: { xs: '100vw' }, overflowX: 'auto' }}>
          <Box sx={{ display: 'flex', borderRadius: 2, overflow: 'hidden', boxShadow: 2, width: '100%' }}>
            <iframe
              src="https://donorbox.org/embed/donate-to-project-nextech?default_interval=m&designation=General+donation+that+our+student+leaders+may+allocate+as+needed&amount=100"
              name="donorbox"
              seamless
              frameBorder="0"
              scrolling="no"
              height="900px"
              width="100%"
              style={{ maxWidth: 500, minWidth: 250, maxHeight: 'none', border: 'none', borderRadius: 8, marginLeft: 'auto', marginRight: 'auto', filter: 'invert(85%) hue-rotate(180.0deg)'}}
              allow="payment"
            ></iframe>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', md: '1fr', lg: '1fr 1fr' }}
          gridTemplateRows={{ xs: '1fr 1fr', md: '1fr 1fr', lg: 'none' }}
          gap={4}
          alignItems="center"
          gridColumn={{ md: '2 / span 2' }}
          sx={{ width: '100%', boxSizing: 'border-box' }}
        >
          <Box textAlign="center">
            <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Make a Donation</Typography>
            <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Your donation directly funds our programs, resources, and outreach. Thank you for supporting our mission!</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Other Ways to Help</Typography>
            <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Contact us to discuss sponsorship, in-kind donations, or volunteering opportunities!</Typography>
          </Box>
        </Box>
      </Box>

      {/* Blue box Google Form section */}
  <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6} sx={{ width: '100%', boxSizing: 'border-box' }}>
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Sponsor or Partner With Us</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Fill out the form to become a sponsor or partner. We welcome support from organizations and companies!</Typography>
        </Box>
  <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' }, maxWidth: { xs: '100vw' }, overflowX: 'auto' }}>
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
            Sponsorship/Partnership Form
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfThOoGtbO4ltvp2bOnRIBv-Ivj4qt_MjZdB12cdPIfDdjrnQ/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ background: '#fff', borderRadius: 8, width: '100%', minHeight: 400, filter: 'invert(85%) hue-rotate(180.0deg)'}}
            >Loading…</iframe>
          </Box>
        </Box>
      </Box>

      {/* Big Numbers Section as responsive grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
        gap={4}
        width="100%"
        sx={{ px: { xs: '7.5vw', md: '7.5vw' }, boxSizing: 'border-box' }}
      >
        {bigNumbers.map((item, idx) => {
          // Numbers to highlight in orange or blue
          const orangeNumbers = ['1125+', '4300+'];
          const blueNumbers = ['12+', '90+'];
          const numberColor = orangeNumbers.includes(item.number) ? '#f24c02' : blueNumbers.includes(item.number) ? '#4083cc' : '#fff';
          return (
            <Card key={idx} sx={{ background: '#473024', color: '#fff', textAlign: 'center', py: { xs: 1, md: 3 }, boxShadow: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CardContent>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  fontFamily="Inter, Arial, sans-serif"
                  sx={{
                    color: numberColor,
                    fontSize: {
                      xs: 36,
                      md: 64,
                      lg: 64,
                      xl: 72,
                    },
                    '@media (max-width:1500px)': {
                      fontSize: '4vw',
                    },
                    '@media (max-width:900px)': {
                      fontSize: '8vw',
                    },
                  }}
                >
                  {item.number}
                </Typography>
                <Typography
                  color="text.secondary"
                  fontFamily="Inter, Arial, sans-serif"
                  sx={{
                    fontSize: {
                      xs: 18,
                      md: 24,
                    },
                    '@media (max-width:1500px)': {
                      fontSize: '1.3vw',
                    },
                    '@media (max-width:900px)': {
                      fontSize: '3vw',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Contribute;

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const otherWays = [
  {
    title: 'Volunteer',
    description: 'Join our team and help us deliver high-quality STEM education to students everywhere.'
  },
  {
    title: 'Corporate Sponsorship',
    description: 'Partner with us to make a larger impact and support our mission.'
  },
  {
    title: 'In-Kind Donations',
    description: 'Donate equipment, supplies, or services to help our programs thrive.'
  }
];

const contributions = [
  {
    title: 'Sponsor a Workshop',
    subtitle: 'Help us run a hands-on STEM workshop for students.',
    image: 'https://source.unsplash.com/200x200/?workshop,stem'
  },
  {
    title: 'Fund a Scholarship',
    subtitle: 'Support a student’s participation in our programs.',
    image: 'https://source.unsplash.com/200x200/?scholarship,student'
  },
  {
    title: 'Provide Materials',
    subtitle: 'Donate materials for our classes and activities.',
    image: 'https://source.unsplash.com/200x200/?materials,education'
  },
  {
    title: 'Support Outreach',
    subtitle: 'Help us reach more schools and communities.',
    image: 'https://source.unsplash.com/200x200/?outreach,community'
  },
  {
    title: 'Sponsor a Course',
    subtitle: 'Enable us to develop new curriculum and resources.',
    image: 'https://source.unsplash.com/200x200/?curriculum,books'
  },
  {
    title: 'Technology Upgrades',
    subtitle: 'Help us keep our tech up to date for virtual learning.',
    image: 'https://source.unsplash.com/200x200/?technology,computer'
  },
  {
    title: 'Teacher Training',
    subtitle: 'Support professional development for our volunteers.',
    image: 'https://source.unsplash.com/200x200/?teacher,training'
  },
  {
    title: 'General Fund',
    subtitle: 'Contribute to our ongoing operations and growth.',
    image: 'https://source.unsplash.com/200x200/?fundraising,donate'
  }
];

const Donate: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    {/* Impact and Payment Portal */}
    <Grid container spacing={4} mb={6}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif">
          Your Donation Makes an Impact
        </Typography>
        <Typography mb={2} color="text.secondary" fontFamily="Inter, Arial, sans-serif">
          Every dollar you give helps us provide free and low-cost STEM education to students around the world. Your support enables us to run workshops, develop curriculum, and reach underserved communities.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 600 }}>
          Donate Now
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2, background: '#fff' }}>
          <iframe
            title="Payment Portal"
            src="https://donorbox.org/embed/placeholder"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ minHeight: 400 }}
            allowPaymentRequest
            allowFullScreen
          ></iframe>
        </Box>
      </Grid>
    </Grid>

    {/* Other Ways to Contribute */}
    <Grid container spacing={4} mb={6}>
      {otherWays.map((item, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card sx={{ background: '#303947', color: '#fff', minHeight: 180 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} fontFamily="Inter, Arial, sans-serif" color="secondary">
                {item.title}
              </Typography>
              <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    {/* Contributions Card Grid */}
    <Grid container spacing={4}>
      {contributions.map((item, idx) => (
        <Grid item xs={12} md={3} key={idx}>
          <Card sx={{ background: '#473024', color: '#fff', textAlign: 'center' }}>
            <CardContent>
              <img
                src={item.image}
                alt={item.title}
                style={{ borderRadius: 12, width: 120, height: 120, objectFit: 'cover', margin: '0 auto' }}
              />
              <Typography variant="h6" fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif">
                {item.title}
              </Typography>
              <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif">
                {item.subtitle}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Donate;
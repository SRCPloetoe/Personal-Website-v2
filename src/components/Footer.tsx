import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ background: '#282828', color: '#fff', py: 2, px: 2, mt: 6 }}>
      <Box sx={{ maxWidth: 1800, mx: 'auto', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: { xs: 'center', sm: 'space-between' },
            width: '100%',
            minHeight: 70,
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Left: Contact Info */}
          <Box sx={{ minWidth: 250, textAlign: { xs: 'center', sm: 'left' }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, pl: { xs: 0, md: 2 } }}>
            <Box display="flex" alignItems="center" mb={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <EmailIcon sx={{ mr: 1, color: '#f24c02' }} />
              <Typography variant="body1" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                <Link href="mailto:info@projectnextech.org">info@projectnextech.org</Link>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <LocationOnIcon sx={{ mr: 1, color: '#4083cc' }} />
              <Typography variant="body1" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                San Diego, CA, USA
              </Typography>
            </Box>
            {/* Social Links for xs: below contact info, center aligned */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', alignItems: 'center', mt: 2 }}>
              <IconButton color="inherit" href="https://www.facebook.com/profile.php?id=61560717552719" sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/company/project-nextech" sx={{ color: '#fff' }}><LinkedInIcon /></IconButton>
              <IconButton color="inherit" href="https://www.instagram.com/projectnextech/" sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
              <IconButton color="inherit" href="https://www.youtube.com/@ProjectNexTech" sx={{ color: '#fff' }}><YouTubeIcon /></IconButton>
            </Box>
          </Box>
          {/* Center: Mission Statement */}
          <Box sx={{ flex: 1, textAlign: 'center', px: 2, minWidth: 200, maxWidth: 900, display: { xs: 'none', md: 'none', lg: 'block' } }}>
            <Typography variant="h6" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 700, mb: 1 }}>
              Our Mission
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#b0b0b0' }}>
              To inspire and support a global community of students through interactive, accessible, and high-quality STEM education, equipping them with a passion to combat real-world problems.
            </Typography>
          </Box>
          {/* Right: Social Links for sm and up: right aligned */}
          <Box sx={{ minWidth: 250, textAlign: 'right', display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', pr: { xs: 0, md: 2 } }}>
            <IconButton color="inherit" href="https://www.facebook.com/profile.php?id=61560717552719" sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/company/project-nextech" sx={{ color: '#fff' }}><LinkedInIcon /></IconButton>
            <IconButton color="inherit" href="https://www.instagram.com/projectnextech/" sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
            <IconButton color="inherit" href="https://www.youtube.com/@ProjectNexTech" sx={{ color: '#fff' }}><YouTubeIcon /></IconButton>
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#b0b0b0', textAlign: 'center', paddingTop: 3}}>&copy; 2025 Shounak Ray Chaudhuri. All rights reserved.</Typography>
  </Box>
);

export default Footer;
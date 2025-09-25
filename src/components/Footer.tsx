import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import discordLogo from '../img/discord.svg';
import spotifyLogo from '../img/spotify.svg';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ background: '#282828', color: '#fff', py: 1, px: 2, mt: 6 }}>
    <Box sx={{ maxWidth: 1800, mx: 'auto', width: '100%' }}>
  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', minHeight: 40, px: { xs: 2, md: 4 } }}>
        {/* Left cell: Email and Location */}
  <Box sx={{ flex: 1, minWidth: 250, textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.2, pl: { xs: 0, md: 2 } }}>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" href="mailto:sraychaudhuri@projectnextech.org" sx={{ color: '#ff2a00', p: 0.5 }}>
              <EmailIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, color: '#ff2a00' }} />
            <Typography variant="body1" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
              San Diego, CA
            </Typography>
          </Box>
        </Box>
        {/* Center cell: Copyright */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#b0b0b0', fontSize: { xs: 15, sm: 16, md: 18 } }}>
            &copy; {new Date().getFullYear()} Shounak Ray Chaudhuri. All rights reserved.
          </Typography>
        </Box>
        {/* Right cell: Social Media */}
        <Box sx={{ flex: 1, minWidth: 250, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: { xs: 0, md: 2 } }}>
          <IconButton color="inherit" href="https://www.linkedin.com/in/shounakrc/" sx={{ color: '#fff' }} target="_blank" rel="noopener"><LinkedInIcon /></IconButton>
          <IconButton color="inherit" href="https://github.com/SRCPloetoe" sx={{ color: '#fff' }} target="_blank" rel="noopener"><GitHubIcon /></IconButton>
          <IconButton color="inherit" href="https://discord.gg/6yHhgpC" sx={{ color: '#fff', p: 0.5 }} target="_blank" rel="noopener">
            <img src={discordLogo} alt="Discord" style={{ width: 28, height: 28, display: 'block' }} />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/shounakrc/" sx={{ color: '#fff' }} target="_blank" rel="noopener"><InstagramIcon /></IconButton>
          <IconButton color="inherit" href="https://open.spotify.com/user/5cjyn9g3iyyzem5rl4b6s0e3l?si=de45e51bfca44414" sx={{ color: '#fff', p: 0.5 }} target="_blank" rel="noopener">
            <img src={spotifyLogo} alt="Spotify" style={{ width: 28, height: 28, display: 'block' }} />
          </IconButton>
          <IconButton color="inherit" href="https://www.youtube.com/@shounakrc" sx={{ color: '#fff' }} target="_blank" rel="noopener"><YouTubeIcon /></IconButton>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Footer;
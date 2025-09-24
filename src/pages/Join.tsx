import React from 'react';
import discordImg from '../img/discord.png';
import cursorImg from '../img/cursor.png';
import { Box, Typography } from '@mui/material';

const joinTopColumns = [
  {
    title: 'Why Join?',
    body: 'Be part of a global movement to make STEM education accessible. Connect, learn, and grow with us.'
  },
  {
    title: 'Ways to Get Involved',
    body: 'Join our Discord, volunteer, or enroll in our programs. There are many ways to contribute and benefit.'
  },
  {
    title: 'Who Can Join?',
    body: 'Students, educators, and professionals from all backgrounds are welcome. Everyone can make an impact.'
  }
];

const Join: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    {/* Three-column intro section (About page style) */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6}>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Why Join?
        </Typography>
        <Typography color="text.secondary" align="center">
          Be part of a global movement to make STEM education accessible. Connect, learn, and grow with us.
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Ways to Get Involved
        </Typography>
        <Typography color="text.secondary" align="center">
          Join our Discord, volunteer, or enroll in our programs. There are many ways to contribute and benefit.
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Who Can Join?
        </Typography>
        <Typography color="text.secondary" align="center">
          Students, educators, and professionals from all backgrounds are welcome. Everyone can make an impact.
        </Typography>
      </Box>
    </Box>

    {/* Discord Section - Two Columns, blue box styled like Programs */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Join Our Discord Community</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Connect with fellow students, get help from mentors, and stay up to date with our latest programs and events.</Typography>
        </Box>
  <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc">
        <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
          Join Our Discord Server
        </Typography>
  <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Box flex={1} display="flex" justifyContent="flex-start" alignItems="center" sx={{ minWidth: 0 }}>
            <iframe
              src="https://discord.com/widget?id=750366801430577263&theme=dark"
              allowTransparency={true}
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              style={{ background: '#fff', borderRadius: 8, width: '100%', minWidth: 200, minHeight: 300, maxWidth: 350 }}
            ></iframe>
          </Box>
          <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ minWidth: 0 }}>
            <img src={cursorImg} alt="Click cursor" style={{ width: 80, height: 80, marginBottom: -120, marginLeft: 20, pointerEvents: 'none', zIndex: 2, position: 'relative' }} />
            <a href="https://discord.gg/ecJhHVd" target="_blank" rel="noopener noreferrer">
              <img src={discordImg} alt="Join Discord" style={{ maxWidth: 120, width: '100%', height: 'auto', cursor: 'pointer', border: 'none', background: 'none', boxShadow: 'none', borderRadius: 0 }} />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>

    {/* Volunteer Form Section - Two Columns, orange box styled like Programs */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={4} border="3px solid #f24c02">
        <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
          Enroll as a Volunteer
        </Typography>
        <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
          <iframe
            title="Volunteer Registration Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdz0c-XrWNiR48V1DZ0tJofMwdXqg1_YszKvdzvJdQzMRiA0Q/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{ background: '#fff', borderRadius: 8, width: '100%', minHeight: 400, filter: 'invert(85%) hue-rotate(180.0deg)'}}
          >Loading…</iframe>
        </Box>
      </Box>
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Volunteer Registration</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" mb={2} align="center">Fill out the form to join our team of passionate volunteers. We welcome students, educators, and professionals from all backgrounds!</Typography>
        </Box>
    </Box>

    {/* Slideshow Section - Impact Map Style */}
    <Box mb={6} textAlign="center">
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Slideshow For Prospective Volunteers
      </Typography>
      <Box display="flex" justifyContent="center">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTNAnLNnWuJEpG7wYFiesXMxCOJVwZif0NisDPDbbVt-F-d1K_M0h-pbH86B9Alf7JSZNKnlJjgwgML/pubembed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="1055"
          height="630"
          allowFullScreen
          style={{ border: 0, maxWidth: '100%', aspectRatio: '16/9', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
        ></iframe>
      </Box>
    </Box>
  </Box>
);

export default Join;
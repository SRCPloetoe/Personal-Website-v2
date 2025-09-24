import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ANNOUNCEMENT_ENABLED = false; // Set to false to disable the bar
const ANNOUNCEMENT_MESSAGE = 'Join our Discord community for updates and support!';
const BUTTON_TEXT = 'Discord';
const ANNOUNCEMENT_LINK = 'https://discord.gg/6yHhgpC';

const AnnouncementBar: React.FC = () => {
  if (!ANNOUNCEMENT_ENABLED) return null;
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#f24c02',
        color: '#fff',
        px: 2,
        py: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: 500,
        fontSize: { xs: 15, md: 17 },
        zIndex: 1301,
        position: 'relative',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ gap: 2 }}>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#fff', fontWeight: 500 }}>
          {ANNOUNCEMENT_MESSAGE}
        </Typography>
        <Button
          href={ANNOUNCEMENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: 2.5,
            background: '#f24c02',
            color: '#fff',
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: 'none',
            border: '2px solid #fff',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              background: '#d13c00',
              borderColor: '#fff',
              color: '#fff',
            },
          }}
        >
          {BUTTON_TEXT}
          <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default AnnouncementBar;

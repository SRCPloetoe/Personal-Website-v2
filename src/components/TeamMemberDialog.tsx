import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface TeamMemberDialogProps {
  open: boolean;
  onClose: () => void;
  name: string;
  images: string[];
  description: string;
}

const TeamMemberDialog: React.FC<TeamMemberDialogProps> = ({ open, onClose, name, images, description }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 0 }}>
      <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif">{name}</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  <DialogContent sx={{ minHeight: { xs: 600, sm: 800, md: 1000 }, maxHeight: { xs: 900, sm: 1200, md: 1400 }, overflowY: 'auto' }}>
      <Box mb={3}>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop dynamicHeight={false}>
          {images.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`${name} ${idx + 1}`} style={{ maxHeight: 600, objectFit: 'contain', margin: '0 auto' }} />
            </div>
          ))}
        </Carousel>
      </Box>
      <Typography
        variant="body1"
        fontFamily="Inter, Arial, sans-serif"
        sx={{
          whiteSpace: 'pre-line',
          fontSize: {
            xs: '0.95rem',
            sm: '1rem',
          },
          '@media (max-width:800px)': {
            fontSize: '0.9rem',
          },
          '@media (max-width:600px)': {
            fontSize: '0.8rem',
          },
        }}
      >
        {description}
      </Typography>
    </DialogContent>
  </Dialog>
);

export default TeamMemberDialog;

import React, { useState } from 'react';
import img_1_1_1 from '../img/programs/1_1_1.png';
import img_1_1_2 from '../img/programs/1_1_2.png';
import img_1_1_3 from '../img/programs/1_1_3.png';
import img_1_2_1 from '../img/programs/1_2_1.png';
import img_1_2_2 from '../img/programs/1_2_2.png';
import img_1_2_3 from '../img/programs/1_2_3.png';
import img_1_3_1 from '../img/programs/1_3_1.png';
import img_1_3_2 from '../img/programs/1_3_2.png';
import img_1_3_3 from '../img/programs/1_3_3.png';
import img_1_4_1 from '../img/programs/1_4_1.png';
import img_1_4_2 from '../img/programs/1_4_2.png';
import img_1_4_3 from '../img/programs/1_4_3.png';
import img_1_5_1 from '../img/programs/1_5_1.png';
import img_1_5_2 from '../img/programs/1_5_2.png';
import img_1_5_3 from '../img/programs/1_5_3.png';
import img_2_1_1 from '../img/programs/2_1_1.png';
import img_2_1_2 from '../img/programs/2_1_2.png';
import img_2_1_3 from '../img/programs/2_1_3.png';
import img_2_2_1 from '../img/programs/2_2_1.png';
import img_2_2_2 from '../img/programs/2_2_2.png';
import img_2_2_3 from '../img/programs/2_2_3.png';
import img_2_3_1 from '../img/programs/2_3_1.png';
import img_2_3_2 from '../img/programs/2_3_2.png';
import img_2_3_3 from '../img/programs/2_3_3.png';
import img_2_4_1 from '../img/programs/2_4_1.png';
import img_2_4_2 from '../img/programs/2_4_2.png';
import img_2_4_3 from '../img/programs/2_4_3.png';
import img_3_1_1 from '../img/programs/3_1_1.png';
import img_3_1_2 from '../img/programs/3_1_2.png';
import img_3_1_3 from '../img/programs/3_1_3.png';
import img_3_2_1 from '../img/programs/3_2_1.png';
import img_3_2_2 from '../img/programs/3_2_2.png';
import img_3_2_3 from '../img/programs/3_2_3.png';
import img_3_3_1 from '../img/programs/3_3_1.png';
import img_3_3_2 from '../img/programs/3_3_2.png';
import img_3_3_3 from '../img/programs/3_3_3.png';
import img_3_4_1 from '../img/programs/3_4_1.png';
import img_3_4_2 from '../img/programs/3_4_2.png';
import img_3_4_3 from '../img/programs/3_4_3.png';
import img_3_5_1 from '../img/programs/3_5_1.png';
import img_3_5_2 from '../img/programs/3_5_2.png';
import img_3_5_3 from '../img/programs/3_5_3.png';
import img_4_1_1 from '../img/programs/4_1_1.png';
import img_4_1_2 from '../img/programs/4_1_2.png';
import img_4_1_3 from '../img/programs/4_1_3.png';
import img_4_2_1 from '../img/programs/4_2_1.png';
import img_4_2_2 from '../img/programs/4_2_2.png';
import img_4_2_3 from '../img/programs/4_2_3.png';
import img_4_3_1 from '../img/programs/4_3_1.png';
import img_4_3_2 from '../img/programs/4_3_2.png';
import img_4_3_3 from '../img/programs/4_3_3.png';
import img_5_1_1 from '../img/programs/5_1_1.png';
import img_5_1_2 from '../img/programs/5_1_2.png';
import img_5_1_3 from '../img/programs/5_1_3.png';
import img_5_2_1 from '../img/programs/5_2_1.png';
import img_5_2_2 from '../img/programs/5_2_2.png';
import img_5_2_3 from '../img/programs/5_2_3.png';
import img_5_3_1 from '../img/programs/5_3_1.png';
import img_5_3_2 from '../img/programs/5_3_2.png';
import img_5_3_3 from '../img/programs/5_3_3.png';
import { Box, Typography, Grid, Card, CardContent, Button, Collapse, IconButton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const curriculumPhilosophy = [
  {
    title: 'Hands-On Learning',
    description: 'We believe students learn best by doing. Our programs are interactive and project-based.'
  },
  {
    title: 'Accessible for All',
    description: 'We design our curriculum to be inclusive and adaptable for students of all backgrounds.'
  },
  {
    title: 'Real-World Impact',
    description: 'Our courses connect STEM concepts to real-world problems and solutions.'
  }
];

// const courses = [
//   {
//     title: 'Intro to Robotics',
//     subtitle: 'Build and program your own robot! No experience required.',
//     images: [
//       'https://source.unsplash.com/400x300/?robotics',
//       'https://source.unsplash.com/400x300/?robot,workshop',
//     ],
//     details: 'This course covers the basics of robotics, including sensors, motors, and simple programming.'
//   },
//   {
//     title: 'Web Development Bootcamp',
//     subtitle: 'Learn to build websites from scratch using HTML, CSS, and JavaScript.',
//     images: [
//       'https://source.unsplash.com/400x300/?web,code',
//       'https://source.unsplash.com/400x300/?html,css',
//     ],
//     details: 'Students will create their own personal website and learn the fundamentals of web development.'
//   },
//   {
//     title: 'Science Explorers',
//     subtitle: 'Hands-on experiments in physics, chemistry, and biology.',
//     images: [
//       'https://source.unsplash.com/400x300/?science,experiment',
//       'https://source.unsplash.com/400x300/?biology,lab',
//     ],
//     details: 'Explore the wonders of science through fun and safe experiments.'
//   },
//   // Add more courses as needed
// ];

const Programs: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpandClick = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <Box px={{ xs: 2, md: 6 }} py={6}>
      {/* Email List & Upcoming Programs Section - Two Column Like Mission/Vision */}
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
    <Box bgcolor="#473024" color="#fff" borderRadius={2} p={4} border="3px solid #f24c02">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
            Join Our Email List
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              title="Email List Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfuO4yWisWh7m0YcRzWSbD0YvkdtBHOgDC0TKqJfszfnZoyXw/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ background: '#fff', borderRadius: 8, width: '100%', minHeight: 400, filter: 'invert(85%) hue-rotate(180deg)'}}
            >Loading…</iframe>
          </Box>
        </Box>
  <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc">
          <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={2} align="center">
            Upcoming Programs
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              title="Upcoming Programs Sheet"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqYF7j6m434dECqFqmRPbM3QHwvPVGjMhnZyqgwTAP-UyU6HdbiXwOPRbLqRSNff5-BAskWZlFAWvk/pubhtml?gid=704390668&amp;single=true&amp;widget=true&amp;headers=false"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ background: '#fff', borderRadius: 8, width: '100%', minHeight: 400, filter: 'invert(85%) hue-rotate(180deg)' }}
            ></iframe>
          </Box>
        </Box>
      </Box>

      {/* Philosophy Section Header */}
  <Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
        Philosophy
      </Typography>
      {/* Curriculum Philosophy - Three Column Like About Top Section */}
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6}>
        {curriculumPhilosophy.map((item, idx) => (
          <Box key={idx} textAlign="center">
            <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
              {item.title}
            </Typography>
            <Typography color="text.secondary" align="center">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Our Courses Section - Five Grids Like Partners Section in About */}
  <Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
        Our Courses
      </Typography>

      {/* Engineering Section */}
      <Typography variant="h5" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif">Engineering</Typography>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
        mb={4}
      >
        {/* Engineering courses with carousels */}
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_1_1_1} alt="Maker Space Workshops 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_1_2} alt="Maker Space Workshops 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_1_3} alt="Maker Space Workshops 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[1.1] Maker Space Workshops**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 1-5 OK and grades 2-4 ideal (US/Canada){"\n"}
            • Ages 6-13 (International){"\n"}
            • Projector/TV, occasional office supplies{"\n"}
            • Introducing basic engineering concepts through fun and simple challenges like popsicle stick bridges, spaghetti and marshmallow towers, wooden cars, and more!
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_1_2_1} alt="Intro to Engineering 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_2_2} alt="Intro to Engineering 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_2_3} alt="Intro to Engineering 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[1.2] Intro to Engineering**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 5-8 OK and grades 6-8 ideal (US/Canada){"\n"}
            • Ages 12-18 (International){"\n"}
            • Projector/TV{"\n"}
            • Introducing more applicable engineering concepts through engineering challenges that walk students through real-world fields and problems faced by engineers.
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_1_3_1} alt="Intro to TinkerCAD 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_3_2} alt="Intro to TinkerCAD 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_3_3} alt="Intro to TinkerCAD 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[1.3] Intro to TinkerCAD*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 1-5 OK, grades 3-5 ideal (US/Canada){"\n"}
            • Ages 10-18 (International){"\n"}
            • Projector/TV, Tablets/Computers (if possible){"\n"}
            • Students learn how to make basic 3D models through computer-aided design using the beginner-friendly software TinkerCAD!
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_1_4_1} alt="Intro to Onshape 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_4_2} alt="Intro to Onshape 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_4_3} alt="Intro to Onshape 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[1.4] Intro to Onshape*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 5-12 OK, grades 6-10 ideal (US/Canada){"\n"}
            • Ages 13+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers (if possible){"\n"}
            • Students learn how to create 3D models and machines through computer-aided design in Onshape, a software used in robotics and industry across the world.
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_1_5_1} alt="Intro to Electrical Engineering 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_5_2} alt="Intro to Electrical Engineering 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_1_5_3} alt="Intro to Electrical Engineering 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[1.5] Intro to Electrical Engineering**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 5-12 OK, grades 6-8 ideal (US/Canada){"\n"}
            • Ages 12-18+ (International){"\n"}
            • Projector/TV{"\n"}
            • Students are introduced to more applicable engineering concepts through engineering challenges that walk students through real-world fields and problems faced by engineers.
          </Typography>
        </Box>
      </Box>

      {/* Mentoring Section */}
  <Typography variant="h5" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif">Mentoring</Typography>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
        mb={4}
      >
        {/* Updated Mentoring courses */}
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_2_1_1} alt="Intro to FLL 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_1_2} alt="Intro to FLL 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_1_3} alt="Intro to FLL 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[2.1] Intro to FLL**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 4-8 (US/Canada){"\n"}
            • Ages 9-16 (International){"\n"}
            • LEGO SPIKE Prime kits, mats, project boards, and a workspace{"\n"}
            • This course is designed for students and parents to be able to learn the basics of F.I.R.S.T. Lego League to start a robotics team and prepare for competition, supported by volunteer coaches with past participation or judging experience in FLL. This course is being co-developed with FTC Team 23511, Seattle Solvers.
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_2_2_1} alt="Intro to FTC 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_2_2} alt="Intro to FTC 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_2_3} alt="Intro to FTC 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[2.2] Intro to FTC**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 6-12 OK, grades 7-10 ideal (US/Canada){"\n"}
            • Ages 12-18 (International){"\n"}
            • FTC Robot kits, project boards, computers, and a workspace{"\n"}
            • This course is designed for students and parents to be able to learn the basics of F.I.R.S.T. Tech Challenge to start a robotics team and prepare for competition, supported by volunteer coaches who have past participation or judging experience in FTC. This course is being co-developed with FTC Team 20613, Metal Maniacs.
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_2_3_1} alt="Intro to Science Fair 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_3_2} alt="Intro to Science Fair 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_3_3} alt="Intro to Science Fair 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[2.3] Intro to Science Fair*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 6-12 OK, grades 6-8 ideal (US/Canada){"\n"}
            • Ages 14-18 (International){"\n"}
            • Projector/TV, Chromebooks/Computers{"\n"}
            • Students learn how a science fair works and how to compete in their local ISEF-affiliated fair, creating a science or engineering project of their interest and presenting to adult judges, taught by current/former participants. This course was co-developed with the Greater San Diego Science and Engineering Fair (GSDSEF) Student Leadership Board (SLB).
          </Typography>
        </Box>
  <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_2_4_1} alt="Intro to Research 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_4_2} alt="Intro to Research 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_2_4_3} alt="Intro to Research 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[2.4] Intro to Research**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 8+ OK (US/Canada){"\n"}
            • Ages 13+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers{"\n"}
            • Students learn about key concepts of performing original research and participating in academia through demonstrations, case studies, and projects. This courses uses curriculum developed by the International Research Olympiad.
          </Typography>
        </Box>
      </Box>

      {/* Programming Section */}
  <Typography variant="h5" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif">Programming</Typography>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
        mb={4}
      >
        {/* Updated Programming courses */}
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_3_1_1} alt="Intro to Python 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_1_2} alt="Intro to Python 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_1_3} alt="Intro to Python 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[3.1] Intro to Python*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 3+ OK, grades 5-8 ideal (US/Canada){"\n"}
            • Ages 13+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers (if possible){"\n"}
            • Students learn how to use the beginner-friendly Python programming language, the most popular language for programming today, and are exposed to its applications in data science and artificial intelligence.
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_3_2_1} alt="Intro to Java 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_2_2} alt="Intro to Java 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_2_3} alt="Intro to Java 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[3.2] Intro to Java*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 5+ OK, grades 7-10 ideal (US/Canada){"\n"}
            • Ages 13+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers (if possible){"\n"}
            • Students learn how to use the Java programming language, one of the most popular languages for programming today, and are exposed to its applications in robotics and app development.
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_3_3_1} alt="Intro to Artificial Intelligence 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_3_2} alt="Intro to Artificial Intelligence 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_3_3} alt="Intro to Artificial Intelligence 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[3.3] Intro to Artificial Intelligence*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 6+ OK, grades 8-12 ideal (US/Canada){"\n"}
            • Ages 16+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers (if possible){"\n"}
            • Students who are familiar with another programming language are introduced to applications of programming to fields in artificial intelligence, such as computer vision, natural langauge processing, and machine learning.
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_3_4_1} alt="Intro to Front-End Development 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_4_2} alt="Intro to Front-End Development 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_4_3} alt="Intro to Front-End Development 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[3.4] Intro to Front-End Development*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 6+ OK, grades 6-10 ideal (US/Canada){"\n"}
            • Ages 13+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers (if possible){"\n"}
            • Students learn how to create their own basic website using JavaScript, HTML, and CSS, and learn important concepts about frontend development that power the modern internet!
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_3_5_1} alt="Intro to Programming with Scratch 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_5_2} alt="Intro to Programming with Scratch 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_3_5_3} alt="Intro to Programming with Scratch 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[3.5] Intro to Programming with Scratch*</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 1-8 OK, grades 3-5 ideal (US/Canada){"\n"}
            • Ages 10+ (International){"\n"}
            • Projector/TV, Chromebooks/Computers (if possible){"\n"}
            • Students learn basic concepts of programming with Scratch, a visual block-coding interface developed by professionals at MIT, to create simple games and scenes!
          </Typography>
        </Box>
      </Box>

      {/* Physics/Math Section */}
      <Typography variant="h5" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif">Physics/Math</Typography>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
        mb={4}
      >
        {/* Updated Physics/Math courses */}
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_4_1_1} alt="Intro to Algebra and Geometry 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_4_1_2} alt="Intro to Algebra and Geometry 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_4_1_3} alt="Intro to Algebra and Geometry 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[4.1] Intro to Algebra and Geometry**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 2-7 OK, grades 3-5 ideal (US/Canada){"\n"}
            • Ages 10-18 (International){"\n"}
            • Projector/TV, Whiteboard, Paper/Pencils (if possible){"\n"}
            • An introductory math course for students who are familiar with addition, subtraction, multiplication, and division, but have not yet used variables or geometry principles, in an interactive format.
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_4_2_1} alt="Intro to Classical Physics 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_4_2_2} alt="Intro to Classical Physics 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_4_2_3} alt="Intro to Classical Physics 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[4.2] Intro to Classical Physics**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 4-10 OK, grades 5-8 ideal (US/Canada){"\n"}
            • Ages 10-18 (International){"\n"}
            • Projector/TV, Whiteboard, Paper/Pencils (if possible){"\n"}
            • Students use projects and demonstrations to learn about key classical physics concepts like forces, motion, gravity, buoyancy, springs, and more, while building their own machines!
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_4_3_1} alt="Intro to Electromagnetism 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_4_3_2} alt="Intro to Electromagnetism 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_4_3_3} alt="Intro to Electromagnetism 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[4.3] Intro to Electromagnetism**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 4-10 OK, grades 6-8 ideal (US/Canada){"\n"}
            • Ages 13-18 (International){"\n"}
            • Projector/TV, Whiteboard, Paper/Pencils (if possible){"\n"}
            • Students use projects and demonstrations to learn about key elements of electromagnetism and modern physics concepts like magnets, fields, circuits, waves, and relativity!
          </Typography>
        </Box>
      </Box>

      {/* Natural Sciences Section */}
  <Typography variant="h5" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif">Natural Sciences</Typography>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: { xs: 2, md: 4 },
          '@media (max-width:1200px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          '@media (max-width:800px)': { gridTemplateColumns: '1fr' },
        }}
        mb={4}
      >
        {/* Updated Natural Sciences courses */}
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_5_1_1} alt="Intro to Earth Science 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_5_1_2} alt="Intro to Earth Science 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_5_1_3} alt="Intro to Earth Science 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[5.1] Intro to Earth Science**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 1-6 OK, grades 3-5 ideal (US/Canada){"\n"}
            • Ages 10+ (International){"\n"}
            • Projector/TV, Whiteboard (if possible){"\n"}
            • Students learn about the basics of earth science through activities and experiments, including how populations behave, the layers of earth, why seasons exist, and more!
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_5_2_1} alt="Intro to Biology 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_5_2_2} alt="Intro to Biology 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_5_2_3} alt="Intro to Biology 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[5.2] Intro to Biology**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 3-8 OK, grades 5-8 ideal (US/Canada){"\n"}
            • Ages 10+ (International){"\n"}
            • Projector/TV, Whiteboard (if possible){"\n"}
            • Students learn about key concepts of biology and life through experiments and demonstrations, including cell behavior, photosynthesis, nutrients, and more.
          </Typography>
        </Box>
        <Box bgcolor="#473024" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
            <img src={img_5_3_1} alt="Intro to Chemistry 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_5_3_2} alt="Intro to Chemistry 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
            <img src={img_5_3_3} alt="Intro to Chemistry 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
          </Carousel>
          <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 18, md: 20 } }}>[5.3] Intro to Chemistry**</Typography>
          <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
            • Grades 4-8 OK, grades 5-8 ideal (US/Canada){"\n"}
            • Ages 10+ (International){"\n"}
            • Projector/TV, Whiteboard (if possible){"\n"}
            • Students learn about key concepts of chemistry through labs and experiments, including molecular structure, types of reactions, and more.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Programs;
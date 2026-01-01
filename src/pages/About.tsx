import React from 'react';
import projectnextech from '../img/partners/projectnextech.png';
import iro from '../img/partners/iro.png';
import gsdsef from '../img/partners/gsdsef.png';
import fpsspeechanddebate from '../img/partners/fpsspeechanddebate.png';
import fps from '../img/partners/fps.png';
import sdsuengineering from '../img/partners/sdsuengineering.jpg';
import frc2485 from '../img/partners/frc2485.png';
import sdccd from '../img/partners/sdccd.png';
import ucsd from '../img/partners/ucsd.png';
import { Box, Typography } from '@mui/material';

const partners = [
  { name: 'Student, Francis Parker School', logo: fps, subtitle: 'I\'m currently a senior at Francis Parker. I\'ll graduate Cum Laude in May 2026.', url: 'https://www.francisparker.org/' },
  { name: 'Student, San Diego Community College District', logo: sdccd, subtitle: 'I\'m concurrently enrolled in mathematics classes in the San Diego Community College District.', url: 'https://www.sdccd.edu/' },
  { name: 'President, Project NexTech, Inc.', logo: projectnextech, subtitle: 'I\'m the founder and current President of Project NexTech, an international STEM education nonprofit.', url: 'https://projectnextech.org/' },
  { name: 'Research Intern, San Diego State University IoT Lab', logo: sdsuengineering, subtitle: 'I perform transportation research at the Internet of Things (IoT) Lab under an ECE professor.', url: 'https://iotlab.sdsu.edu/' },
  { name: 'President, Francis Parker School Speech and Debate', logo: fpsspeechanddebate, subtitle: 'I\'m a fourth-year competitor and nationally ranked speaker and debater of Parker\'s Speech and Debate team.', url: 'https://www.instagram.com/fpsspeechanddebate/' },
  { name: 'Director of Manufacturing, FRC Team 2485', logo: frc2485, subtitle: 'I\'m a fourth-year competitor in the Build Department of F.I.R.S.T. Robotics Competition Team 2485, Overclocked.', url: 'https://www.francisparker.org/robotics/team/overclocked' },
  { name: 'VP of Outreach, GSDSEF Student Leadership Board', logo: gsdsef, subtitle: 'I\'m a third-year member of the Greater San Diego Science and Engineering Fair Student Leadership Board.', url: 'https://www.gsdsef.org/' },
  { name: 'Director of Curriculum, International Research Olympiad', logo: iro, subtitle: 'I\'m a third-year volunteer of the International Research Olympiad, leading curriculum development and helping run the Olympiad.', url: 'https://www.internationalresearcholympiad.org/' },
  { name: 'Shadow, University of California, San Diego', logo: ucsd, subtitle: 'I shadow mathematics classes and receive informal research guidance from 2 professors at UC San Diego.', url: 'https://www.ucsd.edu/' }
];

const About: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    {/* Mission & Vision */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
      <Box bgcolor="#473024" color="#fff" borderRadius={2} p={4} border="3px solid #f24c02">
        <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Research Focus
        </Typography>
        <Typography>
          I'm an ambitious student, engineer, programmer, and volunteer in San Diego. I plan to major in Mechanical Engineering, Electrical/Computer Engineering, or Robotics.
          <br />
          <Box sx={{ height: '0.5em' }} /> {/* Half line break */}
          I build robots, machines, and contraptions to solve problems. I'm professionally certified in computer-aided design (CAD) with 4 years of experience in CAD/CAM through SolidWorks and Onshape. I'm a qualified CNC machinist, 3D printing enthusiast, and solderer. I've used these skills to create a custom-made model robot car, 8 vehicle data collection modules, multiple F.I.R.S.T. Robotics Competition robots, and more.
          <br />
          <Box sx={{ height: '0.5em' }} /> {/* Half line break */}
          I create software. I have several years of programming experience, proficient in Python (5 years), Java (4 years), JavaScript/HTML (5 years), and C++ (9 years). I've used these skills to create perception software for autonomous vehicles, vehicle detection/tracking software, machine learning models, a personal and nonprofit React.js website, an Android app, control systems for remote-controlled cars, and more.
          <br />
          <Box sx={{ height: '0.5em' }} /> {/* Half line break */}
          I'm a passionate researcher and presenter. I've interned at several university labs and programs, developing a wide set of experiences. I compete at science fairs and symposia, such as the GSDSEF, and submit to academic conferences and journals, including JSHS, IEEE IV, IEEE MOST, and more. I also compete in Speech and Debate, having qualified for and competed at the state tournament (#6 in CA) and national tournament (Top 60 in US) in 2025.
          <br />
          <Box sx={{ height: '0.5em' }} /> {/* Half line break */}
          In college, I want to learn about cutting-edge autonomous vehicle technology, identifying how to innovate and make it profitable for developing countries.
        </Typography>
      </Box>
      <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc">
        <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Academics
        </Typography>
        <Typography>
          I challenge myself academically by taking difficult classes and holding myself to high standards. Before graduating cum laude in May 2026, I'll finish 15 AP courses and 6 college courses, exhausting all math offerings at my school and community college.
          <br />
          <Box sx={{ height: '0.5em' }} /> {/* Half line break */}
          At school, I'm involved with: Project NexTech Club (President), organizing volunteer training and classes; Speech and Debate (President), leading practice sessions and registration; Math Club (President), hosting review sessions; and Robotics (Director of Manufacturing), leading training, machining tasks, and onboarding. I was also an admissions ambassador for 7 years.
          <br />
          <Box sx={{ height: '0.5em' }} /> {/* Half line break */}
          I lead the largest student-led STEM nonprofit in San Diego, Project NexTech (visit projectnextech.org), with a team of 260+ volunteers. We teach STEM classes through our 20 custom-made courses. We do outreach for organizations in need, manage our online presence, handle lots of data, and manage our student leaders. We've taught 1580+ students in 17+ countries.
        </Typography>
      </Box>
    </Box>

    {/* Partners Showcase 3x3 */}
    <Box>
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Organizations
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} gap={4}>
        {partners.map((partner, idx) => (
          <Box key={idx} bgcolor="#303947" color="#fff" borderRadius={2} textAlign="center" py={4} px={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <img src={partner.logo} alt={partner.name} style={{ maxWidth: 120, marginBottom: 8, cursor: 'pointer' }} />
              </a>
              <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
                <Typography fontFamily="Inter, Arial, sans-serif" fontWeight={700}>
                  {partner.name}
                </Typography>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: '#fff', display: 'inline-flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </Box>
              <Typography fontFamily="Inter, Arial, sans-serif" color="#b0b0b0">{partner.subtitle}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default About;
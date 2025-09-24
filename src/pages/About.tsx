import React from 'react';
import cityOfSanDiego from '../img/partners/city_of_san_diego.png';
import iro from '../img/partners/iro.png';
import gsdsef from '../img/partners/gsdsef.png';
import fps from '../img/partners/fps.png';
import qualcomm from '../img/partners/q.png';
import google from '../img/partners/g.png';
import gallery1 from '../img/gallery_1.png';
import gallery2 from '../img/gallery_2.png';
import gallery3 from '../img/gallery_3.png';
import gallery4 from '../img/gallery_4.png';
import gallery5 from '../img/gallery_5.png';
import gallery6 from '../img/gallery_6.png';
import gallery7 from '../img/gallery_7.png';
import gallery8 from '../img/gallery_8.png';
import { Box, Typography } from '@mui/material';

const bigNumbers = [
  { number: '1125+', label: 'Students Taught' },
  { number: '216+', label: 'Student Volunteers' },
  { number: '12+', label: 'Countries Reached' },
  { number: '4300+', label: 'Volunteer Hours' },
  { number: '20+', label: 'Courses Made' },
  { number: '$6.1k+', label: 'Amount Raised' },
  { number: '90+', label: 'Programs Run' },
  { number: '47+', label: 'Regions' },
];

const partners = [
  { name: 'City of San Diego', logo: cityOfSanDiego, subtitle: 'We have a Right of Entry contract with the City of San Diego, which allows us to easily run programs at all San Diego Branch Library locations. In exchange for this permission, we provide free STEM programs for library patrons and community members.', url: 'https://www.sandiego.gov/' },
  { name: 'International Research Olympiad (IRO)', logo: iro, subtitle: 'We are an IRO partner, so all Project NexTech school clubs are IRO-affiliated, and some of our Research curriculum was developed by the IRO. Our mission aligns with their mission of promoting STEM and research across the world.', url: 'https://www.internationalresearcholympiad.org/' },
  { name: 'Greater San Diego Science and Engineering Fair (GSDSEF)', logo: gsdsef, subtitle: 'We co-host the GSDSEF\'s annual bootcamps for students wanting to participate in the Fair across San Diego. We provide insurance coverage, locations, and students for the events. We also co-developed our [2.3] Intro to Science Fair course with the GSDSEF Student Leadership Board.', url: 'https://www.gsdsef.org/' },
  { name: 'Francis Parker School', logo: fps, subtitle: 'The eight founding members of Project NexTech were from Francis Parker School. We have a Facilities Use Agreement with the School to be able to host programs on campus for the Linda Vista and wider San Diego community. Our goals align with their mission to promote academic excellence.', url: 'https://www.francisparker.org/' },
  { name: 'Qualcomm', logo: qualcomm, subtitle: 'We have received over $2000 in funding from Qualcomm through grant-matching, and have applied for more. We also host programs at the Qualcomm campus in San Diego for the Sorrento Valley and wider San Diego community.', url: 'https://www.qualcomm.com/' },
  { name: 'Google', logo: google, subtitle: 'We have a Google for Nonprofits plan, which allows us to use Google Workspace for our work. Free access to this software has been crucial for our Google Drive, Gmail, Google accounts, and many of the embeds powering this website.', url: 'https://www.google.org/' },
];

const About: React.FC = () => (
  <Box px={{ xs: 2, md: 6 }} py={6}>
    {/* Three-column intro */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6}>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          What is Project NexTech?
        </Typography>
        <Typography color="text.secondary" align="center">
          We are a student-led international nonprofit organization teaching custom science, technology, engineering, and math (STEM) curricula to students at schools, libraries, and community centers worldwide.
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Why does our work matter?
        </Typography>
        <Typography color="text.secondary" align="center">
          We connect those with a passion for STEM and the resources to help others with the students who need their help the most. We work year-round, across the globe, for all ages of students.
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Our founding
        </Typography>
        <Typography color="text.secondary" align="center">
          Project NexTech began on May 19th, 2023 as a group of 8 students in San Diego, CA. Its first class had 4 instructors and 2 students. Students voted to teach STEM workshops for people beyond school.
        </Typography>
      </Box>
    </Box>

    {/* Mission & Vision */}
    <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6}>
      <Box bgcolor="#473024" color="#fff" borderRadius={2} p={4} border="3px solid #f24c02">
        <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Our Mission
        </Typography>
        <Typography>
          To inspire and support a global community of students through interactive, accessible, and high-quality STEM education, equipping them with a passion to combat real-world problems.
        </Typography>
      </Box>
      <Box bgcolor="#303947" color="#fff" borderRadius={2} p={4} border="3px solid #4083cc">
        <Typography variant="h4" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
          Our Vision
        </Typography>
        <Typography>
          A world where students with opportunity can volunteer easily, students in need can easily access many types of STEM education, and Project NexTech is an international hub for STEM education.
        </Typography>
      </Box>
    </Box>

    {/* Image Gallery Section: Programs Gallery */}
    <Box mb={6}>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
        gridTemplateRows={{ xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr' }}
        gap={3}
      >
        {/* Add your program images below. Replace src with your actual image paths. */}
  <img src={gallery1} alt="Program 1" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery2} alt="Program 2" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery3} alt="Program 3" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery4} alt="Program 4" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery5} alt="Program 5" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery6} alt="Program 6" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery7} alt="Program 7" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
  <img src={gallery8} alt="Program 8" style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }} />
      </Box>
    </Box>
    {/* Big Numbers Grid 4x2 */}
    <Box mb={6}>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }} gridTemplateRows={{ xs: '1fr 1fr 1fr 1fr', md: '1fr 1fr' }} gap={4}>
        {bigNumbers.map((item, idx) => {
          // Numbers to highlight in blue
          const blueNumbers = ['20+', '216+', '90+', '4300+'];
          const numberColor = blueNumbers.includes(item.number) ? '#4083cc' : '#f24c02';
          return (
            <Box key={idx} bgcolor="#473024" color="#fff" borderRadius={2} textAlign="center" py={5} px={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h3" fontWeight={700} color={numberColor} fontFamily="Inter, Arial, sans-serif">
                {item.number}
              </Typography>
              <Typography color="#b0b0b0" fontFamily="Inter, Arial, sans-serif">
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>

    {/* Google MyMap Embed */}
    <Box mb={6} textAlign="center">
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Our Impact Map
      </Typography>
      <Box width="100%">
        <iframe
          title="Google MyMap"
          src="https://www.google.com/maps/d/u/0/embed?mid=1cfW8EF2DcCvJ3TkhxMR73vx3O3sCFfA&ehbc=2E312F"
          width="100%"
          height="640"
          style={{ border: 0, width: '100%' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </Box>

    {/* Partners Showcase 3x2 */}
    <Box>
      <Typography variant="h4" fontWeight={700} mb={2} fontFamily="Inter, Arial, sans-serif" align="center">
        Our Partners
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
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
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const curriculumPhilosophy = [
	{
		title: 'Autonomous Vehicles',
		description: 'Vehicles that drive themselves, particularly in developing countries'
	},
	{
		title: 'Robotics',
		description: 'The employment of robots to further research and development'
	},
	{
		title: 'Machine Vision',
		description: 'Software designed to interpret the world through visual inputs'
	}
];

const Projects: React.FC = () => {
	const [expanded, setExpanded] = useState<number | null>(null);

	const handleExpandClick = (idx: number) => {
		setExpanded(expanded === idx ? null : idx);
	};

	return (
		<Box px={{ xs: 2, md: 6 }} py={6}>
			{/* Philosophy Section Header */}
			<Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
				Areas of Interest
			</Typography>
			{/* Curriculum Philosophy - Three Column Like About Top Section */}
			<Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} mb={6}>
				   {curriculumPhilosophy.map((item, idx) => (
					   <React.Fragment key={idx}>
						   <Box textAlign="center">
							   <Typography variant="h5" fontWeight={700} fontFamily="Inter, Arial, sans-serif" mb={1} align="center">
								   {item.title}
							   </Typography>
							   <Typography color="text.secondary" align="center">
								   {item.description}
							   </Typography>
						   </Box>
					   </React.Fragment>
				   ))}
			</Box>

			{/* Our Courses Section - Five Grids Like Partners Section in About */}
	<Typography variant="h4" fontWeight={700} mb={4} fontFamily="Inter, Arial, sans-serif" align="center">
				Projects
			</Typography>

			   {/* Engineering Section */}
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
				   <Box bgcolor="#303947" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
					   <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
						   <img src={img_1_1_1} alt="Maker Space Workshops 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
						   <img src={img_1_1_2} alt="Maker Space Workshops 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
						   <img src={img_1_1_3} alt="Maker Space Workshops 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
					   </Carousel>
					   <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 16, md: 18 } }}>Enhancing Road Safety Through Multi-Camera Image Segmentation with Post-Encroachment Time Analysis</Typography>
					   <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
						   This paper introduces a real-time, multi-camera, edge-based computer vision system that computes pixel-level Post-Encroachment Time to generate high-resolution heatmaps for scalable, data-driven safety analysis at signalized intersections.{"\n"}
						   • San Diego State University Internet of Things (IoT) Lab{"\n"}
						   • Submitted to 2026 IEEE Intelligent Vehicles (IV) Symposium{"\n"}
						   • January 2024 to November 2025, still ongoing{"\n"}
						   •{' '}
						   <Link
						   href="https://arxiv.org/abs/2511.12018"
						   target="_blank"
						   rel="noopener noreferrer"
						   underline="hover"
						   color="#fff"
						   sx={{
							   display: 'inline-flex',
							   alignItems: 'center',
							   gap: 0.5,
							   fontWeight: 700,
						   }}
						   >
						   View Paper, arXiv:2511.12018 [cs.CV]
						   <OpenInNewIcon sx={{ fontSize: 16 }} />
						   </Link>
					   </Typography>
				   </Box>
				   <Box bgcolor="#303947" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
					   <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
						   <img src={img_1_2_1} alt="Maker Space Workshops 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
						   <img src={img_1_2_2} alt="Maker Space Workshops 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
						   <img src={img_1_2_3} alt="Maker Space Workshops 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
					   </Carousel>
					   <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 16, md: 18 } }}>Low-Cost Multimodal Data Acquisition Systems for Autonomous Vehicle Training in Emerging Markets</Typography>
					   <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
						   This paper presents a low-cost, modular embedded sensing platform deployed on real vehicles to collect large-scale multimodal autonomous driving data in unstructured traffic, demonstrating feasible perception and analysis in underrepresented developing regions.{"\n"}
						   • Independent Science Fair Project{"\n"}
						   • Submitting to 2026 IEEE International Conference on Mobility: Operations, Services, and Technologies (MOST){"\n"}
						   • September 2024 to January 2026, still ongoing{"\n"}
						   •{' '}
						   <Link
						   href="https://www.researchgate.net/publication/399277297_Low-Cost_Multimodal_Data_Acquisition_Systems_for_Autonomous_Vehicle_Training_in_Emerging_Markets"
						   target="_blank"
						   rel="noopener noreferrer"
						   underline="hover"
						   color="#fff"
						   sx={{
							   display: 'inline-flex',
							   alignItems: 'center',
							   gap: 0.5,
							   fontWeight: 700,
						   }}
						   >
						   View Paper, ResearchGate
						   <OpenInNewIcon sx={{ fontSize: 16 }} />
						   </Link>
					   </Typography>
				   </Box>
				   <Box bgcolor="#303947" color="#fff" borderRadius={2} p={2} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" sx={{ width: { xs: '100%' }, boxSizing: { xs: 'border-box' } }}>
					   <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay={false} width="100%" dynamicHeight={false}>
						   <img src={img_1_3_1} alt="Intro to Engineering 1" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
						   <img src={img_1_3_2} alt="Intro to Engineering 2" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
						   <img src={img_1_3_3} alt="Intro to Engineering 3" style={{ borderRadius: 8, width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
					   </Carousel>
					   <Typography fontWeight={700} mt={2} fontFamily="Inter, Arial, sans-serif" sx={{ fontSize: { xs: 16, md: 18 } }}>Scaled Autonomous Vehicle Testbed for Real-World System Validation and Prototyping</Typography>
					   <Typography color="text.secondary" fontFamily="Inter, Arial, sans-serif" sx={{ whiteSpace: 'pre-line' }}>
						   This paper presents a low-cost, open, modular 18-inch autonomous vehicle testbed with customizable hardware, multimodal sensing, and distributed compute, enabling accessible experimentation, data collection, and education where full-scale AV testing is impractical.{"\n"}
						   • Independent Symposium Project{"\n"}
						   • December 2024 to December 2025, still ongoing{"\n"}
						   •{' '}
						   <Link
						   href="https://www.researchgate.net/publication/399277102_Scaled_Autonomous_Vehicle_Testbed_for_Real-World_System_Validation_and_Prototyping"
						   target="_blank"
						   rel="noopener noreferrer"
						   underline="hover"
						   color="#fff"
						   sx={{
							   display: 'inline-flex',
							   alignItems: 'center',
							   gap: 0.5,
							   fontWeight: 700,
						   }}
						   >
						   View Paper, ResearchGate
						   <OpenInNewIcon sx={{ fontSize: 16 }} />
						   </Link>
					   </Typography>
				   </Box>
			   </Box>
			   <Typography align="center" fontWeight={600} fontSize={22} mt={4} mb={2} fontFamily="Inter, Arial, sans-serif">
				   More projects coming soon!
			   </Typography>
		</Box>
	);
};

export default Projects;
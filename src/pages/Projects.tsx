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

const Projects: React.FC = () => {
	const [expanded, setExpanded] = useState<number | null>(null);

	const handleExpandClick = (idx: number) => {
		setExpanded(expanded === idx ? null : idx);
	};

	return (
		<Box px={{ xs: 2, md: 6 }} py={6}>
			{/* Email List & Upcoming Projects Section - Two Column Like Mission/Vision */}
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
						Upcoming Projects
					</Typography>
					<Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
						<iframe
							title="Upcoming Projects Sheet"
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
						• Dive into engineering principles with hands-on projects like catapults, bridges, and more!
					</Typography>
				</Box>
				{/* ...rest of the course sections ... */}
			</Box>
		</Box>
	);
};

export default Projects;
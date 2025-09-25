import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme.ts';
import Navbar from './components/Navbar.tsx';
import AnnouncementBar from './components/AnnouncementBar.tsx';
import Footer from './components/Footer.tsx';

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Organizations from './pages/Organizations.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <AnnouncementBar />
          <Navbar />
          <Box component="main" flex={1} maxWidth={1800} mx="auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

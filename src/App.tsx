import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme.ts';
import Navbar from './components/Navbar.tsx';
import AnnouncementBar from './components/AnnouncementBar.tsx';
import Footer from './components/Footer.tsx';

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Programs from './pages/Programs.tsx';
import Team from './pages/Team.tsx';
import Contribute from './pages/Contribute.tsx';
import Join from './pages/Join.tsx';
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
              <Route path="/programs" element={<Programs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contribute" element={<Contribute />} />
              <Route path="/join" element={<Join />} />
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

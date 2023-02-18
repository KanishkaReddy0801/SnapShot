import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { GalleryProvider } from './contexts/GalleryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Mountain from './pages/Mountain';
import Beaches from './pages/Beaches';
import Birds from './pages/Birds';
import Food from './pages/Food';
import Search from './pages/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <GalleryProvider>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/food" element={<Food />} />
        <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </GalleryProvider>
    </Router>
  );
}

export default App;

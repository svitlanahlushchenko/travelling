// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Destination from './pages/Destination';
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

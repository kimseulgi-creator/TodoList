import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarOther from '../pages/CalendarOther';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cald" element={<CalendarOther />} />
    </Routes>
  )
}

export default AppRoutes
// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Admission from '../pages/Admission';
import MontessoriBenefits from '../components/Montessori/benefits/MontessoriBenefits';
import MontessoriTeachingMethods from '../components/Montessori/teachingMethods/MontessoriTeachingMethods';
import MontessoriVsTraditional from '../components/Montessori/differences/MontessoriVsTraditional';
import Event from '../pages/Event';
import TeacherTraining from '../pages/TeacherTraining';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/campus" element={<Gallery />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/events" element={<Event />} />
      <Route path="/teacher-training" element={<TeacherTraining />} />

      <Route path="/montessori-benefits" element={<MontessoriBenefits />} />
      <Route path="/teaching-methods" element={<MontessoriTeachingMethods />} />
      <Route path="/montessori-vs-traditionals" element={<MontessoriVsTraditional />} />

    </Routes>
  );
};

export default AppRoutes;
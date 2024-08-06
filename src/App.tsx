import React, { useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomeEN from './pages/HomeEN';
import HomeFR from './pages/HomeFR';
import Work from './pages/WorkEN';
import WorkEN from './pages/WorkEN';
import WorkFR from './pages/WorkFR';
import { scroller } from 'react-scroll';



function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto" // Défilement instantané
      });
    }, [pathname]);
  
    return null;
  }
  
  
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/en/" replace />} />
          <Route path="/home" element={<Navigate to="/en/" replace />} />
          <Route path="/acceuil" element={<Navigate to="/fr/" replace />} />
          <Route path="/en/" element={<HomeEN />} />
          <Route path="/fr/" element={<HomeFR />} />
          <Route path="/en/project/:projectId" element={<WorkEN />} />
          <Route path="/fr/projet/:projectId" element={<WorkFR />} />
        </Routes>
    </Router>
  );
}

export default App;

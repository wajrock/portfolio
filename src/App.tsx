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
    const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        // scroller.scrollTo(hash.substring(1), {
        //   duration: 800,
        //   delay: 0,
        //   smooth: 'easeInOutQuart'
        // });
      }
    }, [hash]);
  
    return null;
  }
  
  
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/en/" replace />} />
          <Route path="/en/" element={<HomeEN />} />
          <Route path="/fr/" element={<HomeFR />} />
          <Route path="/en/project/:projectId" element={<WorkEN />} />
          <Route path="/fr/projet/:projectId" element={<WorkFR />} />
        </Routes>
    </Router>
  );
}

export default App;

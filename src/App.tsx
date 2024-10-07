import React from "react";
import "./App.css";
import "./fonts/font.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { LanguageProvider } from "./LanguageContext";

function App() {

  return (
    <LanguageProvider>
      
      <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/project/:projectId" element={<Work />} />
              <Route path="/projet/:projectId" element={<Work />} />
            </Routes>
          </Router>
    </LanguageProvider>
   
  );
}

export default App;

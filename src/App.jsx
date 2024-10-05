import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-inter ${isDarkMode ? 'bg-[#232323] text-white' : 'bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// src/components/DarkModeToggle.jsx
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`toggle-switch ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      <div className={`toggle-circle ${isDarkMode ? 'dark' : 'light'}`}></div>
    </div>
  );
};

export default DarkModeToggle;

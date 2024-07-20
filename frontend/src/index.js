import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './master.css'
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <WorkoutsContextProvider>
          <App />
        </WorkoutsContextProvider>
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
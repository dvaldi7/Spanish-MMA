import './index.css'
import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Spanish-MMA/">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)

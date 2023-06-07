import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import CesiumViewer from './components/cesiumViewer';
import AframeScene from './components/aframeScene';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/aframe" element={<AframeScene />} />
        <Route element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

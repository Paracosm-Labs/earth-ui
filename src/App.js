import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import AframeScene from './components/aframeScene';
import LocationScene from './components/locationScene';
import LaunchBox from './components/launchboxScene';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/aframe" element={<AframeScene />} />
        <Route exact path="/locale" element={<LocationScene />} />
        <Route exact path="/launchbox" element={<LaunchBox />} />
        <Route element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

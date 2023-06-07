import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro';
import CesiumViewer from './components/CesiumViewer';
import AframeScene from './components/aframeScene';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CesiumViewer />} />
        <Route exact path="/aframe" element={<AframeScene />} />
        <Route element={<CesiumViewer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

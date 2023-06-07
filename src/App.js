import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Intro from './pages/introPage';
// import Welcome from './pages/welcomePage';
import CesiumViewer from './CesiumViewer';
import AframeScene from './aframeScene';

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

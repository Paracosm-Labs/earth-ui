import React, { useState } from 'react';
import 'aframe';
// import 'aframe-environment-component';
import 'aframe-extras';
// import Hud from '../components/hud';

const LaunchBoxScene = () => {
  const [units, setUnits] = useState(0);
  const [transport, setTransport] = useState(0);
  const [structures, setStructures] = useState(0);

  return (
    <div className="container-fluid game">
      <div className="row">
        <div className="col-9 m-auto" style={{ height: '700px', overflow: 'hidden' }}>
          <a-scene embedded inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
            <a-assets>
              <img id="skyTexture" src="/environments/1.jpg" />
            </a-assets>
            <a-sky src="#skyTexture"></a-sky>
            <a-camera rotation="-45 0 0">
              <a-cursor></a-cursor>
            </a-camera>
            <a-entity
              id="rig"
              position="0 1.6 0"
              aframe-injected
              movement-controls="speed: 0.6"
              class="touch-controls"
            >
              <a-entity
                camera
                look-controls="touchEnabled: true"
                wasd-controls-enabled="true"
              ></a-entity>
            </a-entity>
            <a-entity position="2.08 1.64 -3" rotation="" gamepad-controls="" trackpad-controls="" keyboard-controls="" touch-controls="">
              <a-plane position="0 0 -0.01" width="2" height="2" color="black" material="" geometry=""></a-plane>
              <a-text value={`Units: ${units}`} position="-0.5 0.5 0" color="white"></a-text>
              <a-text value={`Transport: ${transport}`} position="-0.5 0 0" color="white"></a-text>
              <a-text value={`Structures: ${structures}`} position="-0.5 -0.5 0" color="white"></a-text>
            </a-entity>
          </a-scene>
        </div>
        <div className="col-3 text-white">
          
        </div>
      </div>
    </div>
  );
};

export default LaunchBoxScene;

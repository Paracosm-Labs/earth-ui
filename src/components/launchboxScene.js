import React, { useState } from 'react';
import 'aframe';
import 'aframe-environment-component';
import 'aframe-extras';

const LaunchBoxScene = () => {
  const [units, setUnits] = useState(0);
  const [transport, setTransport] = useState(0);
  const [structures, setStructures] = useState(0);

  return (
    <a-scene inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
      <a-assets>
        <img id="skyTexture" src="/environments/1.jpg" />
      </a-assets>
      <a-sky src="#skyTexture"></a-sky>

      <a-camera>
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
<a-entity position="2.08 1.64 -3" rotation="" gamepad-controls="" trackpad-controls="" keyboard-controls="" touch-controls=""><a-plane position="0 0 -0.01" width="2" height="2" color="black" material="" geometry=""></a-plane>
<a-text value="Units: 0" position="-.5 0.5 0" color="white" text=""></a-text>
<a-text value="Transport: 0" position="-.5 0 0" color="white" text=""></a-text>
<a-text value="Structures: 0" position="-.5 -0.5 0" color="white" text=""></a-text></a-entity>
    </a-scene>
  );
};

export default LaunchBoxScene;




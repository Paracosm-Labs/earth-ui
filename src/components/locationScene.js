import React from 'react';
import 'aframe';
import 'aframe-environment-component';
import 'aframe-extras';

const LocationScene = () => {
  return (
    <a-scene>
      <a-assets>
        <img id="skyTexture" src="/environments/1.jpg" />
      </a-assets>

      <a-sky src="#skyTexture"></a-sky>

      <a-entity
        environment="preset: starry; groundTexture: walkernoise; groundColor: #552811; dressing: mushrooms; ground:  canyon;  dressingAmount: 500"
      ></a-entity>

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
    </a-scene>
  );
};

export default LocationScene;

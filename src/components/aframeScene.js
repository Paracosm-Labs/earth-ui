import React from 'react';
import 'aframe';
import countriesData from './countriesData';
import Hud from '../components/hud';

class AframeScene extends React.Component {
  render() {
    // Get the location from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const locationId = urlParams.get('location');

    // Find the location in the countriesData array
    const location = countriesData.find(country => country.id === locationId);

    // Get the URL of the 360-degree image for this location
    const imageUrl = `/environments/${locationId}.jpg`;

    return (
    <div className="container-fluid game">
      <div className="row">
        <div className="col-9 m-auto" style={{ height: '700px', overflow: 'hidden' }}>
          <a-scene embedded inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
        <a-assets>
          <img id="skyTexture" src={imageUrl} />
        </a-assets>
          <a-sky src="#skyTexture" animation="property: rotation; to: 0 360 0; loop: true; dur: 100000"></a-sky>
          {/* Add a welcome message */}
          <a-text
            value={`Welcome to ${location ? location.label : 'Unknown'}`}
            position="0 2.5 -3"
            align="center"
            color="#323232"
          ></a-text>
          {/* Add other elements to the scene here */}
        </a-scene>
        {/* Add a link back to the globe */}
        <a href="/" className="mb-5" style={{ position: 'absolute', bottom: '50px',left:'24%', color: '#d3d343', textDecoration: 'none' }}>
          <h1 className="text-center">Return to Orbital Station</h1>
        </a>
        </div>
        <div className="col-3 text-white">
          <Hud />
        </div>
      </div>
      </div>
    );
  }
}

export default AframeScene;

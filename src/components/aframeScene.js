import React from 'react';
import 'aframe';
import countriesData from './countriesData';

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
      <div>
        <a-scene>
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
        <a href="/" className="mb-5" style={{ position: 'absolute', bottom: '50px',left:'40%', color: '#434343', textDecoration: 'none' }}>
          <h1 className="text-center">Return to Orbital Station</h1>
        </a>
      </div>
    );
  }
}

export default AframeScene;

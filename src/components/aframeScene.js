import React from 'react';
import 'aframe';

class AframeScene extends React.Component {
  render() {
    // Get the location from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');

    // Get the URL of the 360-degree image for this location
    const imageUrl = `/environments/${location}.jpg`;

    return (
      <div>
        <a-scene>
          <a-sky src={imageUrl}></a-sky>
          {/* Add a welcome message */}
          <a-text
            value={`Welcome to ${location}`}
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

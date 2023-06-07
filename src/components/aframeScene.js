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
      <a-scene>
        <a-sky src={imageUrl}></a-sky>
        {/* Add a welcome message */}
        <a-text
          value={`Welcome to ${location}`}
          position="0 2.5 -3"
          align="center"
          color="#FFFFFF"
        ></a-text>
        {/* Add other elements to the scene here */}
      </a-scene>
    );
  }
}

export default AframeScene;

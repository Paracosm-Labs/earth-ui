import React from 'react';
import 'aframe';

class AframeScene extends React.Component {
  render() {
    // Get the location from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');

    // Get the URL of the 360-degree image for this location
    // This could be a static URL, or it could be dynamically generated based on the location
    const imageUrl = `/environments/${location}.jpg`;

    return (
      <a-scene>
        <a-sky src={imageUrl}></a-sky>
        {/* Add other elements to the scene here */}
      </a-scene>
    );
  }
}

export default AframeScene;

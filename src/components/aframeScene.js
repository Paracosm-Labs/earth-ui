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
    <div className="game">
      <div className="row m-0">
        <div className="col-12 m-auto text-center window">
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

          <a-entity id="hud1" position="0 1 -3">
            <a-text value="Resources: 30000" position="1.5 1 0"></a-text>
            <a-entity id="unit-list" position="5 -1 0">
              <a-image src="/img/alex.jpg" position="0 2 0" event-set__click="_event: click; scale: 0.2 0.2 0.5"></a-image>
              <a-text value="Growth & Sustainability" position="-1.5 -0.5 0"></a-text>
              <a-image src="/img/javier.jpg" position="0 3 0" event-set__click="_event: click; scale: 0.2 0.2 0.5"></a-image>
              <a-text value="Media & Entertainment" position="-1.5 -0.8 0"></a-text>
              {/* Add more units here */}
            </a-entity>
          </a-entity>

          </a-scene>
          {/* Add a link back to the globe */}
        
        </div>
        <div className="col-12 text-white text-center controller">
          {/*<Hud />*/} 
          <div className="row">
            <div className="col text-start">
              <button className="btn btn-outline-secondary btn-lg m-3">Return to Orbital Station</button>
            </div>
            <div className="col text-end">
              <button className="btn btn-outline-secondary btn-lg m-3">Menu</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AframeScene;

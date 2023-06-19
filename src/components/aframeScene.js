/* global AFRAME */
import React, {Component} from 'react';
import 'aframe';
import countriesData from './countriesData';
import Hud from './hud';
import GameController from './gameController';

class AframeScene extends Component {

state = {
  showHud: false,
  showController: false,
  movingUp: false,
  movingDown: false,
  movingLeft: false,
  movingRight: false
};


  componentDidMount() {

    if (!AFRAME.components.hud) {
      AFRAME.registerComponent('hud', {
        dependencies: ['material'],
        init: function () {
          this.el.components.material.material.depthTest = false;
          this.el.object3D.renderOrder = 100;
        }
      });
    }

  }


updateVrArButtonsDisplay = () => {
  const vrButton = document.querySelector('.a-enter-vr-button');
  const arButton = document.querySelector('.a-enter-ar-button');
  if (vrButton && arButton) {
    if (this.state.showController || this.state.showHud) {
      vrButton.style.display = 'none';
      arButton.style.display = 'none';
    } else {
      vrButton.style.display = 'block';
      arButton.style.display = 'block';
    }
  }
};



  handleNextLocation = () => {
      // Array of environment filenames
      const environments = [
        '1', '11', '111', '112', '113', '114', '14', '17', '19',
        '2', '21', '214', '22', '24', '3', '31', '32', '33',
        '4', '5', '6', '7'
      ];

      // Select a random environment
      const randomEnvironment = environments[Math.floor(Math.random() * environments.length)];

      // Redirect to the A-Frame scene for the random environment
      window.location.href = `/aframe?location=${randomEnvironment}`;
    }



    handleHud = () => {
      this.setState({ showHud: true }, this.updateVrArButtonsDisplay);
    };

    handleController = () => {
      this.setState({ showController: true }, this.updateVrArButtonsDisplay);
    };

    handleHudHide = () => {
      this.setState({ showHud: false }, this.updateVrArButtonsDisplay);
    };

    handleControllerHide = () => {
      this.setState({ showController: false }, this.updateVrArButtonsDisplay);
    };



    handleUp = () => {

    };

    handleDown = () => {

    };

    handleLeft = () => {

    };

    handleRight = () => {


    };





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
          <a-scene embedded inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
          >
          <a-assets>
            <img id="skyTexture" src={imageUrl} />
          </a-assets>


          <a-sky id="skybox" src="#skyTexture" animation="property: rotation; to: 0 360 0; loop: true; dur: 300000"></a-sky>
          {/* Add other elements to the scene here */}

          <a-entity
            id="rig"
            position="0 1.6 0"
            aframe-injected
            movement-controls="speed: 0.2"
            class="touch-controls"
          >


          <a-camera>
            <a-plane 
              position="0 0 -0.5" width="0.51" height="0.51" color="#CCC" 
              material="color: purple; opacity: 0.3" hud shadow>
            </a-plane>
            <a-text
              value={`Welcome to ${location ? location.label : 'Unknown'}`}
              position="0 0.8 -2"
              align="center"
              material="color: #323232;"
            ></a-text>
          </a-camera>

          <a-entity position="0 0 -6">
            <a-box position="-1 0 0" color="#4CC3D9"></a-box>
            <a-sphere position="0 1.25 -1" radius="1.25" color="#1F2D5E" shadow></a-sphere>
            <a-cylinder position="1 0.2 0" radius="0.5" height="0.5" color="#3FC65D" shadow></a-cylinder>
            <a-cone position="0 5 -6" radius-bottom="1" radius-top="0" height="2" color="#3BC8A4" shadow></a-cone>
            <a-plane position="0 0 -1" rotation="-90 0 0" width="4" height="4" color="#eeeeee" shadow></a-plane>
          </a-entity>      

          </a-entity>

          </a-scene>
          {/* Add a link back to the globe */}
        
        </div>
        <div className="col-12 text-white text-center controller">
          <div className="row m-1">
            <div className="col ">
              <button onClick={this.handleNextLocation} className="btn btn-outline-secondary btn-lg m-3">Next Location</button>
            </div>
            <div className="col text-center">
              <a href="/"><button className="btn btn-outline-secondary btn-lg m-3">Return to Orbital Station</button></a>
              <button onClick={this.handleController} className="btn btn-outline-secondary btn-lg m-3 d-none">Controller</button>
            </div>
            <div className="col ">
              <button onClick={this.handleHud} className="btn btn-outline-secondary btn-lg m-3">Menu</button>
            </div>
          </div>
        </div>
      </div>
        
        <Hud show={this.state.showHud} onHide={this.handleHudHide} />

        <GameController
          show={this.state.showController}
          onHide={this.handleControllerHide}
          onUp={this.handleUp}
          onDown={this.handleDown}
          onLeft={this.handleLeft}
          onRight={this.handleRight}
        />
      

      </div>
    );
  }
}

export default AframeScene;

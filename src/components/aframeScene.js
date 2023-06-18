import React from 'react';
import 'aframe';
import countriesData from './countriesData';
import Hud from '../components/hud';
import { Offcanvas } from 'react-bootstrap';

class AframeScene extends React.Component {

  state = {
    showHud: false
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



  handleMenu = () => {
    this.setState({ showHud: true });
  }

  handleClose = () => {
    this.setState({ showHud: false });
  }

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

          {/* Add other elements to the scene here */}


         {/* <a-entity id="rig" position="0 1.6 0" aframe-injected movement-controls="speed: 0.6" class="touch-controls"> */}
          <a-entity id="rig" position="0 1.6 0">
            <a-entity camera look-controls="touchEnabled: false" wasd-controls-enabled="false">

              <a-entity id="hud1" position="0 -1 -2"> 
                  {/* Add a welcome message */}
                  <a-text
                    value={`Welcome to ${location ? location.label : 'Unknown'}`}
                    position="0 2.5 -1"
                    align="center"
                    color="#323232"
                  ></a-text>
                  
                  <a-entity id="unit-list" position="7 -1 -2">
                    <a-text value="Resources: 30000" position="-1.5 4 0"></a-text>

                    <a-image src="/img/alex.jpg" position="0 2 0" event-set__click="_event: click; "></a-image>
                    <a-text value="Growth & Sustainability" position="-1.5 0.6 0"></a-text>
                    <a-image src="/img/javier.jpg" position="0 3 0" event-set__click="_event: click; "></a-image>
                    <a-text value="Media & Entertainment" position="-1.5 1 0"></a-text>
                    {/* Add more units here */}
                  </a-entity>
                
              </a-entity>
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
            </div>
            <div className="col ">
              <button onClick={this.handleMenu} className="btn btn-outline-secondary btn-lg m-3">Menu</button>
            </div>
          </div>
        </div>
      </div>

        <Offcanvas className="offcanvas-hud" show={this.state.showHud} onHide={this.handleClose} placement="end">
          <Offcanvas.Header closeButton className="btn-close-white">
            <Offcanvas.Title>Hud</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Hud />
          </Offcanvas.Body>
        </Offcanvas>

      </div>
    );
  }
}

export default AframeScene;

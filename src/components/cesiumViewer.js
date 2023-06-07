import React from 'react';
import 'cesium/Source/Widgets/widgets.css';
import * as Cesium from 'cesium';
import CountriesData from './countriesData'; // Define the points of interest
import PlayerStats from './playerStats'; // Define the points of interest

window.CESIUM_BASE_URL = '/';

//may be replaced and obfuscated later
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMjM1ODZmYi04ZTY3LTRmMTUtYTI4YS02ZDBjMjk1MjhmM2IiLCJpZCI6MTI2MjI0LCJpYXQiOjE2ODYxMTkwNDN9.dpl-cAXN5ylwihzBvDTFcS2hMvMHTJY46xtKzNicB6w';

class CesiumViewer extends React.Component {
  componentDidMount() {
    // Initialize the Cesium Viewer in the componentDidMount lifecycle method
    this.viewer = new Cesium.Viewer(this.cesiumContainer, {
      // Hide the base layer picker
      baseLayerPicker: false,
      // Use the OpenStreetMap imagery provider for the base layer
      // imageryProvider: new Cesium.OpenStreetMapImageryProvider(),
      // Hide the geocoder
      geocoder: false,
      // Hide the home button
      homeButton: false,
      // Hide the scene mode picker
      // sceneModePicker: false,
      // Hide the navigation help button
      navigationHelpButton: false,
      // Hide the timeline
      timeline: false,
      // Hide the animation widget
      animation: false,
      shouldAnimate: true,
    });
    // Add the points of interest
    for (const point of CountriesData) {
      const [longitude, latitude] = point.position.split(',').map(Number);
      const entity = new Cesium.Entity({
        id: point.id,
        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
        billboard: new Cesium.BillboardGraphics({
          image: point.logo, // Path to the image to use for the pin
          color: Cesium.Color.WHITE,
          scale: 0.2, // Adjust the scale of the image
        }),
        label: new Cesium.LabelGraphics({
          text: point.label,
          pixelOffset: new Cesium.Cartesian2(0, -50), // Offset the label so it doesn't overlap with the pin
          scale: 0.4, // Adjust the scale of the image
        }),
      });

    this.viewer.entities.add(entity);

    // Add a click event handler
    const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    handler.setInputAction((event) => {
      const pickedObject = this.viewer.scene.pick(event.position);
      if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id)) {
        // Redirect to the A-Frame scene for the clicked point of interest
        window.location.href = `/aframe?location=${pickedObject.id.id}`;
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);



  }
};



  handleButtonClick = () => {
    // Coordinates for Queen's Park Savannah, Trinidad
    const longitude = -61.1092;
    const latitude = 10.6660;
    const height = 900; // Adjust the height as needed

    // Create a Cesium.Cartesian3 position
    const position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);

    // Create a Cesium.HeadingPitchRoll orientation
    const heading = Cesium.Math.toRadians(45); // Adjust the heading as needed
    const pitch = Cesium.Math.toRadians(-30); // Adjust the pitch as needed
    const roll = 0;
    const orientation = new Cesium.HeadingPitchRoll(heading, pitch, roll);

    // Fly the camera to the position with the orientation
    this.viewer.camera.flyTo({
      destination: position,
      orientation: {
        heading: orientation.heading,
        pitch: orientation.pitch,
        roll: orientation.roll
      }
    });
  };

  componentWillUnmount() {
    // Destroy the viewer and the event handler when the component is unmounted
    if (this.viewer) {
      this.viewer.destroy();
    }
    if (this.handler) {
      this.handler.destroy();
    }
  }

  render() {
    // Render the container that will be used for the viewer
    return (
      <div style={{ position: 'relative' }}>
        <div
          className="cesiumContainer"
          ref={element => { this.cesiumContainer = element; }}
          className="h-100"
        />
        <button className="btn btn-outline-info"
          onClick={this.handleButtonClick} 
          style={{ position: 'absolute', top: '10px', right: '50px' }}
        >
          Visit Trinidad & Tobago
        </button>
      </div>
    );
  }
}

export default CesiumViewer;

import React from 'react';
import 'cesium/Source/Widgets/widgets.css';
import * as Cesium from 'cesium';

window.CESIUM_BASE_URL = '/';

//may be replaced and obfuscated later
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMjM1ODZmYi04ZTY3LTRmMTUtYTI4YS02ZDBjMjk1MjhmM2IiLCJpZCI6MTI2MjI0LCJpYXQiOjE2ODYxMTkwNDN9.dpl-cAXN5ylwihzBvDTFcS2hMvMHTJY46xtKzNicB6w';

const CesiumViewer = () => {

 const componentDidMount = () => {
    // Initialize the Cesium Viewer in the componentDidMount lifecycle method
    this.viewer = new Cesium.Viewer(this.cesiumContainer);

    // Add a point of interest
    const entity = new Cesium.Entity({
      id: 'pointOfInterest',
      position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883), // Longitude and latitude
      billboard: new Cesium.BillboardGraphics({
        image: '/logo192.png', // Path to the image to use for the pin
        color: Cesium.Color.WHITE,
      }),
      label: new Cesium.LabelGraphics({
        text: 'Point of Interest AB',
        pixelOffset: new Cesium.Cartesian2(0, -50), // Offset the label so it doesn't overlap with the pin
      }),
    });

    this.viewer.entities.add(entity);
  }




  const componentWillUnmount = () => {
    // Destroy the viewer when the component is unmounted
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  
    // Render the container that will be used for the viewer
    return (
      <div
        className="cesiumContainer"
        ref={element => { this.cesiumContainer = element; }}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      />
    );
  
}

export default CesiumViewer;

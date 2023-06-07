import React from 'react';
import 'cesium/Source/Widgets/widgets.css';
import * as Cesium from 'cesium';

window.CESIUM_BASE_URL = '/';

//may be replaced and obfuscated later
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMjM1ODZmYi04ZTY3LTRmMTUtYTI4YS02ZDBjMjk1MjhmM2IiLCJpZCI6MTI2MjI0LCJpYXQiOjE2ODYxMTkwNDN9.dpl-cAXN5ylwihzBvDTFcS2hMvMHTJY46xtKzNicB6w';

class CesiumViewer extends React.Component {
  componentDidMount() {
    // Initialize the Cesium Viewer in the componentDidMount lifecycle method
    this.viewer = new Cesium.Viewer(this.cesiumContainer);

    // Define the points of interest
    const pointsOfInterest = [
      { id: '1', position: "-61.222503, 10.691803", label: 'Trinidad and Tobago', logo:'/gttd.png' },
      { id: '2', position: "84.124008, 28.394857", label: 'Nepal', logo:'/gttd.png' },
      { id: '3', position: "-59.543198, 13.193887", label: 'Barbados', logo:'/gttd.png' },
      { id: '4', position: "-74.297333, 4.570868", label: 'Colombia', logo:'/gttd.png' },
      { id: '5', position: "5.291266, 52.132633", label: 'Netherlands', logo:'/gttd.png' },
    ];

    // Add the points of interest
    for (const point of pointsOfInterest) {
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
  }
};




  componentWillUnmount() {
    // Destroy the viewer when the component is unmounted
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  render() {
    // Render the container that will be used for the viewer
    return (
      <div
        className="cesiumContainer"
        ref={element => { this.cesiumContainer = element; }}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      />
    );
  }
}

export default CesiumViewer;

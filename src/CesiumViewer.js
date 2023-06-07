import React from 'react';
import 'cesium/Source/Widgets/widgets.css';
import { Viewer } from 'cesium';

window.CESIUM_BASE_URL = '/';

class CesiumViewer extends React.Component {
  componentDidMount() {
    // Initialize the Cesium Viewer in the componentDidMount lifecycle method
    this.viewer = new Viewer(this.cesiumContainer);
  }

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

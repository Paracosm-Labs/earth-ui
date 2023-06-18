import React from 'react';
import CesiumViewer from '../components/cesiumViewer';
import Hud from '../components/hud';
import Footer from '../components/footer';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="row">
        
        <div className="col-12 cesium">
          <CesiumViewer />
        </div>
        <div className="col-12">
          <Footer />
        </div>

      </div>
          
          

      
    </div>
  );
};

export default Dashboard;

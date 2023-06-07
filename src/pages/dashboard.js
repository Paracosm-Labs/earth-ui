import React from 'react';
import CesiumViewer from '../components/cesiumViewer';
import Hud from '../components/hud';
import Footer from '../components/footer';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <CesiumViewer />
          <Footer />
        </div>
        <div className="col-md-3">
          <Hud />
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;

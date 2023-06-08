import React from 'react';
import CesiumViewer from '../components/cesiumViewer';
import Hud from '../components/hud';
import Footer from '../components/footer';

const Dashboard = () => {
  return (
    <div className="container-fluid">

          <CesiumViewer />
          <Footer />

      
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { BounceLoader, ScaleLoader } from 'react-spinners';

const Hud = () => {
  const [resources, setResources] = useState(0);
  const [units, setUnits] = useState([
    { id: 1, name: 'Growth & Sustainability', image: '/img/alex.jpg' },
    { id: 2, name: 'Governance & Strategy', image: '/img/michelle.jpg' },
    { id: 3, name: 'Media & Entertainment', image: '/img/javier.jpg' },
    { id: 4, name: 'Toursim', image: '/img/marcus.jpg' },
    { id: 5, name: 'Business', image: '/img/jessica.jpg' },
    { id: 6, name: 'Education', image: '/img/sarah.jpg' },
    // Add more dummy units here
  ]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showWallet, setShowWallet] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate resource gathering
  useEffect(() => {
    const interval = setInterval(() => {
      setResources(resources => resources + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="hud text-center mx-1 h-100">
      <div className="minimap mt-3 p-5 pt-3">
        
        {selectedUnit ? (
          <div className="m-auto">
            <ScaleLoader color="#109e77" size={80} /><br/>
            <small>Connecting to...<br/>{selectedUnit.name} AIA</small>
            {/* Render unit actions here */}
          </div>
        ) : (<>
          <img src="/sorrel-logo.png" alt="Minimap" className="rounded-circle" width="100px"/><br/>
          <small>Sorrel AIA Team Communications</small>
          </>
        )}

      </div>
      <div className="resource-counter">
        Resources: {resources}
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-outline-success m-1" >Objectives</button>
        <button type="button" className="btn btn-outline-success  m-1" onClick={() => setShowWallet(true)}>Wallet</button>
        <button type="button" className="btn btn-outline-success m-1" >Resources</button>
        <Offcanvas show={showWallet} onHide={() => setShowWallet(false)} placement="end" title="Wallet">
          {loading && 
            <div className="spinner-container">
              <BounceLoader color="#109e77" size={100} />
            </div>
          }
          <iframe src="https://wallet.sorrelbanq.org/wallet" title="Wallet" style={{ width: '100%', height: '100%' }} onLoad={handleLoad} />
        </Offcanvas>
      </div>
      <div className="unit-list row mt-5 mx-1">
      <h6>Team</h6>
        {units.map(unit => (
          <div className="col-4 mt-3" key={unit.id} onClick={() => setSelectedUnit(unit)}>
          <button className="btn btn-outline-secondary w-100">
            <img src={unit.image} alt={unit.name} className="rounded-circle" height="62"/>
            <br/><small>{unit.name}</small>
          </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hud;
import React, { useState, useEffect } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';

const Hud = () => {
  const [resources, setResources] = useState(0);
  const [units, setUnits] = useState([
    { id: 1, name: 'Unit 1', image: 'https://dummyimage.com/100x60/000/777&text=Unit1' },
    { id: 2, name: 'Unit 2', image: 'https://dummyimage.com/100x60/000/777&text=Unit2' },
    { id: 3, name: 'Unit 3', image: 'https://dummyimage.com/100x60/000/777&text=Unit3' },
    { id: 4, name: 'Unit 4', image: 'https://dummyimage.com/100x60/000/777&text=Unit4' },
    { id: 5, name: 'Unit 5', image: 'https://dummyimage.com/100x60/000/777&text=Unit5' },
    { id: 6, name: 'Unit 6', image: 'https://dummyimage.com/100x60/000/777&text=Unit6' },
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
        {/* Render minimap here */}
        <img src="/sorrel-logo.png" alt="Minimap" className="rounded-circle" width="100px"/><br/>
        Earth Communications Uplink
      </div>
      <div className="resource-counter">
        Resources: {resources}
      </div>
      <div className="mt-3">
        <Button className="btn btn-outline-success" onClick={() => setShowWallet(true)}>Show Wallet</Button>
        <Offcanvas show={showWallet} onHide={() => setShowWallet(false)} placement="end" title="Wallet">
          {loading && 
            <div className="spinner-container">
              <BounceLoader color="#109e77" size={100} />
            </div>
          }
          <iframe src="https://wallet.sorrelbanq.org/wallet" title="Wallet" style={{ width: '100%', height: '100%' }} onLoad={handleLoad} />
        </Offcanvas>
      </div>
      <div className="info-panel mt-3">
        {selectedUnit ? (
          <div>
            <small>Hiring {selectedUnit.name}...</small>
            {/* Render unit actions here */}
          </div>
        ) : (
          <p>No unit selected</p>
        )}
      </div>
      <div className="unit-list row mt-3 mx-1">
        {units.map(unit => (
          <div className="col mt-2" key={unit.id} onClick={() => setSelectedUnit(unit)}>
          <button className="btn btn-outline-secondary w-100">
            <img src={unit.image} alt={unit.name} className="" />
            <small>{unit.name}</small>
          </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hud;
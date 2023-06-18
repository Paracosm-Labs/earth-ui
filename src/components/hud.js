import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { BounceLoader, ScaleLoader } from 'react-spinners';

const Hud = ({show, onHide}) => {
  const [resources, setResources] = useState(30000);
  const [units, setUnits] = useState([
    { id: 1, name: 'Alex' ,  role: 'Growth & Sustainability', image: '/img/alex.jpg' },
    { id: 2, name: 'Michelle' ,  role: 'Governance & Strategy', image: '/img/michelle.jpg' },
    { id: 3, name: 'Javier' ,  role: 'Media & Entertainment', image: '/img/javier.jpg' },
    { id: 4, name: 'Marcus' ,  role: 'Tourism', image: '/img/marcus.jpg' },
    { id: 5, name: 'Jessica' ,  role: 'Business', image: '/img/jessica.jpg' },
    { id: 6, name: 'Sarah' ,  role: 'Education', image: '/img/sarah.jpg' },
    // Add more dummy units here
  ]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showWallet, setShowWallet] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate resource gathering
  useEffect(() => {
    const interval = setInterval(() => {
      setResources(resources => resources + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);



  const handleUnitClick = async (unit) => {
    setSelectedUnit(unit);
    setIsLoading(true);

    // Create a new audio object
    const audio = new Audio(`/audio/${unit.name.toLowerCase()}.mp3`);

    try {
      // Try to play the audio file
      await audio.play();
    } catch (error) {
      // If an error occurs, show an alert and stop loading
      alert(`${unit.name} is not available at the moment.`);
      setIsLoading(false);
    }
  };


  const handleLoad = () => {
    setLoading(false);
  };

  return (

        <Offcanvas className="offcanvas-hud" show={show} onHide={onHide} placement="end" backdrop={false}>
          <Offcanvas.Header closeButton className="btn-close-white">
            {/* <Offcanvas.Title>Hud</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div className="hud text-center mx-1 h-100">
              <div className="minimap mt-1 p-5 pt-1">
                
                {selectedUnit && isLoading ? (
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
                <Offcanvas className="dapp" show={showWallet} onHide={() => setShowWallet(false)} placement="end" title="Wallet">
                  <Offcanvas.Header closeButton className="btn-close-white"></Offcanvas.Header>
                  {loading && 
                    <div className="spinner-container">
                      <BounceLoader color="#109e77" size={100} />
                    </div>
                  }
                  <iframe src="https://wallet.sorrelbanq.org/wallet" title="Wallet" style={{ width: '100%', height: '100%' }} onLoad={handleLoad} />
                </Offcanvas>
              </div>
              <h6 className="mt-4">Team</h6>
              <div className="unit-list row mt-2 mx-1">
                {units.map(unit => (
                  <div className="col-6 mt-3" key={unit.id} onClick={() => handleUnitClick(unit)}>
                  <button className="btn btn-outline-secondary w-100">
                    <img src={unit.image} alt={unit.name} className="rounded-circle" height="62"/>
                    <br/><small className="text-xs">{unit.name}</small>
                  </button>
                  </div>
                ))}
              </div>

            </div>


          </Offcanvas.Body>
        </Offcanvas>



  );
};

export default Hud;
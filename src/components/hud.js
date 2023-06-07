import React, { useState, useEffect } from 'react';

const Hud = () => {
  const [resources, setResources] = useState(0);
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Simulate resource gathering
  useEffect(() => {
    const interval = setInterval(() => {
      setResources(resources => resources + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hud text-center mx-3">
      <div className="minimap mt-3 m-5 pt-5">
        {/* Render minimap here */}
        Minimap | AIA Communications Uplink
      </div>
      <div className="info-panel">
        {selectedUnit ? (
          <div>
            <h2>{selectedUnit.name}</h2>
            <p>{selectedUnit.description}</p>
            {/* Render unit actions here */}
          </div>
        ) : (
          <p>No unit selected</p>
        )}
      </div>
      <div className="resource-counter">
        Resources: {resources}
      </div>
      <div className="unit-list">
        {units.map(unit => (
          <div key={unit.id} onClick={() => setSelectedUnit(unit)}>
            {unit.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hud;

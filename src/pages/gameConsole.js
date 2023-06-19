import React from 'react';
import Hud from '../components/hud';
import AframeScene from '../components/aframeScene';
import GameController from '../components/gameController';

const GameConsole = () => {
  return (
    <div className="game">
      <div className="row m-0">
        <div className="col-12 m-auto text-center window">
          <AframeScene
            movingUp={}
            movingDown={}
            movingLeft={}
            movingRight={}
          />
        </div>
        <div className="col-12 text-white text-center controller">
          <div className="row m-1">
            <div className="col ">
              <button onClick={} className="btn btn-outline-secondary btn-lg m-3">Next Location</button>
            </div>
            <div className="col text-center">
              <a href="/"><button className="btn btn-outline-secondary btn-lg m-3">Return to Orbital Station</button></a>
              <button onClick={} className="btn btn-outline-secondary btn-lg m-3 d-none">Controller</button>
            </div>
            <div className="col ">
              <button onClick={} className="btn btn-outline-secondary btn-lg m-3">Menu</button>
            </div>
          </div>
        </div>
      </div>
          <GameController
            onDown={() => this.handleMouseDown('movingDown')}
            onUp={() => this.handleMouseDown('movingUp')}
            onLeft={() => this.handleMouseDown('movingLeft')}
            onRight={() => this.handleMouseDown('movingRight')}
            onStopDown={() => this.handleMouseUp('movingDown')}
            onStopUp={() => this.handleMouseUp('movingUp')}
            onStopLeft={() => this.handleMouseUp('movingLeft')}
            onStopRight={() => this.handleMouseUp('movingRight')}
          />
  );
};

export default GameConsole;

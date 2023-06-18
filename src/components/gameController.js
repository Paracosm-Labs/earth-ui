import React, { Component } from 'react';
import { Offcanvas } from 'react-bootstrap';

class GameController extends Component {
  state = {
    movingUp: false,
    movingDown: false,
    movingLeft: false,
    movingRight: false
  };

  handleMouseDown = direction => {
    this.setState({ [direction]: true }, this.props[direction]);
  };

  handleMouseUp = direction => {
    this.setState({ [direction]: false });
  };

  render() {
    const { show, onHide } = this.props;

    return (
      <Offcanvas className="offcanvas-controller" show={show} onHide={onHide} placement="bottom"  backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Game Controller</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row">
            <div className="col">
              <button
                onMouseDown={() => this.handleMouseDown('onUp')}
                onMouseUp={() => this.handleMouseUp('movingUp')}
              >
                ▲
              </button>
              <button
                onMouseDown={() => this.handleMouseDown('onLeft')}
                onMouseUp={() => this.handleMouseUp('movingLeft')}
              >
                ◀
              </button>
              <button
                onMouseDown={() => this.handleMouseDown('onDown')}
                onMouseUp={() => this.handleMouseUp('movingDown')}
              >
                ▼
              </button>
              <button
                onMouseDown={() => this.handleMouseDown('onRight')}
                onMouseUp={() => this.handleMouseUp('movingRight')}
              >
                ▶
              </button>
            </div>
            <div className="col">
              <button>A</button>
              <button>B</button>
              <button>C</button>
              <button>D</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }
}

export default GameController;

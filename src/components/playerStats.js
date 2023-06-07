import React from 'react';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 100,
      score: 20000,
    };
  }

  // Method to decrease the player's health
  decreaseHealth(amount) {
    this.setState(state => ({
      health: Math.max(0, state.health - amount),
    }));
  }

  // Method to increase the player's score
  increaseScore(amount) {
    this.setState(state => ({
      score: state.score + amount,
    }));
  }

  render() {
    return (
      <div className="player-stats">
        <div className="stat">
          <span className="label">Health:</span>
          <span className="value">{this.state.health}</span>
        </div>
        <div className="stat">
          <span className="label">Score:</span>
          <span className="value">{this.state.score}</span>
        </div>
        {/* Add more stats here */}
      </div>
    );
  }
}

export default PlayerStats;

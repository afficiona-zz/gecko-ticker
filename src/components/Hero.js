import React, { Component } from 'react';

/**
 * Hero component
 */
class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="hero-title">
          <span className="bg-primary">Amazing</span> features <br/> to suite your <span className="bg-primary">needs</span>
          <small className="hero-subtitle">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. DISCOVER NOW
          </small>
        </h1>
      </div>
    );
  }
}

export default Hero;

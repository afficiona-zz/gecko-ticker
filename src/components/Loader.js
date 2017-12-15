import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div class="spinner">
        <div class="bounce bounce1" />
        <div class="bounce bounce2" />
        <div class="bounce bounce3" />
      </div>
    );
  }
}

export default Loader;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './../actions';
import Hero from './../components/Hero';
import StatsBox from './../components/StatsBox';

class HomePage extends Component {

  componentDidMount() {
    this.props.actions.fetchTickerUpdates();
  };

  render() {
    return (
      <div className="app">
        <div className="main-wrapper">
          <Hero />
          <div className="content-wrapper">
            <div className="content-header">
              Live Ticker
            </div>
            <div className="content-body">
              <StatsBox Ticker={this.props.Ticker} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ Ticker }) {
  return {
    Ticker
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

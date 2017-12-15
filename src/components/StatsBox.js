import React, { Component } from 'react';
import classnames from 'classnames';

import Loader from './../components/Loader';

/**
 * StatsBox is a component to show stats of all the stocks
 */
class StatsBox extends Component {
  render() {
    const stocksData = this.props.Ticker.get('data').toJSON();
    return (
      <div className="stats-box">
        {(() => {
          if (this.props.Ticker.get('isFetching')) {
            return <Loader />;
          }

          return Object.keys(stocksData).map((name) => {
            const rowClasses = classnames('each', {
              'each__success': stocksData[name].hasIncreased === true,
              'each__danger': stocksData[name].hasIncreased === false
            });
            return (
              <div className={rowClasses}>
                <div className="label">{name}</div>
                <div className="value">{stocksData[name].value}</div>
              </div>
            );
          });
        })()}
      </div>
    );
  }
}

export default StatsBox;

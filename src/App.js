import React, { Component } from 'react';
import PricingChartContainer from './PricingChartContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Pricing Chart</h2>
          <p>A react component of an interactive pricing table.</p>
        </div>
        <div className="component">
          <PricingChartContainer />
        </div>
      </div>
    );
  }
}

export default App;

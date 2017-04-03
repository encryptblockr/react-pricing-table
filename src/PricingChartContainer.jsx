import React, { Component } from 'react';
import PricingChart from './PricingChart';
import data from './data';

class PricingChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCycle: 'monthly',
      expandedNotes: []
    }
  }

  handleCycleClick = (e) => {
    this.setState({
      activeCycle: e.target.id
    })
  }

  render() {
    return (
      <PricingChart data={data} activeCycle={this.state.activeCycle} handleCycleClick={this.handleCycleClick} />
    );
  }
}

export default PricingChartContainer;

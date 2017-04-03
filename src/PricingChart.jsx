import React, { Component } from 'react';
import CycleNav from './CycleNav';
import FeatureTable from './FeatureTable';
import FeatureSummary from './FeatureSummary';
import ChartNotes from './ChartNotes';

class PricingChart extends Component {
  render() {
    const activeCycle = this.props.data.cycles[this.props.activeCycle];

    return (
      <div id="pricing-chart" className="max-width flex-column">

        <CycleNav cycles={this.props.data.cycles} handleCycleClick={this.props.handleCycleClick} activeCycle={ this.props.activeCycle } />

        <main className="flex-column">
          <div id="plans" className="padding-1 bottom-inner-shadow">
            <FeatureTable featurable={this.props.data.featurable.slice(0,4)} activeCycle={activeCycle} />
          </div>
          <FeatureSummary summary={ activeCycle.summary }/>
          <div id="pricing" className="tb-padding-1 tb-inner-shadow">
            <FeatureTable featurable={this.props.data.featurable.slice(4)} activeCycle={activeCycle} columnHeaders={false} />
            <p className="strong">All monthly plans currently available for Joomla, Wordpress and Ruby on Rails sites.</p>
          </div>
        </main>

        <ChartNotes />        
      </div>
    );
  }
}

PricingChart.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PricingChart;

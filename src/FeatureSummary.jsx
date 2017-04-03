import React, { Component } from 'react';

class FeatureSummary extends Component {
  render() {
    return (
      <div className="lr-outset bg-green reverse strong">{this.props.summary}</div>
    );
  }
}

export default FeatureSummary;

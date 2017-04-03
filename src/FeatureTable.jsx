import React, { Component } from 'react';

class FeatureTable extends Component {

  formattedValue = (feature, formatter, unit) => {
    return formatter(feature, unit);
  }

  columnHeaderCells = (planNames) => {
    return this.props.columnHeaders ? planNames.map( plan => <th key={plan}>{ plan }</th>) : null
  }

  render() {
    const activePlanNames = Object.keys(this.props.activeCycle.plans);

    return (
      <table id="monthly_plans" className="table">
        <thead>
          <tr>{ this.columnHeaderCells(activePlanNames) }</tr>
        </thead>
        <tbody>
          {
            this.props.featurable.map( (feature, i) => {
              return <tr key={feature.name}>
                {
                  activePlanNames.map((planName) => {
                    const plan = this.props.activeCycle.plans[planName];
                    const formatted = this.formattedValue(plan.features[feature.name], this.props.featurable[i].formatter, this.props.activeCycle.unit);
                    return (
                      <td key={planName} className={ "feature " + (feature.class || "") } data-feature-name={feature.name}>{formatted}</td>
                    )
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    );
  }
}

FeatureTable.propTypes = {
  activeCycle       : React.PropTypes.object.isRequired,
  featurable        : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  columnHeaders     : React.PropTypes.bool
}

FeatureTable.defaultProps = {
  columnHeaders: true
};

export default FeatureTable;

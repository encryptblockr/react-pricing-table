import React, { Component } from 'react';

class CycleNav extends Component {

  render() {
    const cycleNames = Object.keys(this.props.cycles);
    const indicatorStyle = {
      width: `${100/cycleNames.length}%`,
      left: `${(100/cycleNames.length) * cycleNames.indexOf(this.props.activeCycle)}%`
    }

    return (
      <nav id="cycles" className="tabbed-nav flex">
        { 
          cycleNames.map( cycle => {
            return <div key={cycle} className={"nav-tab " + (this.props.activeCycle === cycle ? "active" : "")} id={cycle} onClick={this.props.handleCycleClick}>{cycle}</div>
          })
        }
        <div className="selected-indicator" style={indicatorStyle}></div>
      </nav>
    );
  }
}

export default CycleNav;

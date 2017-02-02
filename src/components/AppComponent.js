import React from 'react';

import ToggleButton from './shared/ToggleButtonComponent';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = { toggleState: 'off' }
  }

  onToggleChange(toggleOn) {
    this.setState({
      toggleState: toggleOn ? 'on' : 'off'
    })
  }

  render() {
    return (
      <div className="index">
        <ToggleButton onToggleChange={this.onToggleChange.bind(this)} />
        <p>Toggle: {this.state.toggleState}</p>
      </div>
    );
  }
}

export default AppComponent;

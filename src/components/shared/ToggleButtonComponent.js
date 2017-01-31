import React from 'react';
import classNames from 'classnames';

import './ToggleButtonComponent.scss';

class ToggleButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: true }
  }

  onToggleClick() {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    const toggleClass = classNames({
      'toggle-off': this.state.toggleOn === false,
      'toggle-on': this.state.toggleOn
    });

    return (
      <a className={`toggle-button ${toggleClass}`} href="#" onClick={this.onToggleClick.bind(this)}>
        <div></div>
      </a>
    );
  }
}

export default ToggleButtonComponent;

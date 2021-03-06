import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ToggleButtonComponent.scss';

export default class ToggleButtonComponent extends React.Component {
  static propTypes = {
    onToggleChange: PropTypes.func
  };

  constructor() {
    super();
    this.state = { toggleOn: false }
  }

  onToggleClick(event) {
    event.preventDefault();

    this.setState({
      toggleOn: !this.state.toggleOn
    });

    if (this.props.onToggleChange) {
      this.props.onToggleChange(!this.state.toggleOn);
    }
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

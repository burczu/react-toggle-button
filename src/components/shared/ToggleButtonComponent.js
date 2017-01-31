import React from 'react';
import classNames from 'classnames';

class ToggleButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false }
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
      <a className={toggleClass} onClick={this.onToggleClick.bind(this)}>
        <div></div>
      </a>
    );
  }
}

export default ToggleButtonComponent;

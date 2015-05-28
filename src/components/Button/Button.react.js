import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

import styles from './ButtonStyles'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};

    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseExitHandler = this.mouseExitHandler.bind(this);
  }

  mouseEnterHandler() {
	this.setState({
      hovered: true
	});
  }

  mouseExitHandler() {
	this.setState({
      hovered: false
	});
  }

	render() {
		return (
			<button style={buildStyles(this.props.styles,this.state.hovered)} onMouseLeave={this.mouseExitHandler} onMouseEnter={this.mouseEnterHandler} className={classNames('now-button', this.props.type)}>{this.props.children}</button>
		)
	}
}

export default Button;

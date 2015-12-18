import React from 'react';
import classNames from 'classnames'

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button {...this.props} className={classNames('now-button', this.props.classes)}>{this.props.children}</button>
		)
	}
}

Button.propTypes = {
	children: React.PropTypes.string,
  classes: React.PropTypes.string
};

export default Button;

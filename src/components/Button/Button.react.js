import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

// import styles from './ButtonStyles'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<button className={classNames('now-button', this.props.classes)}>{this.props.children}</button>
		)
	}
}

export default Button;

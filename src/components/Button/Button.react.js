import React, { PropTypes } from 'react';

export default class Button extends React.Component {

  static defaultProps = {
    type: 'primary',
    color: 'green'
  };

  static propTypes = {
    color: PropTypes.oneOf(['red', 'yellow', 'green', 'blue', 'grey']).isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']),
    href: PropTypes.string
  };

  render() {
    const baseClass = 'now-button';
    const className = `${baseClass}_${this.props.type}_${this.props.color}`;
    return (
      (this.props.href && !this.props.disabled) ?
        <a className={className} {...this.props}>{this.props.children}</a> :
        <button className={className} {...this.props}>{this.props.children}</button>
    );
  }
}

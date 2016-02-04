import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Header extends Component {

  static propTypes = {
    classes: PropTypes.string,
    colour: PropTypes.oneOf(['blue', 'green']),
    heading: PropTypes.string,
    icon: PropTypes.oneOf(['icon-confirm', 'icon-content-passes']),
    subheading: PropTypes.string
  };

  static defaultProps = {
    colour: 'blue',
    icon: 'icon-confirm'
  };

  render() {
    const {
      classes,
      colour,
      icon,
      heading,
      subheading
      } = this.props;

    return (
      <div className={classNames(`header_${colour}`, classes)}>
        <header>
          <div className="header-circle">
            <div className="header-circle-background"></div>
            <i className={classNames("header-circle-icon", icon)}></i>
          </div>
          {heading ? <h1 className="header-heading">{heading}</h1> : null}
          {subheading ? <p className="header-subheading">{subheading}</p> : null}
        </header>
      </div>
    );
  }
}

export default Header

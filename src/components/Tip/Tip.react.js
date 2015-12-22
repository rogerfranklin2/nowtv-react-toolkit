import React from 'react';
import classNames from 'classnames';

const supportedPositions = ['top-centre', 'bottom-right'];

class Tip extends React.Component {

  constructor(props) {
    super(props);
  }

  isPositionSupported(position) {
    return supportedPositions.indexOf(position) < 0;
  }

  render() {
    const classes = [this.props.classes];
    const position = this.props['arrow-position'];
    const arrowPosition = this.isPositionSupported(position) ? 'top-centre' : position;

    return (
      <div className={classNames('now-tip', classes, arrowPosition)}>
        <div className={'arrow-' + arrowPosition}></div>
        <p className="content">{this.props.children}</p>
      </div>
    );
  }
}

Tip.propTypes = {
  children: React.PropTypes.string,
  classes: React.PropTypes.string,
  'arrow-position': React.PropTypes.string
};

export default Tip;

import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

const supportedPositions = ['top-centre', 'bottom-right'];

class Tip extends React.Component {

    constructor(props) {
        super(props);
    }

    isPositionSupported(position) {
        return supportedPositions.indexOf(position) < 0
    }

    render() {
        var classes = [this.props.classes],
            position = this.props['arrow-position'],
            arrowPosition =  this.isPositionSupported(position) ? 'top-centre' : position;

        return (
            <div className={classNames('now-tip', classes, arrowPosition)}>
                <div className={"arrow-" + arrowPosition}></div>
                <p className='content'>{this.props.children}</p>
            </div>
        )
    }
}

export default Tip;
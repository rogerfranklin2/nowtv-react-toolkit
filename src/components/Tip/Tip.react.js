import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

class Tip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var classes = [this.props.classes];

        return (
            <div className={classNames('now-tip', classes)}>
                <p className='content'>{this.props.children}</p>
            </div>
        )
    }
}

export default Tip;

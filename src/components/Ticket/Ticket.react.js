import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

class Ticket extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var classes = [this.props.classes];

        return (
            <div>
                <div className={classNames('now-ticket', classes)}>
                    <div className={classNames('content')}>
                        <h3>{this.props.title}</h3>

                        <p>{this.props.children}</p>
                    </div>
                </div>
                <div className={classNames('tearoff')}></div>
            </div>
        )
    }
}

export default Ticket;

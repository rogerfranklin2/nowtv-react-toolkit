import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

class Ticket extends React.Component {
    constructor(props) {
        super(props);

        this.nowTicketStyle = {
            backgroundColor: '#2C3E72',
            color: '#FFF',
            width: '179px',
        };

        this.contentStyle = {
            padding: '10%',
            boxSizing: 'border-box'
        };

        this.ticketTearoffStyle = {
            fill: "blue",
            background: "url('../../assets/icons/ticket-tearoff.svg')"
        };
    }

    render() {
        return (
            <div className="now-ticket" style={this.nowTicketStyle}>
                <div className="content" style={this.contentStyle}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.children}</p>
                </div>
                <div className="ticket-tearoff" style={this.ticketTearoffStyle}></div>
            </div>
        )
    }
}

export default Ticket;

import React from 'react';
import classNames from 'classnames';

class Ticket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = [this.props.classes];

    return (
      <div>
        <div className={classNames('now-ticket', classes)}>
          <div className={classNames('content')}>
            <h3>{this.props.title}</h3>

            <p>{this.props.children}</p>
          </div>
        </div>
        <div className={classNames('tearoff', classes)}></div>
      </div>
    );
  }
}

Ticket.propTypes = {
  children: React.PropTypes.node,
  classes: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Ticket;

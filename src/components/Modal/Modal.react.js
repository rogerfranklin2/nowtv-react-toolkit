import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames';

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      visible: false
    }
  }

  render() {
    const classes = [this.props.classes];

    return (
      <div className={classNames('now-modal', { 'visible': this.state.visible }, classes)}>

        <div className="modal__content">
          <div className="close-container">
            <div onClick={ this.toggle } className='close-icon'></div>
          </div>

          { this.props.title ?
            <div className="title">
              <h2>{ this.props.title }</h2>
            </div>
            : null
          }
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }
}

export default Modals;

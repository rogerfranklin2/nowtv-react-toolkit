import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this._closeNotification = this._closeNotification.bind(this);

    this.state = {
      showNotification: true
    }
  }

  render() {
    var classes = [this.props.classes]

    if (!this.state.showNotification) {
      return null;
    }

    return (
      <div className={classNames('now-notification', classes)}>

        <div className='notificationIcon'></div>
        <div onClick={ this._closeNotification } className='close'></div>

        <div className='notificationBody'>
          <h3>{this.props.title}</h3>
          <p className='content'>{this.props.children}</p>
        </div>

      </div>
    )
  }

  _closeNotification(){
    if (this.props.onClose) {
      return this.props.onClose()
    }
    this.setState({
      showNotification: !this.state.showNotification  
    });
  }
}

export default Notification;

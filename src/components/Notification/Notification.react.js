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
    const classes = [this.props.classes]
    const { dismissable = true } = this.props;
    const hasTitle = this.props.title !== undefined;

    if (!this.state.showNotification) {
      return null;
    }

    return (
      <div className={classNames('now-notification', classes, {'no-title': !hasTitle })}>

        <div className='notificationIcon'></div>
        { dismissable ? <div onClick={ this._closeNotification } className='close'></div> : null }

        <div className='notificationBody'>
          { hasTitle ? <h5 className="notification-title">{this.props.title}</h5> : null }
          <div className='content'>{this.props.children}</div>

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

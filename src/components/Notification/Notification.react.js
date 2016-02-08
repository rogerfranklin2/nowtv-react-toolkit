import React from 'react';
import classNames from 'classnames';

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this._handleClose = this._handleClose.bind(this);

    this.state = {
      showNotification: true
    };
  }

  _handleClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }

    this.setState({
      showNotification: !this.state.showNotification
    });
  }

  render() {
    const classes = [this.props.classes];
    const { dismissable = true } = this.props;
    const hasTitle = this.props.title !== undefined;
    const notificationButton = this.props.buttonText !== undefined;

    if (!this.state.showNotification) {
      return null;
    }

    return (
      <div className={ classNames('now-notification', classes, { 'no-title': !hasTitle }) }>

        <div className="notificationIcon"></div>
        { dismissable ? <div onClick={ this._handleClose } className="close"></div> : null }

        <div className="notificationBody">
          { hasTitle ? <h6 className="notification-title">{this.props.title}</h6> : null }
          <p className="content">{this.props.children}</p>
        </div>

      </div>
    );
  }
}

Notification.propTypes = {
  children: React.PropTypes.node,
  classes: React.PropTypes.string,
  dismissable: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  title: React.PropTypes.string
};

export default Notification;

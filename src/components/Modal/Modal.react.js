import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames';
import keymaster from 'keymaster';

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    keymaster('esc', () => this.state.visible ? this.toggle() : null);
  }

  componentWillUnmount() {
    keymaster.unbind('esc');
  }

  render() {
    const classes = classNames('now-modal', [this.props.classes], { 'visible': this.state.visible });

    return (
      <div className={classes}>

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

  toggle(e) {
    if (e && e.currentTarget.className && e.currentTarget.className.includes("close-icon")) {
      if (this.props.closeHandler) {
        this.props.closeHandler();
      }
    }

    this.setState({
      visible: !this.state.visible
    });
  }

  hide() {
    this.setState({
      visible: false
    });
  }
}

export default Modals;
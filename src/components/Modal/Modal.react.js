import React from 'react';
import classNames from 'classnames';
let keymaster;

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.show = this.show.bind(this);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    keymaster = require('keymaster');
    keymaster('esc', () => this.state.visible ? this.handleHide() : null);
  }

  componentWillUnmount() {
    this._giveBodyFocusBack();
    keymaster.unbind('esc');
  }

  toggle() {
    if (this.state.visible) {
      this.handleHide();
    } else {
      this.show();
    }
  }

  handleHide(event) {
    this._giveBodyFocusBack();

    if (event !== undefined && event.currentTarget.className && event.currentTarget.className.indexOf('close-icon') > -1) {
      if (this.props.closeHandler) {
        this.props.closeHandler();
      }
    }

    this.setState({
      visible: false
    });
  }

  show() {
    this._giveModalFocus();
    this.setState({ visible: true });
  }

  _giveModalFocus() {
    if (document.body.classList) {
      document.body.classList.add('modal-open');
    }
  }

  _giveBodyFocusBack() {
    if (document.body.classList) {
      document.body.classList.remove('modal-open');
    }
  }

  render() {
    const classes = classNames('now-modal', [this.props.classes], { 'visible': this.state.visible });

    return (
      <div className={classes}>

        <div className="modal__content">
          <div className="close-container">
            <div onClick={ this.handleHide } className="close-icon"></div>
          </div>

          { this.props.title ?
            <div className="title">
              <h5>{ this.props.title }</h5>
            </div>
            : null
          }
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

Modals.propTypes = {
  children: React.PropTypes.string,
  classes: React.PropTypes.string,
  closeHandler: React.PropTypes.func,
  title: React.PropTypes.string
};

export default Modals;

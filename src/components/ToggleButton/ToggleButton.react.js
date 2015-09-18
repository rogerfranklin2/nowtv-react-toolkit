import React from 'react';
import classNames from 'classnames';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: (this.props.checked || false)};
    this.toggleChecked = this.toggleChecked.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleChecked() {
    this.setState({
      checked: !this.state.checked
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  onChange() {
    this.setState({
      checked: this.props
    });
  }

  render() {
    const classes = classNames([this.props.classes]);
    const checkBoxClasses = classNames(
      {
        disabled: this.props.disabled,
        checked: this.state.checked
      }
    );

    const {checked, ...other} = this.props;

    return (
      <div className={classNames('now-toggle-container', classes)}>
        { this.props.offText ? <span className='toggle-label off'>{this.props.offText}</span> : null }
        {this.props.disabled ?
          <div className='toggle-button disabled'></div>
          :
          <div className={classNames('toggle-button', checkBoxClasses)} onClick={this.toggleChecked}>
            <input defaultChecked={this.state.checked} type="checkbox" {...other}/>
          </div>
        }
        { this.props.onText ? <span className='toggle-label on'>{this.props.onText}</span> : null }
      </div>
    );
  }
}

export default ToggleButton;
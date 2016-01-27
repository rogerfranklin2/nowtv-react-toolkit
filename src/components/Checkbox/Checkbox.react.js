import React from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: (props.checked || false) };
    this._handleChecked = this._handleChecked.bind(this);
  }

  _handleChecked() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    let classes = [this.props.classes];
    const { disabled, children, ...other } = this.props;

    if (disabled) {
      classes.push('disabled');
    }

    return (
      <div>
        <input
          className={classNames('now-checkbox', classes)}
          type="checkbox"
          id={this.props.name}
          onChange={this._handleChecked}
          checked={this.state.checked}
          defaultChecked={this.props.checked}
          disabled={ disabled }
          { ...other }
        />
        <label htmlFor={this.props.name}>{ children }</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool,
  classes: React.PropTypes.string,
  disabled: React.PropTypes.bool
};

export default Checkbox;

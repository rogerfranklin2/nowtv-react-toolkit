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
    const classes = [this.props.classes];
    const { disabled, children, ...other } = this.props;

    if (this.state.checked) {
      classes.push('checked');
    }

    if (disabled) {
      classes.push('disabled');
    }

    return (
      <label className={classNames('now-checkbox', classes)}>
        <input
          onChange={this._handleChecked}
          checked={this.state.checked}
          type="checkbox"
          disabled={ disabled }
          { ...other }
        />
        { children }
      </label>
    );
  }
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool,
  classes: React.PropTypes.string,
  disabled: React.PropTypes.bool
};

export default Checkbox;

import React from 'react';
import classNames from 'classnames';

class RadioButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { checked: (props.checked || false) };
      this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked() {
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
          <label className={classNames('now-radio-button', classes)}>
              <input
                onChange={this.handleChecked}
                checked={this.state.checked}
                type="radio"
                disabled={ disabled }
                { ...other }
              />
              { children }
          </label>
       );
    }
}

RadioButton.propTypes = {
  classes: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool
};

export default RadioButton;

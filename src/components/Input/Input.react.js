import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input {...this.props} className={classNames('now-input', this.props.classes)} />
    );
  }
}

Input.propTypes = {
  classes: React.PropTypes.string
};

export default Input;

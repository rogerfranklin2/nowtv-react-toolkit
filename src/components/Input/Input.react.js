import React from 'react';
import classNames from 'classnames';

import styles from './InputStyles.sass'

class Input extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <span>
            <input {...this.props} className={classNames("now-input", this.props.classes)} />
        </span>
    )
  }
}

export default Input;

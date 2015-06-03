import React from 'react';
import classNames from 'classnames';

class Dropdown extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <select {...this.props} className={classNames('now-dropdown', this.props.classes)}>
            {this.props.children}
        </select>
    )
  }
}

export default Dropdown;

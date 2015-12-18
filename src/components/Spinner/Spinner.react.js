import React from 'react';

class Spinner extends React.Component {

  render() {
    let {size = "medium"} = this.props;

    return (
      <div className={`spinner spinner-${size}`}>
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
      </div>
    );
  }
}

Spinner.propTypes = {
  size: React.PropTypes.string
};

export default Spinner;

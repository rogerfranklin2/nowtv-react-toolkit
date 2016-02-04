import React, { Component } from 'react';
import Toolkit from '../../../dist/toolkit';

class Headers extends Component {

  render() {
    return (
      <section>
        <h2>Headers</h2>
        <Toolkit.Header heading="Lorem Ipsum" subheading="Lorem ipsum dolor sit amet." />
      </section>
    )
  }
}

export default Headers

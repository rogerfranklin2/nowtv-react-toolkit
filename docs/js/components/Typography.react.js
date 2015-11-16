import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Typography extends React.Component {
  render() {
    return (
      <section className="typography">
        <h2>Typography</h2>

        <div className="example">
          <span className="used-for">Used for <span className="darker">Primary Titles</span></span>
          <h1>NOW TV Text Light 48/48</h1>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Secondary Titles</span></span>
          <h2>NOW TV Text Regular 30/34 (40/42 on desktop)</h2>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Straplines</span></span>
          <h3>NOW TV Text Regular 27/32 (36/34 on desktop)</h3>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Subheaders</span></span>
          <h4>NOW TV Text Regular 24/28 (28/32 bold on desktop)</h4>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Buttons</span></span>
          <h5>NOW TV Text Regular 20/24 (24/28 bold on desktop)</h5>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Bullets</span></span>
          <h6>NOW TV Text Bold 16/20 (18/24 regular on desktop)</h6>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Body text</span></span>
          <p>NOW TV Text Regular 14/20 (16/20 on desktop)</p>
        </div>
        <div className="example">
          <span className="used-for">Used for <span className="darker">Ts &amp; Cs</span></span>
          <p className="smaller">NOW TV Text Regular 11/14 (13/18 on desktop)</p>
        </div>
      </section>
    )
  }
}

export default Typography;

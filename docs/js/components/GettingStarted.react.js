import React from 'react';
import Toolkit from '../../../src/toolkit';

class App extends React.Component {

  render() {
    return (
      <section className="gettingStarted">
        <h2 className="section-title">Getting started</h2>

        <h3>Installation</h3>
        <pre>
          <code className="sh">
            npm install @nowtv/nowtv-web-toolkit --save
          </code>
        </pre>

        <h3>Usage</h3>
        <pre>
          <code className="javascript">
            import Toolkit from '@nowtv/nowtv-web-toolkit';
          </code>
        </pre>

          <h3>Assets</h3>
          <p>To obtain the toolkit css and js, include the following:</p>
          <pre>
            <code className="html">
              /node_modules/@nowtv/nowtv-styleguide/dist/toolkit.js
            </code>
            <code className="html">
              /node_modules/@nowtv/nowtv-styleguide/dist/toolkit.css
            </code>
          </pre>
        </section>
    )
  }
}

export default App;

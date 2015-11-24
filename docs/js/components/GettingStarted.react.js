import React from 'react';
import Toolkit from '../../../dist/toolkit';

class App extends React.Component {

  render() {
    return (
      <section className="gettingStarted">
        <h2 className="section-title">Getting started</h2>

        <h3>Installation</h3>
        <pre>
          <code className="sh">
            npm install sky-uk/nowtv-web-toolkit --save
          </code>
        </pre>

        <h3>Usage</h3>
        <pre>
          <code className="javascript">
            import Toolkit from 'nowtv-web-toolkit';
          </code>
        </pre>

          <h3>Assets</h3>
          <p>To obtain the toolkit css and js, include the following:</p>
          <pre>
            <code className="html">
              http://development.toolkit.divshot.io/dist/toolkit.js
            </code>
            <code className="html">
              http://development.toolkit.divshot.io/dist/toolkit.css
            </code>
          </pre>
        </section>
    )
  }
}

export default App;

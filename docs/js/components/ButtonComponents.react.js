import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Buttons extends React.Component {

  render() {
    return (
      <section className="buttons">
        <h2 className="section-title">Buttons</h2>
        <h3>Primary</h3>

        <Toolkit.Button classes="primary green">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary green'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>
        <Toolkit.Button classes="primary blue">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary blue'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>
        <Toolkit.Button classes="primary red">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary red'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>
        <Toolkit.Button classes="primary yellow">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary yellow'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <h3>Primary Disabled</h3>

        <Toolkit.Button classes='primary green' disabled>Disabled state</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary green' disabled>Disabled state</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Inverted</h3>

        <Toolkit.Button classes="primary green inverted">Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary green inverted'>Build your bundle</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Inverted Disabled</h3>

        <Toolkit.Button classes="primary green inverted" disabled>Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='primary green inverted' disabled>Build your bundle</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Secondary</h3>

        <Toolkit.Button classes="secondary blue">Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='secondary blue'>Build your bundle</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Secondary Disabled</h3>

        <Toolkit.Button classes="secondary" disabled>Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='secondary' disabled>Build your bundle</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Secondary Inverted</h3>

        <Toolkit.Button classes="secondary inverted">Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='secondary inverted'>Build your bundle</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Secondary Inverted Disabled</h3>

        <Toolkit.Button classes="secondary inverted" disabled>Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='secondary inverted' disabled>Build your bundle</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Default</h3>

        <Toolkit.Button classes="default">Default Button</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button classes='default'>Default Button</Toolkit.Button>"}
          </code>
        </pre>
      </section>
    )
  }
}

export default Buttons;

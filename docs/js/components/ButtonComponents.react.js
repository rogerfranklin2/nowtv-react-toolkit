import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Buttons extends React.Component {

  render() {
    return (
      <section className="buttons">
        <h2 className="section-title">Buttons</h2>
        <h3>Primary</h3>

        <Toolkit.Button color="green">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='green'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>
        <Toolkit.Button color="blue">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='blue'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>
        <Toolkit.Button color="red">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='red'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>
        <Toolkit.Button color="yellow">Im a button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='yellow'>Inactive state</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <h3>Primary Disabled</h3>

        <Toolkit.Button color='green' disabled>Disabled state</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='green' disabled>Disabled state</Toolkit.Button>"}
          </code>
        </pre>

        <h3>Secondary</h3>

        <Toolkit.Button type="secondary" color="blue">Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {`<Toolkit.Button type="secondary" color="blue">Build your bundle</Toolkit.Button>`}
          </code>
        </pre>

        <h3>Secondary Disabled</h3>

        <Toolkit.Button  type="secondary" color="green" disabled>Build your bundle</Toolkit.Button>
        <pre>
          <code className="jsx">
            {`<Toolkit.Button  type="secondary" color="green" disabled>Build your bundle</Toolkit.Button>`}
          </code>
        </pre>

      </section>
    )
  }
}

export default Buttons;

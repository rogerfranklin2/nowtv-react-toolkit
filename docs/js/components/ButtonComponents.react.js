import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Buttons extends React.Component {

  render() {
    return (
      <section className="buttons">
        <h2 className="section-title">Buttons</h2>
        <h3>Primary</h3>

        <Toolkit.Button color="green">I'm a green button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='green'>I'm a green button :)</Toolkit.Button>"}<br/>
          </code>
        </pre>


        <Toolkit.Button color="green" href="http://www.google.com">I'm a link :D</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='green' href='http://www.google.com'>I'm a link :D</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <Toolkit.Button color="blue">I'm a blue button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='blue'>I'm a blue button :)</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <Toolkit.Button color="red">I'm a red button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='red'>I'm a red button :)</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <Toolkit.Button color="yellow">I'm a yellow button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='yellow'>I'm a yellow button :)</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <Toolkit.Button color="grey">I'm a grey button :)</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='grey'>I'm a grey button :)</Toolkit.Button>"}<br/>
          </code>
        </pre>

        <h3>Primary Disabled</h3>

        <Toolkit.Button color='green' disabled>Disabled state</Toolkit.Button>
        <pre>
          <code className="jsx">
            {"<Toolkit.Button color='green' disabled>Disabled state</Toolkit.Button>"}
          </code>
        </pre>

        <Toolkit.Button color='green' disabled href="http://www.google.com">Disabled link state</Toolkit.Button>
        <pre>
          <code className="jsx">
            {`<Toolkit.Button color='green' disabled href="http://www.google.com">Disabled link state</Toolkit.Button>`}
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

import React from 'react';
import Button from '../../../src/components/Button/Button.react';

class Buttons extends React.Component {

  render() {
    return (
      <section className="buttons">
        <h2 className="section-title">Buttons</h2>
        <h3>Primary</h3>

        <Button>I'm a default colour button :)</Button>
        <pre>
          <code className="jsx">
            {"<Button>I'm a default colour button :)</Button>"}<br/>
          </code>
        </pre>

        <Button color="green">I'm a green button :)</Button>
        <pre>
          <code className="jsx">
            {"<Button color='green'>I'm a green button :)</Button>"}<br/>
          </code>
        </pre>

        <Button color="green" href="http://www.google.com">I'm a link :D</Button>
        <pre>
          <code className="jsx">
            {"<Button color='green' href='http://www.google.com'>I'm a link :D</Button>"}<br/>
          </code>
        </pre>

        <Button color="blue">I'm a blue button :)</Button>
        <pre>
          <code className="jsx">
            {"<Button color='blue'>I'm a blue button :)</Button>"}<br/>
          </code>
        </pre>

        <Button color="red">I'm a red button :)</Button>
        <pre>
          <code className="jsx">
            {"<Button color='red'>I'm a red button :)</Button>"}<br/>
          </code>
        </pre>

        <Button color="yellow">I'm a yellow button :)</Button>
        <pre>
          <code className="jsx">
            {"<Button color='yellow'>I'm a yellow button :)</Button>"}<br/>
          </code>
        </pre>

        <Button color="grey">I'm a grey button :)</Button>
        <pre>
          <code className="jsx">
            {"<Button color='grey'>I'm a grey button :)</Button>"}<br/>
          </code>
        </pre>

        <h3>Primary Disabled</h3>

        <Button color='green' disabled>Disabled state</Button>
        <pre>
          <code className="jsx">
            {"<Button color='green' disabled>Disabled state</Button>"}
          </code>
        </pre>

        <Button color='green' disabled href="http://www.google.com">Disabled link state</Button>
        <pre>
          <code className="jsx">
            {`<Button color='green' disabled href="http://www.google.com">Disabled link state</Button>`}
          </code>
        </pre>

        <h3>Secondary</h3>

        <Button type="secondary" color="blue">Build your bundle</Button>
        <pre>
          <code className="jsx">
            {`<Button type="secondary" color="blue">Build your bundle</Button>`}
          </code>
        </pre>

        <h3>Secondary Disabled</h3>

        <Button  type="secondary" color="green" disabled>Build your bundle</Button>
        <pre>
          <code className="jsx">
            {`<Button  type="secondary" color="green" disabled>Build your bundle</Button>`}
          </code>
        </pre>

      </section>
    )
  }
}

export default Buttons;

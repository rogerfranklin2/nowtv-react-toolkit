import React from 'react';
import Input from '../../../src/components/Input/Input.react';

class Inputs extends React.Component {

  render() {
    return (
      <section className="inputs">
        <h2 className="section-title">Inputs</h2>

        <h3>Inactive / Active</h3>

        <Input placeholder="An input box"/>
        <pre>
          <code className="jsx">
            {"<Input placeholder='An input box'/>"}
          </code>
        </pre>

        <h3>Error</h3>

        <Input defaultValue="An error" placeholder="An Error" classes="error"/>
        <pre>
          <code className="jsx">
            {"<Input defaultValue='An error' placeholder='An Error' classes='error'/>"}
          </code>
        </pre>

        <h3>Disabled</h3>

        <Input defaultValue="Some uneditable text" placeholder="Uneditable" disabled/>
        <pre>
          <code className="jsx">
            {"<Input defaultValue='Some uneditable text' placeholder='Uneditable' disabled/>"}
          </code>
        </pre>

        <h3>Confirmation</h3>

        <Input defaultValue="test@test.com" placeholder="Confirmation" classes="confirmation"/>
        <pre>
          <code className="jsx">
            {"<Input defaultValue='test@test.com' placeholder='Confirmation' classes='confirmation'/>"}
          </code>
        </pre>
      </section>
    )
  }
}

export default Inputs;

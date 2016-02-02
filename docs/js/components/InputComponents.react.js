import React from 'react';
import Toolkit from '../../../src/toolkit';

class Inputs extends React.Component {

  render() {
    return (
      <section className="inputs">
        <h2 className="section-title">Inputs</h2>

        <h3>Inactive / Active</h3>

        <Toolkit.Input placeholder="An input box"/>
        <pre>
          <code className="jsx">
            {"<Toolkit.Input placeholder='An input box'/>"}
          </code>
        </pre>

        <h3>Error</h3>

        <Toolkit.Input defaultValue="An error" placeholder="An Error" classes="error"/>
        <pre>
          <code className="jsx">
            {"<Toolkit.Input defaultValue='An error' placeholder='An Error' classes='error'/>"}
          </code>
        </pre>

        <h3>Disabled</h3>

        <Toolkit.Input defaultValue="Some uneditable text" placeholder="Uneditable" disabled/>
        <pre>
          <code className="jsx">
            {"<Toolkit.Input defaultValue='Some uneditable text' placeholder='Uneditable' disabled/>"}
          </code>
        </pre>

        <h3>Confirmation</h3>

        <Toolkit.Input defaultValue="test@test.com" placeholder="Confirmation" classes="confirmation"/>
        <pre>
          <code className="jsx">
            {"<Toolkit.Input defaultValue='test@test.com' placeholder='Confirmation' classes='confirmation'/>"}
          </code>
        </pre>
      </section>
    )
  }
}

export default Inputs;

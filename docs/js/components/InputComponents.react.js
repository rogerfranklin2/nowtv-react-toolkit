import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Inputs extends React.Component {

    render() {
        return (
            <section className="inputs">
              <h2>Inputs</h2>
              <h3>Inactive / Active</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Input placeholder="An input box"/>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Input placeholder='An input box'/>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Error</h3>
                        
              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Input defaultValue="An error" placeholder="An Error" classes="error"/>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Input defaultValue='An error' placeholder='An Error' classes='error'/>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Disabled</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Input defaultValue="Some uneditable text" placeholder="Uneditable" disabled/>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Input defaultValue='Some uneditable text' placeholder='Uneditable' disabled/>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Confirmation</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Input defaultValue="test@test.com" placeholder="Confirmation" classes="confirmation"/>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Input defaultValue='test@test.com' placeholder='Confirmation' classes='confirmation'/>"}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Inputs;

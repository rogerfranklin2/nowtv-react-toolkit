import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Buttons extends React.Component {

    render() {
        return (
            <section className="buttons">
              <h2>Buttons</h2>
              <h3>Primary</h3>

              <div className="category row">
                <div className="col-md-6">
                    <Toolkit.Button classes="primary green">Inactive state</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='primary green'>Inactive state</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Button classes='primary' disabled>Disabled state</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='primary' disabled>Disabled state</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="category row">
                <div className="col-md-6 bg-green">
                  <Toolkit.Button classes="primary green inverted">Build your bundle</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='primary green inverted'>Build your bundle</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="category row">
                <div className="col-md-6 bg-green">
                  <Toolkit.Button classes="primary green inverted" disabled>Build your bundle</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='primary green inverted' disabled>Build your bundle</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Secondary</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Button classes="secondary blue">Build your bundle</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='secondary blue'>Build your bundle</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Button classes="secondary" disabled>Build your bundle</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='secondary' disabled>Build your bundle</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="category row">
                <div className="col-md-6 bg-blue">
                  <Toolkit.Button classes="secondary inverted">Build your bundle</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='secondary inverted'>Build your bundle</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="category row">
                <div className="col-md-6 bg-blue">
                  <Toolkit.Button classes="secondary inverted" disabled>Build your bundle</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='secondary inverted' disabled>Build your bundle</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>

             <h3>Default</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Toolkit.Button classes="default">Default Button</Toolkit.Button>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Button classes='default'>Default Button</Toolkit.Button>"}
                    </code>
                  </pre>
                </div>
              </div>
            </section>

        )
    }
}

export default Buttons;

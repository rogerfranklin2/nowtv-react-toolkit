import React from 'react';
import Toolkit from '../../../src/toolkit';

class Tickets extends React.Component {

    render() {
        return (
            <section className="tickets">
              <h2>Tickets</h2>
              <h3>Basic Text Content</h3>

              <div className="category row">
                <div className="col-md-3">
                  <Toolkit.Ticket title="Check this out!" classes="blue">
                      Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                  </Toolkit.Ticket>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Ticket title='Check this out!' classes='blue'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Toolkit.Ticket>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Nested HTML Elements</h3>

              <div className="category row">
                <div className="col-md-3">
                  <Toolkit.Ticket title="Check this out!" classes="red">
                      <img width="100%" src="https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png" />
                  </Toolkit.Ticket>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Ticket title='Check this out!' classes='red'><img width='100%' src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' /></Toolkit.Ticket>"}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Tickets;

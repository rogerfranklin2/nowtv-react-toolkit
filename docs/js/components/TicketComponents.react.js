import React from 'react';
import Ticket from '../../../src/components/Ticket/Ticket.react';

class Tickets extends React.Component {

    render() {
        return (
            <section className="tickets">
              <h2>Tickets</h2>
              <h3>Basic Text Content</h3>

              <div className="category row">
                <div className="col-md-3">
                  <Ticket title="Check this out!" classes="blue">
                      Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                  </Ticket>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Ticket title='Check this out!' classes='blue'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Ticket>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Nested HTML Elements</h3>

              <div className="category row">
                <div className="col-md-3">
                  <Ticket title="Check this out!" classes="red">
                      <img width="100%" src="https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png" />
                  </Ticket>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Ticket title='Check this out!' classes='red'><img width='100%' src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' /></Ticket>"}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Tickets;

import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Tickets extends React.Component {

    render() {
        return (
            <section className="tickets">
                <h2>Tickets</h2>

                <div className="clearfix">
                    <h3>Cropped</h3>
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Ticket title="Check this out!">
                                Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                            </Toolkit.Ticket>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Ticket title='Check this out!'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Toolkit.Ticket>"}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tickets;

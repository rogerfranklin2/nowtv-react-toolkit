import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Tips extends React.Component {
    render() {
        return (
            <section className="tip">
                <h2>Tips</h2>

                <h3>Default</h3>
                <div className="clearfix">
                    <div className="half">
                        <div className="half">
                            <Toolkit.Tip>
                                Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                            </Toolkit.Tip>
                        </div>
                    </div>
                    <div className="half">
                        <pre>
                            <code className="jsx">
                                {"<Toolkit.Tip>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Toolkit.Tip>"}
                            </code>
                        </pre>
                    </div>
                </div>

                <h3>Top Centre</h3>
                <div className="clearfix">
                    <div className="half">
                        <div className="half">
                            <Toolkit.Tip arrow-position='top-centre'>
                                Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                            </Toolkit.Tip>
                        </div>
                    </div>
                    <div className="half">
                        <pre>
                            <code className="jsx">
                                {"<Toolkit.Tip arrow-position='top-centre'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Toolkit.Tip>"}
                            </code>
                        </pre>
                    </div>
                </div>

                <h3>Bottom Right</h3>
                <div className="clearfix">
                    <div className="half">
                        <div className="half">
                            <Toolkit.Tip arrow-position='bottom-right'>
                                Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                            </Toolkit.Tip>
                        </div>
                    </div>
                    <div className="half">
                        <pre>
                            <code className="jsx">
                                {"<Toolkit.Tip arrow-position='bottom-right'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Toolkit.Tip>"}
                            </code>
                        </pre>
                    </div>
                </div>

            </section>
        )
    }
}

export default Tips;
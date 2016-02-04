import React from 'react';
import Tip from '../../../src/components/Tip/Tip.react';

class Tips extends React.Component {
    render() {
        return (
            <section className="tip">
              <h2>Tips</h2>
              <h3>Default</h3>

              <div className="category row">
                <div className="col-md-4">
                  <Tip>
                      Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                  </Tip>
                </div>
                <div className="col-md-8">
                  <pre>
                    <code className="jsx">
                      {"<Tip>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Tip>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Top Centre</h3>

              <div className="category row">
                <div className="col-md-4">
                  <Tip arrow-position='top-centre' classes='blue' >
                      Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                  </Tip>
                </div>
                <div className="col-md-8">
                  <pre>
                    <code className="jsx">
                      {"<Tip arrow-position='top-centre' classes='blue'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Tip>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Bottom Right</h3>

              <div className="category row">
                <div className="col-md-4">
                  <Tip arrow-position='bottom-right' classes='red'>
                      Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                  </Tip>
                </div>
                <div className="col-md-8">
                  <pre>
                    <code className="jsx">
                      {"<Tip arrow-position='bottom-right' classes='red'>Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.</Tip>"}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Tips;

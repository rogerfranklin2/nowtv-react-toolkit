import React from 'react';
import Dropdown from '../../../src/components/Dropdown/Dropdown.react';

class Dropdowns extends React.Component {

    render() {
        return (
            <section className="inputs">
              <h2>Dropdowns</h2>
              <h3>Active</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Dropdown>
                      <option value="movies">Movies</option>
                      <option value="sports">Sports</option>
                      <option value="entertainment">Entertainment</option>
                  </Dropdown>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Dropdown>"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='movies'>Movies</option>"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='sports'>Sports</option>"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='entertainment'>Entertainment</option>"}<br/>
                      {"</Dropdown>"}
                    </code>
                  </pre>
                </div>
              </div>

              <h3>Disabled</h3>

              <div className="category row">
                <div className="col-md-6">
                  <Dropdown disabled>
                      <option value="disabled">Disabled</option>
                  </Dropdown>
                </div>
                <div className="col-md-6">
                  <pre>
                    <code className="jsx">
                      {"<Dropdown disabled>"}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='disabled'>Disabled</option>"}<br/>
                      {"</Dropdown>"}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Dropdowns;

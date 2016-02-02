import React from 'react';
import Toolkit from '../../../src/toolkit';

class Checkboxes extends React.Component {

    render() {
        return (
            <section className="checkboxes">
              <h2>Checkboxes</h2>

              <div className="category row">
                <div className="col-md-3">
                  <Toolkit.Checkbox name="Available" value="available">Available</Toolkit.Checkbox>
                  <Toolkit.Checkbox name="Selected" checked={true} value="selected">Selected - Pre checked</Toolkit.Checkbox>
                  <Toolkit.Checkbox name="Disabled" value="disabled" disabled>Disabled</Toolkit.Checkbox>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.Checkbox name='available' value='available'>Available</Toolkit.Checkbox>"}<br/>
                      {"<Toolkit.Checkbox name='selected' checked={true} value='selected'>Selected - Pre checked</Toolkit.Checkbox>"}<br/>
                      {"<Toolkit.Checkbox name='disabled' value='disabled' disabled>Disabled</Toolkit.Checkbox>"}<br/>
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Checkboxes;

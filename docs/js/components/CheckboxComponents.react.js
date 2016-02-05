import React from 'react';
import Checkbox from '../../../src/components/Checkbox/Checkbox.react';

class Checkboxes extends React.Component {

    render() {
        return (
            <section className="checkboxes">
              <h2>Checkboxes</h2>

              <div className="category row">
                <div className="col-md-3">
                  <Checkbox name="Available" value="available">Available</Checkbox>
                  <Checkbox className="hover" name="Available" value="available">Hover</Checkbox>
                  <Checkbox name="Selected" checked={true} value="selected">Selected - Pre checked</Checkbox>
                  <Checkbox name="Disabled" value="disabled" disabled>Disabled</Checkbox>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Checkbox name='available' value='available'>Available</Checkbox>"}<br/>
                      {"<Checkbox name='hover' value='hover'>Hover</Checkbox>"}<br/>
                      {"<Checkbox name='selected' checked={true} value='selected'>Selected - Pre checked</Checkbox>"}<br/>
                      {"<Checkbox name='disabled' value='disabled' disabled>Disabled</Checkbox>"}<br/>
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default Checkboxes;

import React from 'react';
import Toolkit from '../../../dist/toolkit';

class RadioButtons extends React.Component {

    render() {
        return (
            <section className="radio-buttons">
                <h2>RadioButtons</h2>

              <div className="category row">
                <div className="col-md-3">
                  <Toolkit.RadioButton name="Available" value="available">Available</Toolkit.RadioButton>
                  <Toolkit.RadioButton className="hover" name="Available" value="available">Hover</Toolkit.RadioButton>
                  <Toolkit.RadioButton name="Selected" checked={true} value="selected">Selected - Pre checked</Toolkit.RadioButton>
                  <Toolkit.RadioButton name="Disabled" value="disabled" disabled>Disabled</Toolkit.RadioButton>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.RadioButton name='available' value='available'>Available</Toolkit.RadioButton>"}<br/>
                      {"<Toolkit.RadioButton name='hover' value='hover'>Hover</Toolkit.RadioButton>"}<br/>
                      {"<Toolkit.RadioButton name='selected' checked={true} value='selected'>Selected - Pre checked</Toolkit.RadioButton>"}<br/>
                      {"<Toolkit.RadioButton name='disabled' value='disabled' disabled>Disabled</Toolkit.RadioButton>"}<br/>
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default RadioButtons;

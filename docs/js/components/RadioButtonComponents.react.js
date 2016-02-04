import React from 'react';
import RadioButton from '../../../src/components/RadioButton/RadioButton.react';

class RadioButtons extends React.Component {

    render() {
        return (
            <section className="radio-buttons">
                <h2>RadioButtons</h2>

              <div className="category row">
                <div className="col-md-3">
                  <RadioButton name="Available" value="available">Available</RadioButton>
                  <RadioButton className="hover" name="Available" value="available">Hover</RadioButton>
                  <RadioButton name="Selected" checked={true} value="selected">Selected - Pre checked</RadioButton>
                  <RadioButton name="Disabled" value="disabled" disabled>Disabled</RadioButton>
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<RadioButton name='available' value='available'>Available</RadioButton>"}<br/>
                      {"<RadioButton name='hover' value='hover'>Hover</RadioButton>"}<br/>
                      {"<RadioButton name='selected' checked={true} value='selected'>Selected - Pre checked</RadioButton>"}<br/>
                      {"<RadioButton name='disabled' value='disabled' disabled>Disabled</RadioButton>"}<br/>
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )
    }
}

export default RadioButtons;

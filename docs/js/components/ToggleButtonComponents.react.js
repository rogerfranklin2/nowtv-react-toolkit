import React from 'react';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton.react';

class ToggleButtons extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: true
    };
    this.performParentOnClick = this.performParentOnClick.bind(this);
  }

    render() {
        return (
            <section className="toggle-buttons">
              <h2>ToggleButtons</h2>

              <div className="category row">
                <div className="col-md-3">
                  <ToggleButton name='available' value='available' />
                  <ToggleButton name="Available" value="available" offText="Off" onText="On" />
                  <ToggleButton name="Selected" checked={true} value="selected" offText="Off" onText="On" />
                  <ToggleButton name="Disabled" value="disabled" disabled  offText="Off" onText="On" />
                  <ToggleButton name='onClick' checked={this.state.checked} value='onClick' onClick={this.performParentOnClick}  />
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<ToggleButton name='available' value='available' />"}<br/>
                      {"<ToggleButton name='available' value='available' offText='Off' onText='On' />"}<br/>
                      {"<ToggleButton name='selected' checked={true} value='selected' offText='Off' onText='On'/>"}<br/>
                      {"<ToggleButton name='disabled' value='disabled' offText='Off' onText='On' disabled/>"}<br/>
                      {"<ToggleButton name='onClick' value='onClick' checked={this.state.checked} onClick={this.performParentOnClick()}/>"}<br/>
                    </code>
                  </pre>
                </div>
              </div>
            </section>
        )

    }
    performParentOnClick(){
      this.setState({
        checked: !this.state.checked
      });
    }
}

export default ToggleButtons;

import React from 'react';
import Toolkit from '../../../dist/toolkit';

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
                  <Toolkit.ToggleButton name='available' value='available' />
                  <Toolkit.ToggleButton name="Available" value="available" offText="Off" onText="On" />
                  <Toolkit.ToggleButton name="Selected" checked={true} value="selected" offText="Off" onText="On" />
                  <Toolkit.ToggleButton name="Disabled" value="disabled" disabled  offText="Off" onText="On" />
                  <Toolkit.ToggleButton name='onClick' checked={this.state.checked} value='onClick' onClick={this.performParentOnClick}  />
                </div>
                <div className="col-md-9">
                  <pre>
                    <code className="jsx">
                      {"<Toolkit.ToggleButton name='available' value='available' />"}<br/>
                      {"<Toolkit.ToggleButton name='available' value='available' offText='Off' onText='On' />"}<br/>
                      {"<Toolkit.ToggleButton name='selected' checked={true} value='selected' offText='Off' onText='On'/>"}<br/>
                      {"<Toolkit.ToggleButton name='disabled' value='disabled' offText='Off' onText='On' disabled/>"}<br/>
                      {"<Toolkit.ToggleButton name='onClick' value='onClick' checked={this.state.checked} onClick={this.performParentOnClick()}/>"}<br/>
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

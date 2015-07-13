import React from 'react';
import Toolkit from '../../../dist/toolkit';

class ToggleButtons extends React.Component {

    render() {
        return (
            <section className="toggle-buttons">
                <h2>ToggleButtons</h2>

                <div className="clearfix">
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.ToggleButton name='available' value='available' />
                            <Toolkit.ToggleButton name="Available" value="available" offText="Off" onText="On" />
                            <Toolkit.ToggleButton name="Selected" checked={true} value="selected"  offText="Off" onText="On" />
                            <Toolkit.ToggleButton name="Disabled" value="disabled" disabled  offText="Off" onText="On" />
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.ToggleButton name='available' value='available' />"}<br/>
                                    {"<Toolkit.ToggleButton name='available' value='available' offText='Off' onText='On' />"}<br/>
                                    {"<Toolkit.ToggleButton name='selected' checked={true} value='selected' offText='Off' onText='On'/>"}<br/>
                                    {"<Toolkit.ToggleButton name='disabled' value='disabled' offText='Off' onText='On' disabled/>"}<br/>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ToggleButtons;

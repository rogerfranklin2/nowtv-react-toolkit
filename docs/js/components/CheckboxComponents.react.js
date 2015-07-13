import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Checkboxes extends React.Component {

    render() {
        return (
            <section className="checkboxes">
                <h2>Checkboxes</h2>

                <div className="clearfix">
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Checkbox name="Available" value="available">Available</Toolkit.Checkbox>
                            <Toolkit.Checkbox className="hover" name="Available" value="available">Hover</Toolkit.Checkbox>
                            <Toolkit.Checkbox name="Selected" checked={true} value="selected">Selected - Pre checked</Toolkit.Checkbox>
                            <Toolkit.Checkbox name="Disabled" value="disabled" disabled>Disabled</Toolkit.Checkbox>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Checkbox name='available' value='available'>Available</Toolkit.Checkbox>"}<br/>
                                    {"<Toolkit.Checkbox name='hover' value='hover'>Hover</Toolkit.Checkbox>"}<br/>
                                    {"<Toolkit.Checkbox name='selected' checked={true} value='selected'>Selected - Pre checked</Toolkit.Checkbox>"}<br/>
                                    {"<Toolkit.Checkbox name='disabled' value='disabled' disabled>Disabled</Toolkit.Checkbox>"}<br/>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Checkboxes;

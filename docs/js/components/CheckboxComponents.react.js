import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Checkboxes extends React.Component {

    render() {
        return (
            <section className="checkboxes">
                <h2>Checkboxes</h2>

                <div className="clearfix">
                    <h3>Active</h3>
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Checkbox name="checkbox1" value="checkbox1">Checkbox 1</Toolkit.Checkbox>
                            <Toolkit.Checkbox name="checkbox2" value="checkbox2">Checkbox 2</Toolkit.Checkbox>
                            <Toolkit.Checkbox name="checkbox3" checked={true} value="checkbox3">Checkbox 3 - Pre checked</Toolkit.Checkbox>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Checkbox name='checkbox1' value='checkbox1'>Checkbox 1</Toolkit.Checkbox>"}<br/>
                                    {"<Toolkit.Checkbox name='checkbox2' value='checkbox2'>Checkbox 2</Toolkit.Checkbox>"}<br/>
                                    {"<Toolkit.Checkbox name='checkbox3' checked={true} value='checkbox3'>Checkbox 3 - Pre checked</Toolkit.Checkbox>"}<br/>
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

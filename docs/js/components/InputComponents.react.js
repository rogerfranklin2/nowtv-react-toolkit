import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Inputs extends React.Component {

    render() {
        return (
            <section className="inputs">
                <h2>Inputs</h2>

                <div className="clearfix">
                    <h3>Inactive / Active</h3>
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Input placeholder="An input box"/>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Input placeholder='An input box'/>"}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <h3>Error</h3>
                        <div className="half">
                            <Toolkit.Input defaultValue="An error" placeholder="An Error" classes="error"/>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Input defaultValue='An error' placeholder='An Error' classes='error'/>"}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <h3>Disabled</h3>
                        <div className="half">
                            <Toolkit.Input defaultValue="Some uneditable text" placeholder="Uneditable" disabled/>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Input defaultValue='Some uneditable text' placeholder='Uneditable' disabled/>"}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <h3>Confirmation</h3>
                        <div className="half">
                            <Toolkit.Input defaultValue="test@test.com" placeholder="Confirmation" classes="confirmation"/>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Input defaultValue='test@test.com' placeholder='Confirmation' classes='confirmation'/>"}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Inputs;

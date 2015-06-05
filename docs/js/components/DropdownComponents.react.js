import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Dropdowns extends React.Component {

    render() {
        return (
            <section className="inputs">
                <h2>Dropdowns</h2>

                <div className="clearfix">
                    <h3>Active</h3>
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Dropdown>
                                <option value="movies">Movies</option>
                                <option value="sports">Sports</option>
                                <option value="entertainment">Entertainment</option>
                            </Toolkit.Dropdown>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Dropdown>"}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='movies'>Movies</option>"}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='sports'>Sports</option>"}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='entertainment'>Entertainment</option>"}<br/>
                                    {"</Toolkit.Dropdown>"}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <h3>Disabled</h3>
                        <div className="half">
                            <Toolkit.Dropdown disabled>
                                <option value="disabled">Disabled</option>
                            </Toolkit.Dropdown>
                        </div>
                        <div className="half">
                            <pre>
                                <code className="jsx">
                                    {"<Toolkit.Dropdown disabled>"}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<option value='disabled'>Disabled</option>"}<br/>
                                    {"</Toolkit.Dropdown>"}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Dropdowns;

import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Buttons extends React.Component {

    render() {
        return (
            <section className="buttons">
                <h2>Buttons</h2>
                <h3>Primary</h3>

                <div className="clearfix">
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Button classes="primary green">Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='primary green'>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Button classes='primary' disabled>Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='primary' disabled>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <div className="half bg-green">
                            <Toolkit.Button classes="primary green inverted">Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='primary green inverted'>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <div className="half bg-green">
                            <Toolkit.Button classes="primary green inverted" disabled>Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='primary green inverted' disabled>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                </div>

                <h3>Secondary</h3>

                <div className="clearfix">
                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Button classes="secondary blue">Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='secondary blue'>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <div className="half">
                            <Toolkit.Button classes="secondary" disabled>Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='secondary' disabled>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <div className="half bg-blue">
                            <Toolkit.Button classes="secondary inverted">Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='secondary inverted'>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>

                    <div className="clearfix">
                        <div className="half bg-blue">
                            <Toolkit.Button classes="secondary inverted" disabled>Build your bundle</Toolkit.Button>
                        </div>
                        <div className="half">
                                    <pre>
                                        <code className="jsx">
                                            {"<Toolkit.Button classes='secondary inverted' disabled>Build your bundle</Toolkit.Button>"}
                                        </code>
                                    </pre>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Buttons;

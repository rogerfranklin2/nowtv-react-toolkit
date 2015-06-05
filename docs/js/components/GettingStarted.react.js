import React from 'react';
import Toolkit from '../../../dist/toolkit';

class App extends React.Component {

    render() {
        return (
                <section className="gettingStarted">
                    <h2>Getting started</h2>

                    <h3>Installation</h3>
                    <pre>
                        <code className="sh">
                            npm install 'nowtv-toolkit' --save
                        </code>
                    </pre>

                    <h3>Usage</h3>
                    <pre>
                        <code className="javascript">
                            import Toolkit from 'nowtv-toolkit'


                        </code>
                    </pre>
                </section>


        )
    }
}

export default App;

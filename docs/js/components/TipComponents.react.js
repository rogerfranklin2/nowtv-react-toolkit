import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Tips extends React.Component {
    render() {
        return (
            <section className="tip">
                <h2>Tips</h2>

                <div className="clearfix">
                    <div className="half">
                        <div className="half">

                            <Toolkit.Tip>
                                Lorem ipsum dol or sit amet, con sectetur adipiscing elit.Aenean euis mod biben laoreet.
                            </Toolkit.Tip>

                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Tips;
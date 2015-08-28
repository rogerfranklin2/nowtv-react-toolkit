import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Typography extends React.Component {

    render() {
        return (
            <section className="typography">
                <h2>Typography</h2>

                <div className="example">
                    <span className="used-for">Used for <span className="darker">Primary Titles</span></span>

                    <h1>NOW TV Text Light 40/48</h1>
                </div>
                <div className="example">
                    <span className="used-for">Used for <span className="darker">Secondary Titles</span></span>

                    <h2>NOW TV Text Regular 30/34</h2>
                </div>
                <div className="example">
                    <span className="used-for">Used for <span className="darker">Straplines</span></span>

                    <h3>NOW TV Text Regular 20/26</h3>
                </div>
                <div className="example">
                    <span className="used-for">Used for <span className="darker">Subheaders</span></span>
                    <h4>NOW TV Text Bold 18/24</h4>
                </div>
                <div className="example">
                    <span className="used-for">Used for <span className="darker">Buttons</span></span>
                    <h5>NOW TV Text Bold 16/16</h5>
                </div>
                <div className="example">
                    <span className="used-for">Used for <span className="darker">Body text</span></span>

                    <p>NOW TV Text Regular 14/18</p>
                </div>
                <div className="example">
                    <span className="used-for">Used for <span className="darker">Ts &amp; Cs</span></span>

                    <p className="smaller">NOW TV Text Regular 12/16</p>
                </div>
            </section>
        )
    }
}

export default Typography;

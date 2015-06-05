import React from 'react';
import Toolkit from '../../../dist/toolkit';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Now TV Ark UI Toolkit</h1>
                <hr />
                <section className="button">
                    <h2>Buttons</h2>
                    <Toolkit.Button classes="green">A green button</Toolkit.Button>
                    <Toolkit.Button  disabled>A disabled button</Toolkit.Button>

                    <Toolkit.Button classes="green secondary">A secondary button</Toolkit.Button>
                    <Toolkit.Button  disabled>A disabled button</Toolkit.Button>

                    <div className="inverted">
                        <Toolkit.Button onClick={ this._onClick } classes="inverted i-blue">An inverted button</Toolkit.Button>
                        <Toolkit.Button  disabled>A disabled button</Toolkit.Button>
                    </div>
                </section>

               <section className="inputs"> 
                    <h2>Inputs</h2>

                    <h3>Inactive / Active</h3>
                    <Toolkit.Input placeholder="An input box"/>

                    <h3>Error</h3>
                    <Toolkit.Input defaultValue="An error" placeholder="An Error" classes="error"/>

                    <h3>Disabled</h3>
                    <Toolkit.Input defaultValue="Some uneditable text" placeholder="Uneditable" disabled/>

                    <h3>Confirmation</h3>
                    <Toolkit.Input defaultValue="test@test.com" placeholder="Confirmation" classes="confirmation"/>
                </section>

                <section className="checkbox">
                    <h2>Dropdowns</h2>
                    
                    <h3>Active</h3>
                    <Toolkit.Dropdown>
                        <option value="movies">Movies</option>
                        <option value="sports">Sports</option>
                        <option value="entertainment">Entertainment</option>
                    </Toolkit.Dropdown>

                    <h3>Disabled</h3>
                    <Toolkit.Dropdown disabled>
                        <option value="disabled">Disabled</option>
                    </Toolkit.Dropdown>
                </section>
            </div>

        )
    }
}

export default App;

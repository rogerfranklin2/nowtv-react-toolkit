import React from 'react';
import Toolkit from '../../../dist/toolkit';
import Buttons from './ButtonComponents.react'
import Inputs from './InputComponents.react'
import Dropdowns from './DropdownComponents.react'
import Checkboxes from './CheckboxComponents.react'
import GettingStarted from './GettingStarted.react'
import Tickets from "./TicketComponents.react"

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Now TV Ark UI Toolkit</h1>
                <hr/>
                <GettingStarted/>
                <Buttons/>
                <Inputs/>
                <Dropdowns/>
                <Checkboxes/>
                <Tickets/>
            </div>

        )
    }
}

export default App;

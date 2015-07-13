import React from 'react';
import Toolkit from '../../../dist/toolkit';
import Buttons from './ButtonComponents.react';
import Inputs from './InputComponents.react';
import Dropdowns from './DropdownComponents.react';
import Checkboxes from './CheckboxComponents.react';
import GettingStarted from './GettingStarted.react';
import Tickets from './TicketComponents.react';
import Tips from './TipComponents.react';
import Links from './LinksComponents.react';
import RadioButtons from './RadioButtonComponents.react';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Now TV Ark UI Toolkit</h1>
                <hr/>
                <GettingStarted className="gettingstarted-doc"/>
                <Buttons className="buttons-doc"/>
                <Links className="links-doc" />
                <Inputs className="inputs-doc"/>
                <Dropdowns className="dropdowns-doc"/>
                <Checkboxes className="checkboxes-doc"/>
                <RadioButtons className="radio-buttons-doc"/>
                <Tickets className="tickets-doc"/>
                <Tips className="tips-doc"/>
            </div>

        )
    }
}

export default App;

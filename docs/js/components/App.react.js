import React from 'react';
import Buttons from './ButtonComponents.react';
import Inputs from './InputComponents.react';
import Dropdowns from './DropdownComponents.react';
import Checkboxes from './CheckboxComponents.react';
import GettingStarted from './GettingStarted.react';
import Tickets from './TicketComponents.react';
import Tips from './TipComponents.react';
import RadioButtons from './RadioButtonComponents.react';
import ToggleButtons from './ToggleButtonComponents.react';
import Notifications from './NotificationComponents.react';
import Accordion from './AccordionComponents.react';
import Spinners from './SpinnerComponents.react';
import Headers from './HeaderComponents.react';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1 className="title">NowTV React Web Toolkit</h1>
        <GettingStarted className="gettingstarted-doc"/>
        <Buttons className="buttons-doc"/>
        <Inputs className="inputs-doc"/>
        <Dropdowns className="dropdowns-doc"/>
        <Checkboxes className="checkboxes-doc"/>
        <RadioButtons className="radio-buttons-doc"/>
        <ToggleButtons className="toggle-buttons-doc"/>
        <Tickets className="tickets-doc"/>
        <Tips className="tips-doc"/>
        <Notifications className="notifications-doc"/>
        <Accordion classNames="accordions-doc" />
        <Spinners classNames="spinner-doc" />
        <Headers classNames="header-doc" />
      </div>
    )
  }
}

export default App;

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
import ToggleButtons from './ToggleButtonComponents.react';
import Notifications from './NotificationComponents.react';
import Modal from './ModalComponents.react';
import Accordion from './AccordionComponents.react';
import Spinner from './SpinnerComponents.react';
import Typography from './Typography.react';
import Grid from './Grid.react';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1 className="title">NowTV React Web Toolkit</h1>
        <GettingStarted className="gettingstarted-doc"/>
        <Grid/>
        <Typography/>
        <Buttons className="buttons-doc"/>
        <Links className="links-doc" />
        <Inputs className="inputs-doc"/>
        <Dropdowns className="dropdowns-doc"/>
        <Checkboxes className="checkboxes-doc"/>
        <RadioButtons className="radio-buttons-doc"/>
        <ToggleButtons className="toggle-buttons-doc"/>
        <Tickets className="tickets-doc"/>
        <Tips className="tips-doc"/>
        <Notifications className="notifications-doc"/>
        <Modal classNames="modals-doc" />
        <Accordion classNames="accordions-doc" />
        <Spinner classNames="spinner-doc" />
      </div>
    )
  }
}

export default App;

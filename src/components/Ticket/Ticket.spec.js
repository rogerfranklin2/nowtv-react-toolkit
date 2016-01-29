import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowTicket from './Ticket.react';

describe('Ticket component', () => {
  it('should render a ticket', () => {
    const emptyTicket = shallow(<NowTicket/>);
    assert.ok(emptyTicket.find('.now-ticket'));
  });

  it('should contain a title', () => {
    const titleTicket = shallow(<NowTicket title="HelloIamATitle"/>);
    const ticketTitle = titleTicket.find('h3');
    assert.equal(ticketTitle.text(), 'HelloIamATitle');
  });

  it('should contain some content', () => {
    const fullTicket = shallow(<NowTicket title="HelloIamATitle">This is content woo!</NowTicket>);
    const ticketContent = fullTicket.find('p');
    assert.equal(ticketContent.text(), 'This is content woo!');
  });

  it('should contain a tearoff', () => {
    const emptyTicket = shallow(<NowTicket/>);
    assert.ok(emptyTicket.find('.tearoff'));
  });

  it('passed classes through', () => {
    const classesTicket = shallow(<NowTicket classes="testClass"/>);
    const renderedTicket = classesTicket.find('.now-ticket');
    assert.equal(renderedTicket.props().className, 'now-ticket testClass');
  });

  it('should pass classes to tear off', () => {
    const classesTearoff = shallow(<NowTicket classes="testClass"/>);
    const renderedTearoff = classesTearoff.find('.tearoff');
    assert.equal(renderedTearoff.props().className, 'tearoff testClass');
  });
});

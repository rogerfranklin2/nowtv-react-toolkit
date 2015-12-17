import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();
const assert = chai.assert;

import NowTicket from '../../src/components/Ticket/Ticket.react';

describe('Ticket component', function() {
    it('should render a ticket', function() {
        var renderComponent = TestUtils.renderIntoDocument(<NowTicket/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderComponent, 'now-ticket');
        should.exist(component);
    });

    it('should contain a title', function() {
        var renderComponent = TestUtils.renderIntoDocument(<NowTicket title="HelloIamATitle"/>);
        var component = TestUtils.findRenderedDOMComponentWithTag(renderComponent, 'h3');
        assert.equal((component).textContent, "HelloIamATitle");
        should.exist(component);
    });

    it('should contain some content', function() {
        var renderComponent = TestUtils.renderIntoDocument(<NowTicket title="HelloIamATitle">This is content woo!</NowTicket>);
        var component = TestUtils.findRenderedDOMComponentWithTag(renderComponent, 'p');
        assert.equal(component.textContent, "This is content woo!");
        should.exist(component);
    });
});

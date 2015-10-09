var React = require('react');
var assert = require('assert');
var should = require('chai').should();
var NowTicket = require('../../src/components/Ticket/Ticket.react');
var TestUtils = require('react-addons-test-utils');

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
        var component = TestUtils.findRenderedDOMComponentWithClass(renderComponent, 'children');
        assert.equal(component.textContent, "This is content woo!");
        should.exist(component);
    });
});

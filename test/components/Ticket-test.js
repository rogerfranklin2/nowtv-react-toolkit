var React = require('react/addons');
var assert = require('assert');
var should = require('chai').should();
var NowTicket = require('../../src/components/Ticket/Ticket.react');
var TestUtils = React.addons.TestUtils;

describe('Input component', function() {
    it('should render a ticket', function() {
        var renderComponent = TestUtils.renderIntoDocument(<NowTicket/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderComponent, 'now-ticket');
        should.exist(component);
    });

    it('should contain a title', function() {
        var renderComponent = TestUtils.renderIntoDocument(<NowTicket title="HelloIamATitle"/>);
        var component = TestUtils.findRenderedDOMComponentWithTag(renderComponent, 'h5');
        assert.equal(React.findDOMNode(component).textContent, "HelloIamATitle");
        should.exist(component);
    });

    it('should contain some content', function() {
        var renderComponent = TestUtils.renderIntoDocument(<NowTicket title="HelloIamATitle">This is content woo!</NowTicket>);
        var component = TestUtils.findRenderedDOMComponentWithTag(renderComponent, 'p');
        assert.equal(React.findDOMNode(component).textContent, "This is content woo!");
        should.exist(component);
    });
});

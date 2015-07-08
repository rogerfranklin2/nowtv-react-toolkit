var React = require('react/addons');
var assert = require('assert');
var should = require('chai').should();
var NowTip = require('../../src/components/Tip/Tip.react');
var TestUtils = React.addons.TestUtils;

describe('Tip component', function(){
    it('should render a tip', function () {
        var renderedComponent = TestUtils.renderIntoDocument(<NowTip/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-tip');
        should.exist(component);
    });

    it('should contain some content', function () {
        var renderedComponent = TestUtils.renderIntoDocument(<NowTip>this is tip content</NowTip>);
        var component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
        assert.equal(React.findDOMNode(component).textContent, "this is tip content");
    });
});
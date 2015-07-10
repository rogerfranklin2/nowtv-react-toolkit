var React = require('react/addons');
var assert = require('chai').assert;
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

    describe('arrow position', function(){
        describe('top centre', function(){
            it('should render correct arrow', function(){
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip arrow-position='top-centre'>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'arrow-top-centre');
                should.exist(component);
            });

            it('should render tip with correct class for arrow position', function(){
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip arrow-position='top-centre'>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-tip');
                var classNames = component.props.className.split(' ');
                assert.include(classNames, 'top-centre');
            });
        });

        describe('bottom right', function(){
            it('should render correct arrow', function(){
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip arrow-position='bottom-right'>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'arrow-bottom-right');
                should.exist(component);
            });

            it('should render tip with correct class for arrow position', function(){
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip arrow-position='bottom-right'>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-tip');
                var classNames = component.props.className.split(' ');
                assert.include(classNames, 'bottom-right');
            });
        });

        describe('undefined', function() {
            it('should render correct arrow top centre', function() {
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'arrow-top-centre');
                should.exist(component);
            });

            it('should render tip with correct class for arrow position', function(){
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-tip');
                var classNames = component.props.className.split(' ');
                assert.include(classNames, 'top-centre');
            });
        });

        describe('unsupported', function() {
            it('should render correct arrow top centre', function() {
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip arrow-position='bottom-left'>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'arrow-top-centre');
                should.exist(component);
            });

            it('should render tip with correct class for arrow position', function(){
                var renderedComponent = TestUtils.renderIntoDocument(<NowTip arrow-position='bottom-left'>this is tip content</NowTip>);
                var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-tip');
                var classNames = component.props.className.split(' ');
                assert.include(classNames, 'top-centre');
            });
        });
    });

});
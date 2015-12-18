import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();
const assert = chai.assert;

import NowTip from '../../src/components/Tip/Tip.react';

describe('Tip component', function(){
    it('should render a tip', function () {
        var renderedComponent = TestUtils.renderIntoDocument(<NowTip/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-tip');
        should.exist(component);
    });

    it('should contain some content', function () {
        var renderedComponent = TestUtils.renderIntoDocument(<NowTip>this is tip content</NowTip>);
        var component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
        assert.equal(ReactDOM.findDOMNode(component).textContent, "this is tip content");
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
                var classNames = component.className.split(' ');
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
                var classNames = component.className.split(' ');
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
                var classNames = component.className.split(' ');
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
                var classNames = component.className.split(' ');
                assert.include(classNames, 'top-centre');
            });
        });
    });

});

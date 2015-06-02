var React = require('react/addons');
var assert = require('assert');
var should = require('chai').should();
var NowButton = require('../../src/components/Button/Button.react');
var TestUtils = React.addons.TestUtils;

describe('Button component', function() {

    before('render and locate element', function() {
        var renderedComponent = TestUtils.renderIntoDocument(
            <NowButton>Now Button</NowButton>
        );

        var pComponent = TestUtils.findRenderedDOMComponentWithClass( renderedComponent, 'now-button' );
        this.pElement = pComponent.getDOMNode();
    });


    it('should display text', function() {
        assert.equal(this.pElement.textContent, 'Now Button');
    });


    it('should be inverted', function(){
        var transparentButton = TestUtils.renderIntoDocument(
            <NowButton classes="inverted">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithClass(transparentButton, 'inverted');
        should.exist(renderedButton)
    });


    it('should be inverted and green', function(){
        var transparentButton = TestUtils.renderIntoDocument(
            <NowButton classes="inverted green">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithClass(transparentButton, 'inverted green');
        should.exist(renderedButton)
    });


    it('should accept any props', function() {
        var buttonWithName = TestUtils.renderIntoDocument(
            <NowButton name="build-your-bundle">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithTag(buttonWithName, 'button');
        assert.equal(renderedButton.props.name, 'build-your-bundle');
    });
});

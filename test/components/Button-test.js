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
      <NowButton type="inverted">Build your bundle</NowButton>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(transparentButton, 'inverted');
    should.exist(renderedButton)
    })

});

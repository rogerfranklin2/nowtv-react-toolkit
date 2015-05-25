var React = require('react/addons');
var assert = require('assert');
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

});

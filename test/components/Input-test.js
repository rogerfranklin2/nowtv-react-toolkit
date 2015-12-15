var React = require('react');
var assert = require('assert');
var should = require('chai').should();
var NowInput = require('../../src/components/Input/Input.react');
var TestUtils = require('react-addons-test-utils');

describe('Input component', function() {

    before('render and locate element', function() {
        var renderedComponent = TestUtils.renderIntoDocument(
            <NowInput />
        );

        this.pComponent = TestUtils.findRenderedDOMComponentWithClass( renderedComponent, 'now-input' );
    });


    it('should display a form field', function() {
        should.exist(this.pComponent);
    });


    it('should add addtional classes', function(){
        var inputWithClass = TestUtils.renderIntoDocument(
            <NowInput classes="extraClass"/>
        );

        var renderedInput = TestUtils.findRenderedDOMComponentWithClass(inputWithClass, 'extraClass');
        should.exist(renderedInput);
    })

    it('should add any addtionalitional props', function(){
        var inputWithAdditionalId = TestUtils.renderIntoDocument(
            <NowInput id="additinalId"/>
        );

        var renderedInput = TestUtils.findRenderedDOMComponentWithClass(inputWithAdditionalId, 'now-input');
        assert.equal(renderedInput.id, "additinalId");
    })

});

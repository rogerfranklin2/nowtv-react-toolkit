var React = require('react');
var assert = require('assert');
var should = require('chai').should();
var NowDropdown = require('../../src/components/Dropdown/Dropdown.react');
var TestUtils = require('react-addons-test-utils');

describe('Dropdown component', function() {

    it('should display a dropdown element', function() {
        var renderedComponent = TestUtils.renderIntoDocument(<NowDropdown/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-dropdown');
        should.exist(component);
    });


    it('should add addtional classes', function(){
        var dropdownWithClass = TestUtils.renderIntoDocument(<NowDropdown classes="extraClass"/>);
        var renderedDropdown = TestUtils.findRenderedDOMComponentWithClass(dropdownWithClass, 'extraClass');

        should.exist(renderedDropdown);
    })

    it('should add any addtionalitional props', function(){
        var dropdownWithAdditionalProp = TestUtils.renderIntoDocument(<NowDropdown id="anId"/>);
        var renderedDropdown = TestUtils.findRenderedDOMComponentWithClass(dropdownWithAdditionalProp, 'now-dropdown');

        assert.equal(renderedDropdown.id, "anId");
    })

    it('should render its children', function() {
        var dropdownWithChildren = TestUtils.renderIntoDocument(
            <NowDropdown>
                <option value="value">Value</option>
                <option value="value2">Value2</option>
            </NowDropdown>
        );
        var renderedDropdown = TestUtils.findRenderedDOMComponentWithClass(dropdownWithChildren, 'now-dropdown');
       
        assert.equal(renderedDropdown.children.length, 2);
    });
});

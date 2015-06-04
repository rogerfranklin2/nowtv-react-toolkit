var React = require('react/addons');
var assert = require('assert');
var should = require('chai').should();
var NowCheckbox = require('../../src/components/Checkbox/Checkbox.react');
var TestUtils = React.addons.TestUtils;

describe('Checkbox component', function() {
    it('should display a checkbox element', function() {
        var renderedComponent = TestUtils.renderIntoDocument(<NowCheckbox/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-checkbox');
        var element = component.getDOMNode();
        should.exist(element);
    });

    it('should add addtional classes to the label', function(){
        var checkboxWithClass = TestUtils.renderIntoDocument(<NowCheckbox classes="extraClass"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithClass, 'label');

        assert.equal(renderedCheckbox.props.className, "now-checkbox extraClass");
    })

    it('should not add addtional classes to the input', function(){
        var checkboxWithClass = TestUtils.renderIntoDocument(<NowCheckbox classes="extraClass"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithClass, 'input');

        assert.equal(renderedCheckbox.props.className, null);
    })

    it('should add any addtional props to the input', function(){
        var checkboxWithAdditionalProp = TestUtils.renderIntoDocument(<NowCheckbox name="name"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithAdditionalProp, 'input');

        assert.equal(renderedCheckbox.props.name, "name");
    })

    it('should not add any addtional props to the label', function(){
        var checkboxWithAdditionalProp = TestUtils.renderIntoDocument(<NowCheckbox name="name"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithAdditionalProp, 'label');

        assert.equal(renderedCheckbox.props.name, null);
    })

    it('should render its children', function() {
        var checkboxWithChildren = TestUtils.renderIntoDocument(
            <NowCheckbox>Checkbox 1</NowCheckbox>
        );
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithClass(checkboxWithChildren, 'now-checkbox');
       
        assert.equal(React.findDOMNode(renderedCheckbox).textContent, "Checkbox 1"); 
    });

    it('should check the checkbox if it is passed as a prop', function(){
        var checkboxWithProp = TestUtils.renderIntoDocument(
            <NowCheckbox checked={true}>Checkbox 1</NowCheckbox>
        );
        var renderedCheckboxLabel = TestUtils.findRenderedDOMComponentWithTag(checkboxWithProp, 'label');
        var renderedCheckboxInput = TestUtils.findRenderedDOMComponentWithTag(checkboxWithProp, 'input');
       
        assert.equal(renderedCheckboxLabel.props.className, "now-checkbox checked"); 
        assert.equal(renderedCheckboxInput.props.checked, true); 
    });
});

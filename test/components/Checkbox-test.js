const React = require('react/addons'),
    assert = require('assert'),
    should = require('chai').should(),
    NowCheckbox = require('../../src/components/Checkbox/Checkbox.react'),
    TestUtils = React.addons.TestUtils;

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
    });

    it('should not add addtional classes to the input', function(){
        var checkboxWithClass = TestUtils.renderIntoDocument(<NowCheckbox classes="extraClass"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithClass, 'input');

        assert.equal(renderedCheckbox.props.className, null);
    });

    it('should add any additional props to the input', function(){
        var checkboxWithAdditionalProp = TestUtils.renderIntoDocument(<NowCheckbox name="name"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithAdditionalProp, 'input');

        assert.equal(renderedCheckbox.props.name, "name");
    });

    it('should not add any additional props to the label', function(){
        var checkboxWithAdditionalProp = TestUtils.renderIntoDocument(<NowCheckbox name="name"/>);
        var renderedCheckbox = TestUtils.findRenderedDOMComponentWithTag(checkboxWithAdditionalProp, 'label');

        assert.equal(renderedCheckbox.props.name, null);
    });

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

    it('should add disabled class when disabled is passed as a prop', function(){
        var checkboxWithDisabled = TestUtils.renderIntoDocument(<NowCheckbox disabled />);
        var disabledCheckboxLabel = TestUtils.findRenderedDOMComponentWithTag(checkboxWithDisabled, 'label');
        var disabledCheckboxInput = TestUtils.findRenderedDOMComponentWithTag(checkboxWithDisabled, 'input');

        assert.equal(disabledCheckboxLabel.props.className, "now-checkbox disabled");
        assert.equal(disabledCheckboxInput.props.disabled, true);
    })

});

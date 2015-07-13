const React = require('react/addons'),
    assert = require('assert'),
    should = require('chai').should(),
    NowRadioButton= require('../../src/components/RadioButton/RadioButton.react'),
    TestUtils = React.addons.TestUtils;

describe('RadioButton component', function() {
    it('should display a radioButton element', function() {
        var renderedComponent = TestUtils.renderIntoDocument(<NowRadioButton/>);
        var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-radio-button');
        var element = component.getDOMNode();
        should.exist(element);
    });

    it('should add addtional classes to the label', function(){
        var radioButtonWithClass = TestUtils.renderIntoDocument(<NowRadioButton classes="extraClass"/>);
        var renderedRadioButton = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithClass, 'label');

        assert.equal(renderedRadioButton.props.className, "now-radio-button extraClass");
    });

    it('should not add addtional classes to the input', function(){
        var radioButtonWithClass = TestUtils.renderIntoDocument(<NowRadioButton classes="extraClass"/>);
        var renderedRadioButton = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithClass, 'input');

        assert.equal(renderedRadioButton.props.className, null);
    });

    it('should add any additional props to the input', function(){
        var radioButtonWithAdditionalProp = TestUtils.renderIntoDocument(<NowRadioButton name="name"/>);
        var renderedRadioButton = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithAdditionalProp, 'input');

        assert.equal(renderedRadioButton.props.name, "name");
    });

    it('should not add any additional props to the label', function(){
        var radioButtonWithAdditionalProp = TestUtils.renderIntoDocument(<NowRadioButton name="name"/>);
        var renderedRadioButton = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithAdditionalProp, 'label');

        assert.equal(renderedRadioButton.props.name, null);
    });

    it('should render its children', function() {
        var radioButtonWithChildren = TestUtils.renderIntoDocument(
            <NowRadioButton>RadioButton 1</NowRadioButton>
        );
        var renderedRadioButton = TestUtils.findRenderedDOMComponentWithClass(radioButtonWithChildren, 'now-radio-button');

        assert.equal(React.findDOMNode(renderedRadioButton).textContent, "RadioButton 1");
    });

    it('should check the radioButton if it is passed as a prop', function(){
        var radioButtonWithProp = TestUtils.renderIntoDocument(
            <NowRadioButton checked={true}>RadioButton 1</NowRadioButton>
        );
        var renderedRadioButtonLabel = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithProp, 'label');
        var renderedRadioButtonInput = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithProp, 'input');

        assert.equal(renderedRadioButtonLabel.props.className, "now-radio-button checked");
        assert.equal(renderedRadioButtonInput.props.checked, true);
    });

    it('should add disabled class when disabled is passed as a prop', function(){
        var radioButtonWithDisabled = TestUtils.renderIntoDocument(<NowRadioButton disabled />);
        var disabledRadioButtonLabel = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithDisabled, 'label');
        var disabledRadioButtonInput = TestUtils.findRenderedDOMComponentWithTag(radioButtonWithDisabled, 'input');

        assert.equal(disabledRadioButtonLabel.props.className, "now-radio-button disabled");
        assert.equal(disabledRadioButtonInput.props.disabled, true);
    })

});

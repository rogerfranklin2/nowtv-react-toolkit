const assert = require('assert'),
      React = require('react/addons'),
      should = require('chai').should(),
      TestUtils = React.addons.TestUtils,
      NowToggleButton = require('../../src/components/ToggleButton/ToggleButton.react');

describe('ToggleButton component', function() {
    describe('children components', function() {
        it('should display a toggle button element', function() {
            let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton />),
                toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-toggle-button'),
                element = toggleButton.getDOMNode();

            should.exist(element);
        });

        it('should display a toggle label element with default off text', function() {
            let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton />),
                toggleLabel = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-label off'),
                element = toggleLabel.getDOMNode();

            should.exist(element);
            assert.equal(element.textContent, "Off");
        });

        it('should display a toggle label element with default on text', function() {
            let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton />),
                toggleLabel = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-label on'),
                element = toggleLabel.getDOMNode();

            should.exist(element);
            assert.equal(element.textContent, "On");
        });

        it('should display a toggle label element with custom off text', function() {
            let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton offText='custom off'/>),
                toggleLabel = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-label off'),
                element = toggleLabel.getDOMNode();

            should.exist(element);
            assert.equal(element.textContent, 'custom off');
        });

        it('should display a toggle label element with custom on text', function() {
            let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton onText='custom on'/>),
                toggleLabel = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-label on'),
                element = toggleLabel.getDOMNode();

            should.exist(element);
            assert.equal(element.textContent, 'custom on');
        });

        it('should toggle component state on click event', function() {
            let renderedComponent = TestUtils.renderIntoDocument(
                <NowToggleButton>ToggleButton 1</NowToggleButton>
            ),
                toggleContainer = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div'),
                toggleInput = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

            TestUtils.Simulate.click(toggleInput);

            assert.equal(toggleContainer.props.className, "now-toggle-container checked");
        });

    });

    it('should add addtional classes to the toggle container', function(){
        let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton classes="extraClass"/>),
            toggleContainer = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div');

        assert.equal(toggleContainer.props.className, "now-toggle-container extraClass");
    });

    it('should not add addtional classes to the input', function(){
        let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton classes="extraClass"/>),
            toggleInput = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

        assert.equal(toggleInput.props.className, null);
    });

    it('should add any additional props to the input', function(){
        let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton name="name"/>),
            toggleInput = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

        assert.equal(toggleInput.props.name, "name");
    });

    it('should add a class "checked" to toggle container if checked=true is passed as a prop', function(){
        let renderedComponent = TestUtils.renderIntoDocument(
            <NowToggleButton checked={true}>ToggleButton 1</NowToggleButton>
        ),
            toggleContainer = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div');

        assert.equal(toggleContainer.props.className, "now-toggle-container checked");
    });

    it('should add a css class "disabled" to top level div if disabled is passed as a prop', function(){
        let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton disabled />),
            toggleContainer = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div');

        assert.equal(toggleContainer.props.className, "now-toggle-container disabled");
    });

    it('should not add any additional props to the label', function(){
        let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton name="name"/>),
            toggleLabel = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'label');

        assert.equal(toggleLabel.props.name, null);
    });
});
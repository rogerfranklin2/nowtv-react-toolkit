const assert = require('assert'),
      React = require('react/addons'),
      should = require('chai').should(),
      TestUtils = React.addons.TestUtils,
      NowToggleButton = require('../../src/components/ToggleButton/ToggleButton.react');

describe('ToggleButton component', function() {
  it('should display a toggle button element', function() {
      let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton />),
          toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button'),
          element = toggleButton.getDOMNode();

      should.exist(element);
  });

  it('should not display an off toggle label by default', function() {
      const renderedComponent = TestUtils.renderIntoDocument(
        <NowToggleButton />
      );

      const toggleLabel = TestUtils.scryRenderedDOMComponentsWithClass(renderedComponent, 'toggle-label off');

      assert.equal(toggleLabel.length, 0);
  });

  it('should not display an on toggle label by default', function() {
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton />
    );

    const toggleLabel = TestUtils.scryRenderedDOMComponentsWithClass(renderedComponent, 'toggle-label on');

    assert.equal(toggleLabel.length, 0);
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
      const renderedComponent = TestUtils.renderIntoDocument(
          <NowToggleButton/>
      );

      const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

      TestUtils.Simulate.click(toggleButton);

      React.findDOMNode(toggleButton).className.should.include("checked");
  });

  it('should toggle component state on click event and call props click event', function() {
    let myVar = false;
    let setTrue = function() {
      myVar = true;
    };
    const renderedComponent = TestUtils.renderIntoDocument(
          <NowToggleButton onClick={setTrue()}/>
      );

      const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

      TestUtils.Simulate.click(toggleButton);

      React.findDOMNode(toggleButton).className.should.include("checked");
      myVar.should.be.true;
  });

  it('should check the input if checked is passed', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton checked={true}/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');
    const input = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

    React.findDOMNode(toggleButton).className.should.include("checked");
    React.findDOMNode(input)['checked'].should.be.true;
  });

  it('should add additional classes to the toggle button', function(){
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton classes="extraClass"/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-toggle-container');

    React.findDOMNode(toggleButton).className.should.include("extraClass");
  });

  it('should not add addtional classes to the input', function(){
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton classes="extraClass"/>
    );

    const input = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

    React.findDOMNode(input).className.should.not.include("extraClass");
  });

  it('should disabled the input is disabled is passed', function(){
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton disabled={true}/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

    React.findDOMNode(toggleButton).className.should.include("disabled");
  });

  it('should add any additional props to the input', function(){
    let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton name="name"/>),
    toggleInput = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

    assert.equal(toggleInput.props.name, "name");
  });

  it('should not toggle when disableToggleOnClick is passed', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton disableToggleOnClick={true}/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

    TestUtils.Simulate.click(toggleButton);

    React.findDOMNode(toggleButton).className.should.not.include("checked");
  });
});
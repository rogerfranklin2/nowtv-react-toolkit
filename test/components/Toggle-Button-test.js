const assert = require('assert'),
      React = require('react'),
      ReactDOM = require('react-dom'),
      should = require('chai').should(),
      TestUtils = require('react-addons-test-utils'),
      NowToggleButton = require('../../src/components/ToggleButton/ToggleButton.react');

describe('ToggleButton component', function() {
  it('should display a toggle button element', function() {
      let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton />),
          toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button')

      should.exist(toggleButton);
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
          toggleLabel = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-label off')

      should.exist(toggleLabel);
      assert.equal(toggleLabel.textContent, 'custom off');
  });

  it('should display a toggle label element with custom on text', function() {
      let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton onText='custom on'/>),
          toggleLabel = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-label on')

      should.exist(toggleLabel)
      assert.equal(toggleLabel.textContent, 'custom on');
  });

  it('should toggle component state on click event', function() {
      const renderedComponent = TestUtils.renderIntoDocument(
          <NowToggleButton/>
      );

      const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

      TestUtils.Simulate.click(toggleButton);

      ReactDOM.findDOMNode(toggleButton).className.should.include("checked");
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

      ReactDOM.findDOMNode(toggleButton).className.should.include("checked");
      myVar.should.be.true;
  });

  it('should check the input if checked is passed', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton checked={true}/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');
    const input = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

    ReactDOM.findDOMNode(toggleButton).className.should.include("checked");
    ReactDOM.findDOMNode(input)['checked'].should.be.true;
  });

  it('should add additional classes to the toggle button', function(){
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton classes="extraClass"/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-toggle-container');

    ReactDOM.findDOMNode(toggleButton).className.should.include("extraClass");
  });

  it('should not add addtional classes to the input', function(){
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton classes="extraClass"/>
    );

    const input = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

    ReactDOM.findDOMNode(input).className.should.not.include("extraClass");
  });

  it('should disabled the input is disabled is passed', function(){
    const renderedComponent = TestUtils.renderIntoDocument(
      <NowToggleButton disabled={true}/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

    ReactDOM.findDOMNode(toggleButton).className.should.include("disabled");
  });

  it('should add any additional props to the input', function(){
    let renderedComponent = TestUtils.renderIntoDocument(<NowToggleButton name="name"/>),
    toggleInput = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');

    assert.equal(toggleInput.name, "name");
  });

  it('should not toggle when disableToggleOnClick is passed but should still call the onClick handler', () => {
    let myVar = false;
    let setTrue = function() {
      myVar = true;
    };

    const renderedComponent = TestUtils.renderIntoDocument(
        <NowToggleButton disableToggleOnClick={true} onClick={setTrue}/>
    );

    const toggleButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'toggle-button');

    TestUtils.Simulate.click(toggleButton);

    ReactDOM.findDOMNode(toggleButton).className.should.not.include("checked");
    myVar.should.be.true;
  });
});

/* eslint-disable max-len */
import React from 'react';
import { expect, should } from 'chai';
import { shallow, mount, describeWithDOM } from 'enzyme';
import { input } from 'react-dom';

import NowToggleButton from './ToggleButton.react';

describeWithDOM('ToggleButton component', () => {
  it('should display a toggle button element', () => {
    const renderedComponent = shallow(<NowToggleButton />);
    const toggleButton = renderedComponent.find('.toggle-button');

    expect(toggleButton).to.exist;
  });

  it('should not display an off toggle label by default', () => {
    const renderedComponent = shallow(<NowToggleButton />);
    const toggleLabel = renderedComponent.find('.off');

    expect(toggleLabel.length).to.eq(0);
  });

  it('should not display an on toggle label by default', () => {
    const renderedComponent = shallow(<NowToggleButton />);
    const toggleLabel = renderedComponent.find('.on');

    expect(toggleLabel.length).to.equal(0);
  });

  it('should display a toggle label element with custom off text', () => {
    const renderedComponent = shallow(<NowToggleButton offText="custom off"/>);
    const toggleLabel = renderedComponent.find('.off');

    expect(toggleLabel.text()).to.eq('custom off');
  });

  it('should display a toggle label element with custom on text', () => {
    const renderedComponent = shallow(<NowToggleButton onText="custom one"/>);
    const toggleLabel = renderedComponent.find('.on');

    expect(toggleLabel.text()).to.eq('custom one');
  });

  it('should toggle component state on click event', () => {
    const renderedComponent = shallow(
      <NowToggleButton/>
      );

    const toggleButton = renderedComponent.find('.toggle-button');

    toggleButton.simulate('click');
    renderedComponent.update();

    const clickedButton = renderedComponent.find('.toggle-button');
    expect(clickedButton.props().className).to.include('checked');
  });

  it('should toggle component state on click event and call props click event', () => {
    let myVar = false;
    const setTrue = () => { myVar = true; };
    const renderedComponent = shallow(
      <NowToggleButton onClick={setTrue()}/>
      );

    const toggleButton = renderedComponent.find('.toggle-button');

    toggleButton.simulate('click');
    renderedComponent.update();

    const clickedButton = renderedComponent.find('.toggle-button');

    expect(clickedButton.props().className).to.contain('checked');
    expect(myVar).to.be.true;
  });

  it('should check the input if checked is passed', () => {
    const renderedComponent = shallow(
      <NowToggleButton checked={true} blah="Baz"/>
      );

    const toggleButton = renderedComponent.find('.toggle-button');
    const domInput = renderedComponent.find('input');

    expect(toggleButton.props().className).to.include('checked');
    expect(domInput.props().defaultChecked).to.eq(true);
  });

  it('should add additional classes to the toggle button', () => {
    const renderedComponent = shallow(
      <NowToggleButton classes="extraClass"/>
      );

    const toggleButton = renderedComponent.find('.now-toggle-container');

    expect(toggleButton.props().className).to.include('extraClass');
  });

  it('should not add addtional classes to the input', () => {
    const renderedComponent = shallow(
      <NowToggleButton classes="extraClass"/>
      );
    const domInput = renderedComponent.find('input');
    expect(domInput.props().className).to.be.undefined;
  });

  it('should disabled the input is disabled is passed', () => {
    const renderedComponent = shallow(
      <NowToggleButton disabled={true}/>
      );

    const toggleButton = renderedComponent.find('.toggle-button');

    expect(toggleButton.props().className).to.include('disabled');
  });

  it('should add any additional props to the input', () => {
    const renderedComponent = shallow(<NowToggleButton name="name"/>);
    const toggleInput = renderedComponent.find('input');

    expect(toggleInput.props().name).to.eq('name');
  });

  it('should not toggle when disableToggleOnClick is passed but should still call the onClick handler', () => {
    let myVar = false;
    const setTrue = () => { myVar = true; };

    const renderedComponent = shallow(
      <NowToggleButton disableToggleOnClick={true} onClick={setTrue}/>
      );

    const toggleButton = renderedComponent.find('.toggle-button');

    toggleButton.simulate('click');
    renderedComponent.update();

    const clickedButton = renderedComponent.find('.toggle-button');

    expect(clickedButton.props().className).to.not.contain('checked');
    expect(myVar).to.eq(true);
  });
});

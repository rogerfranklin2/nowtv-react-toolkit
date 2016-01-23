import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowRadioButton from '../../src/components/RadioButton/RadioButton.react';

describe('RadioButton component', () => {
  it('should display a radioButton element', () => {
    const renderedComponent = shallow(<NowRadioButton/>);
    const component = renderedComponent.find('.now-radio-button');
    assert.ok(component);
  });

  it('should add addtional classes to the label', () => {
    const radioButtonWithClass = shallow(<NowRadioButton classes="extraClass"/>);
    const renderedRadioButton = radioButtonWithClass.find('label');

    assert.equal(renderedRadioButton.props().className, 'now-radio-button extraClass');
  });

  it('should not add addtional classes to the input', () => {
    const radioButtonWithClass = shallow(<NowRadioButton classes="extraClass"/>);
    const renderedRadioButton = radioButtonWithClass.find('input');

    assert.equal(renderedRadioButton.props().className, null);
  });

  it('should add any additional props to the input', () => {
    const radioButtonWithAdditionalProp = shallow(<NowRadioButton name="name"/>);
    const renderedRadioButton = radioButtonWithAdditionalProp.find('input');

    assert.equal(renderedRadioButton.props().name, 'name');
  });

  it('should not add any additional props to the label', () => {
    const radioButtonWithAdditionalProp = shallow(<NowRadioButton name="name"/>);
    const renderedRadioButton = radioButtonWithAdditionalProp.find('label');

    assert.equal(renderedRadioButton.props().name, null);
  });

  it('should render its children', () => {
    const radioButtonWithChildren = shallow(<NowRadioButton>RadioButton 1</NowRadioButton>);
    const renderedRadioButton = radioButtonWithChildren.find('.now-radio-button');

    assert.equal((renderedRadioButton).text(), 'RadioButton 1');
  });

  it('should check the radioButton if it is passed as a prop', () => {
    const radioButtonWithProp = shallow(
      <NowRadioButton checked={true}>RadioButton 1</NowRadioButton>
      );
    const renderedRadioButtonLabel = radioButtonWithProp.find('label');
    const renderedRadioButtonInput = radioButtonWithProp.find('input');

    assert.equal(renderedRadioButtonLabel.props().className, 'now-radio-button checked');
    assert.equal(renderedRadioButtonInput.props().checked, true);
  });

  it('should add disabled class when disabled is passed as a prop', () => {
    const radioButtonWithDisabled = shallow(<NowRadioButton disabled />);
    const disabledRadioButtonLabel = radioButtonWithDisabled.find('label');
    const disabledRadioButtonInput = radioButtonWithDisabled.find('input');

    assert.equal(disabledRadioButtonLabel.props().className, 'now-radio-button disabled');
    assert.equal(disabledRadioButtonInput.props().disabled, true);
  });
});

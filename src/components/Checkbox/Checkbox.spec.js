import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowCheckbox from './Checkbox.react';

describe('Checkbox component', () => {
  it('should display a checkbox element', () => {
    const renderedComponent = shallow(<NowCheckbox/>);
    const component = renderedComponent.find('.now-checkbox');
    assert.ok(component);
  });


  it('should add addtional classes to the label', () => {
    const checkboxWithClass = shallow(<NowCheckbox classes="extraClass"/>);
    const renderedCheckbox = checkboxWithClass.find('label');

    assert.equal(renderedCheckbox.props().className, null);
  });


  it('should not add addtional classes to the input', () => {
    const checkboxWithClass = shallow(<NowCheckbox classes="extraClass"/>);
    const renderedCheckbox = checkboxWithClass.find('input');

    assert.equal(renderedCheckbox.props().className, 'now-checkbox extraClass');
  });

  it('should add any additional props to the input', () => {
    const checkboxWithAdditionalProp = shallow(<NowCheckbox name="name"/>);
    const renderedCheckbox = checkboxWithAdditionalProp.find('input');

    assert.equal(renderedCheckbox.props().name, 'name');
  });

  it('should not add any additional props to the label', () => {
    const checkboxWithAdditionalProp = shallow(<NowCheckbox name="name"/>);
    const renderedCheckbox = checkboxWithAdditionalProp.find('label');

    assert.equal(renderedCheckbox.props().name, null);
  });


  it('should render its children', () => {
    const checkboxWithChildren = shallow(<NowCheckbox>Checkbox 1</NowCheckbox>);
    const renderedCheckbox = checkboxWithChildren.find('label');

    assert.equal(renderedCheckbox.text(), 'Checkbox 1');
  });

  it('should check the checkbox if it is passed as a prop', () => {
    const checkboxWithProp = shallow(<NowCheckbox checked={true}>Checkbox 1</NowCheckbox>);
    const renderedCheckboxInput = checkboxWithProp.find('input');

    assert.equal(renderedCheckboxInput.props().checked, true);
  });

  it('should add disabled class when disabled is passed as a prop', () => {
    const checkboxWithDisabled = shallow(<NowCheckbox disabled />);
    const disabledCheckboxInput = checkboxWithDisabled.find('input');

    assert.equal(disabledCheckboxInput.props().className, 'now-checkbox disabled');
    assert.equal(disabledCheckboxInput.props().disabled, true);
  });
});

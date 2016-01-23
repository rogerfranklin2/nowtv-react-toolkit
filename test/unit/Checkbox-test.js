import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowCheckbox from '../../src/components/Checkbox/Checkbox.react';

describe('Checkbox component', function () {
  it('should display a checkbox element', function () {
    const renderedComponent = shallow(<NowCheckbox/>);
    const component = renderedComponent.find('.now-checkbox');
    assert.ok(component);
  });

  it('should add addtional classes to the label', function () {
    const checkboxWithClass = shallow(<NowCheckbox classes="extraClass"/>);
    const renderedCheckbox = checkboxWithClass.find('label');

    assert.equal(renderedCheckbox.props().className, 'now-checkbox extraClass');
  });

  it('should not add addtional classes to the input', function () {
    const checkboxWithClass = shallow(<NowCheckbox classes="extraClass"/>);
    const renderedCheckbox = checkboxWithClass.find('input');

    assert.equal(renderedCheckbox.props().className, null);
  });

  it('should add any additional props to the input', function () {
    const checkboxWithAdditionalProp = shallow(<NowCheckbox name="name"/>);
    const renderedCheckbox = checkboxWithAdditionalProp.find('input');

    assert.equal(renderedCheckbox.props().name, 'name');
  });

  it('should not add any additional props to the label', function () {
    const checkboxWithAdditionalProp = shallow(<NowCheckbox name="name"/>);
    const renderedCheckbox = checkboxWithAdditionalProp.find('label');

    assert.equal(renderedCheckbox.props().name, null);
  });

  it('should render its children', function () {
    const checkboxWithChildren = shallow(<NowCheckbox>Checkbox 1</NowCheckbox>);
    const renderedCheckbox = checkboxWithChildren.find('.now-checkbox');

    assert.equal(renderedCheckbox.text(), 'Checkbox 1');
  });

  it('should check the checkbox if it is passed as a prop', function () {
    const checkboxWithProp = shallow(<NowCheckbox checked={true}>Checkbox 1</NowCheckbox>);
    const renderedCheckboxLabel = checkboxWithProp.find('label');
    const renderedCheckboxInput = checkboxWithProp.find('input');

    assert.equal(renderedCheckboxLabel.props().className, 'now-checkbox checked');
    assert.equal(renderedCheckboxInput.props().checked, true);
  });

  it('should add disabled class when disabled is passed as a prop', function () {
    const checkboxWithDisabled = shallow(<NowCheckbox disabled />);
    const disabledCheckboxLabel = checkboxWithDisabled.find('label');
    const disabledCheckboxInput = checkboxWithDisabled.find('input');

    assert.equal(disabledCheckboxLabel.props().className, 'now-checkbox disabled');
    assert.equal(disabledCheckboxInput.props().disabled, true);
  });
});

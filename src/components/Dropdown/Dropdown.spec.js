import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowDropdown from './Dropdown.react';

describe('Dropdown component', () => {
  it('should display a dropdown element', () => {
    const renderedComponent = shallow(<NowDropdown/>);

    const component = renderedComponent.find('.now-dropdown');
    assert.ok(component);
  });

  it('should add addtional classes', () => {
    const dropdownWithClass = shallow(<NowDropdown classes="extraClass"/>);

    const renderedDropdown = dropdownWithClass.find('.extraClass');
    assert.ok(renderedDropdown);
  });

  it('should add any addtionalitional props', () => {
    const dropdownWithAdditionalProp = shallow(<NowDropdown id="anId"/>);

    const renderedDropdown = dropdownWithAdditionalProp.find('.now-dropdown');
    assert.equal(renderedDropdown.props().id, 'anId');
  });

  it('should render its children', () => {
    const dropdownWithChildren = shallow(
      <NowDropdown>
        <option value="value">Value</option>
        <option value="value2">Value2</option>
      </NowDropdown>
    );

    const renderedDropdown = dropdownWithChildren.find('.now-dropdown');
    assert.equal(renderedDropdown.props().children.length, 2);
  });
});

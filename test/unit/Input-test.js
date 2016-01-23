import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowInput from '../../src/components/Input/Input.react';

describe('Input component', () => {
  it('should display a form field', () => {
    const renderedComponent = shallow(<NowInput />);
    assert.ok(renderedComponent.find('.now-input'));
  });

  it('should add addtional classes', () => {
    const inputWithClass = shallow(<NowInput classes="extraClass"/>);

    const renderedInput = inputWithClass.find('.extraClass');
    assert.ok(renderedInput);
  });

  it('should add any addtionalitional props', () => {
    const inputWithAdditionalId = shallow(<NowInput id="additinalId"/>);

    const renderedInput = inputWithAdditionalId.find('.now-input');
    assert.equal(renderedInput.props().id, 'additinalId');
  });
});

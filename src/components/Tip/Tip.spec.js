import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowTip from './Tip.react';

describe('Tip component', () => {
  it('should render a tip', () => {
    const renderedComponent = shallow(<NowTip/>);
    const component = renderedComponent.find('.now-tip');
    assert.ok(component);
  });

  it('should contain some content', () => {
    const renderedComponent = shallow(<NowTip>this is tip content</NowTip>);
    const component = renderedComponent.find('p');
    assert.equal(component.text(), 'this is tip content');
  });

  describe('arrow position', () => {
    describe('top centre', () => {
      it('should render correct arrow', () => {
        const renderedComponent = shallow(
          <NowTip arrow-position="top-centre">this is tip content</NowTip>
        );
        const component = renderedComponent.find('.arrow-top-centre');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', () => {
        const renderedComponent = shallow(
          <NowTip arrow-position="top-centre">this is tip content</NowTip>
        );
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'top-centre');
      });
    });

    describe('bottom right', () => {
      it('should render correct arrow', () => {
        const renderedComponent = shallow(
          <NowTip arrow-position="bottom-right">this is tip content</NowTip>
        );
        const component = renderedComponent.find('.arrow-bottom-right');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', () => {
        const renderedComponent = shallow(
          <NowTip arrow-position="bottom-right">this is tip content</NowTip>
        );
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'bottom-right');
      });
    });

    describe('undefined', () => {
      it('should render correct arrow top centre', () => {
        const renderedComponent = shallow(<NowTip>this is tip content</NowTip>);
        const component = renderedComponent.find('.arrow-top-centre');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', () => {
        const renderedComponent = shallow(<NowTip>this is tip content</NowTip>);
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'top-centre');
      });
    });

    describe('unsupported', () => {
      it('should render correct arrow top centre', () => {
        const renderedComponent = shallow(
          <NowTip arrow-position="bottom-left">this is tip content</NowTip>
        );
        const component = renderedComponent.find('.arrow-top-centre');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', () => {
        const renderedComponent = shallow(
          <NowTip arrow-position="bottom-left">this is tip content</NowTip>
        );
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'top-centre');
      });
    });
  });
});

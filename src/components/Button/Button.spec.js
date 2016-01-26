import { expect, sinon, catchConsoleErrors } from '../../../test/test.helper.js';
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.react';

describe('Button component', () => {
  const errors = catchConsoleErrors();

  context('should render', () => {
    it('when props are as expected', () => {
      const mockProps = {
        color: 'red'
      };

      const component = shallow(<Button {...mockProps} >I am a button</Button>);
      const button = component.find('button');

      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(button.text()).to.equal('I am a button');
      expect(button.props().className).to.equal('now-button_primary_red');
      expect(button.props().disabled).to.equal(undefined);
    });

    it('disabled when disabled prop is passed', () => {
      const mockProps = {
        color: 'red'
      };

      const component = shallow(<Button {...mockProps} disabled>I am a button</Button>);
      const button = component.find('button');

      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(button.props().disabled).to.equal(true);
    });

    it('onClick is passed', () => {
      let clicked = false;
      const mockProps = {
        color: 'red'
      };
      function onClick(e) {
        clicked = true;
      }
      const component = shallow(<Button {...mockProps} onClick={onClick}>I am a button</Button>);
      const button = component.find('button');

      button.simulate('click');
      component.update();

      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(clicked).to.equal(true);
    });

    it('as a button', () => {
      const mockProps = {
        color: 'red'
      };
      const component = shallow(<Button {...mockProps} >I am a button</Button>);
      const buttons = component.find('button');

      expect(buttons.length).to.equal(1);
      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(buttons.first().props().href).to.be.undefined;
    });

    it('as a link', () => {
      const mockProps = {
        color: 'red',
        href: 'http://www.google.com'
      };
      const component = shallow(<Button {...mockProps} >I am a link</Button>);
      const buttons = component.find('a');

      expect(buttons.length).to.equal(1);
      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(buttons.first().props().href).to.equal('http://www.google.com');
    });
  });

  context('should not error', () => {
    it('when props are omitted', () => {
      const component = shallow(<Button >I am a button</Button>);
      const button = component.find('button');

      expect(errors().length).to.equal(0, errors().join('\n'));
    });
  });

  context('should error', () => {
    it('when the colour prop is invalid', () => {
      const mockProps = {
        color: 'invalid-color'
      };

      const component = shallow(<Button {...mockProps} >I am a button</Button>);
      const button = component.find('button');

      expect(errors().length).to.equal(1, errors().join('\n'));
      expect(button.text()).to.equal('I am a button');
      expect(button.props().className).to.equal('now-button_primary_invalid-color');
    });

    it('when the type prop is invalid', () => {
      const mockProps = {
        type: 'invalid-type',
        color: 'red'
      };

      const component = shallow(<Button {...mockProps} >I am a button</Button>);
      const button = component.find('button');

      expect(errors().length).to.equal(1, errors().join('\n'));
      expect(button.text()).to.equal('I am a button');
      expect(button.props().className).to.equal('now-button_invalid-type_red');
    });
  });
});

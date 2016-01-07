import { React, ReactDOM, TestUtils, expect, sinon, catchConsoleErrors } from '../../../test/test.helper.js';
import Button from './Button.react';

describe('Button component', () => {
  const errors = catchConsoleErrors();

  context('should render', () => {
    it('when props are as expected', () => {
      const mockProps = {
        color: 'red'
      };

      const component = TestUtils.renderIntoDocument(<Button {...mockProps} >I am a button</Button>);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(button.textContent).to.equal('I am a button');
      expect(button.className).to.equal('now-button_primary_red');
      expect(button.disabled).to.equal(false);
    });

    it('disabled when disabled prop is passed', () => {
      const mockProps = {
        color: 'red'
      };

      const component = TestUtils.renderIntoDocument(<Button {...mockProps} disabled>I am a button</Button>);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(button.textContent).to.equal('I am a button');
      expect(button.className).to.equal('now-button_primary_red');
      expect(button.disabled).to.equal(true);
    });

    it('onClick is passed', () => {
      const mockProps = {
        color: 'red'
      };
      function onClick(e) {
        e.currentTarget.innerHTML = 'woah, i was clicked!';
      }
      const component = TestUtils.renderIntoDocument(<Button {...mockProps} onClick={onClick}>I am a button</Button>);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

      TestUtils.Simulate.click(button);

      expect(errors().length).to.equal(0, errors().join('\n'));
      expect(button.textContent).to.equal('woah, i was clicked!');
      expect(button.className).to.equal('now-button_primary_red');
    });
  });

  context('should error', () => {
    it('when props are omitted', () => {
      const component = TestUtils.renderIntoDocument(<Button >I am a button</Button>);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

      expect(errors().length).to.equal(1, errors().join('\n'));
    });

    it('when the colour prop is invalid', () => {
      const mockProps = {
        color: 'invalid-color'
      };

      const component = TestUtils.renderIntoDocument(<Button {...mockProps} >I am a button</Button>);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

      expect(errors().length).to.equal(1, errors().join('\n'));
      expect(button.textContent).to.equal('I am a button');
      expect(button.className).to.equal('now-button_primary_invalid-color');
    });

    it('when the type prop is invalid', () => {
      const mockProps = {
        type: 'invalid-type',
        color: 'red'
      };

      const component = TestUtils.renderIntoDocument(<Button {...mockProps} >I am a button</Button>);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

      expect(errors().length).to.equal(1, errors().join('\n'));
      expect(button.textContent).to.equal('I am a button');
      expect(button.className).to.equal('now-button_invalid-type_red');
    });
  });
});

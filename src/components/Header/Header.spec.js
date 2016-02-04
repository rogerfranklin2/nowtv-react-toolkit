import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import Header from './Header.react.js';

describe('Header component', () => {
  describe('when all props are provided', () => {
    let renderedComponent;

    const props = {
      heading: 'A Header',
      subheading: 'A Subheading',
      icon: 'icon-content-passes',
      classes: 'class',
      colour: 'green'
    };

    before(() => {
      renderedComponent = shallow(<Header {...props}/>);
    });

    it('should render a level one heading with the value of the heading prop', () => {
      const heading = renderedComponent.find('.header-heading');
      assert.ok(heading.node.type === 'h1', 'did not render a level one heading');
      assert.equal(heading.text(), props.heading, 'did not render text from heading prop');
    });

    it('should render a subheading with the value of the subheading prop', () => {
      const subheading = renderedComponent.find('.header-subheading');
      assert.ok(subheading.node.type === 'p', 'did not render a paragraph subheading');
      assert.equal(subheading.text(), props.subheading, 'did not render text from subheading prop');
    });

    it('should apply the colour specified in the colour prop', () => {
      const className = renderedComponent.props().className;
      assert.ok(className.includes(props.colour), 'did not apply colour specified in colour prop');
    });

    it('should apply the classes defined by the classes prop', () => {
      const className = renderedComponent.props().className;
      assert.ok(className.includes(props.classes), 'did not apply classes');
    });

    it('should apply the correct icon class specified in the prop', () => {
      const icon = renderedComponent.find('.header-circle-icon');
      const className = icon.props().className;
      assert(className.includes(props.icon), 'it did not apply the correct icon class');
    });
  });

  describe('when props are not provided', () => {
    let renderedComponent;
    const defaultColour = 'blue';

    before(() => {
      renderedComponent = shallow(<Header />);
    });

    it('should not render a level one heading', () => {
      const heading = renderedComponent.find('.header-heading');
      assert(heading.length === 0, 'it rendered a heading');
    });

    it('should not render a subheading', () => {
      const heading = renderedComponent.find('.header-subheading');
      assert(heading.length === 0, 'it rendered a subheading');
    });

    it('should apply the default colour', () => {
      const className = renderedComponent.props().className;
      assert.ok(className.includes(defaultColour), 'did not apply the default colour');
    });

    it('should not apply any additional classes', () => {
      const className = renderedComponent.props().className;
      assert.equal(className, `header_${defaultColour}`, 'it added additional classes');
    });

    it('should apply the default icon', () => {
      const icon = renderedComponent.find('.header-circle-icon');
      const className = icon.props().className;
      assert(className.includes('confirm'), 'it did not add default icon class');
    });
  });
});

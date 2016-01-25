import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AccordionItem from './AccordionItem.react';

describe('Accordion item component', () => {
  it('should display an AccordionItem', () => {
    const renderedComponent = shallow(<AccordionItem />);
    const accordionItem = renderedComponent.find('.now-accordion-item');

    expect(accordionItem).to.exist;
  });

  it('should have a title and content', () => {
    const renderedComponent = shallow(
      <AccordionItem title="My accordion item">
        <p>Wooo exciting</p>
      </AccordionItem>
    );

    const accordionTitle = renderedComponent.find('.accordion-item-title');
    const accordionContent = renderedComponent.find('.accordion-item-content');

    expect(accordionTitle.text()).to.equal('My accordion item');
    expect(accordionContent.text()).to.equal('Wooo exciting');
  });

  it('tracks accordion as closing when opened', () => {
    const renderedComponent = shallow(
      <AccordionItem title="My accordion item" isOpen={true}>
        <p>Wooo exciting</p>
      </AccordionItem>
    );

    const accordionTitle = renderedComponent.find('.accordion-item-title');

    expect(accordionTitle.props()['data-tracking-context']).to.equal('closing');
  });

  it('tracks accordion as opening when closed', () => {
    const renderedComponent = shallow(
      <AccordionItem title="My accordion item" isOpen={false}>
        <p>Wooo exciting</p>
      </AccordionItem>
    );

    const accordionTitle = renderedComponent.find('.accordion-item-title');

    expect(accordionTitle.props()['data-tracking-context']).to.equal('opening');
  });
});

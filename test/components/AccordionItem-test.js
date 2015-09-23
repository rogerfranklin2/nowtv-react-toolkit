import { expect } from 'chai';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
import AccordionItem from '../../src/components/Accordion/AccordionItem.react';

describe('Accordion item component', () => {
  it('should display an AccordionItem', () => {
    const renderedComponent = TestUtils.renderIntoDocument(<AccordionItem />);
    const accordionItem = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-accordion-item');
    const element = React.findDOMNode(accordionItem);

    expect(element).to.exist;
  });

  it('should have a title and content', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
      <AccordionItem title="My accordion item">
        <p>Wooo exciting</p>       
      </AccordionItem>
    );

    const accordionItem = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-accordion-item');
    const accordionTitle = TestUtils.findRenderedDOMComponentWithClass(accordionItem, 'accordion-item-title');
    const accordionContent = TestUtils.findRenderedDOMComponentWithClass(accordionItem, 'accordion-item-content');
    const title = React.findDOMNode(accordionTitle);
    const content = React.findDOMNode(accordionContent);

    expect(title.textContent).to.equal('My accordion item');
    expect(content.textContent).to.equal('Wooo exciting');
  });
});

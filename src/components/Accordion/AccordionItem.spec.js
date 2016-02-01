import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, describeWithDOM } from 'enzyme';

import AccordionItem, { AccordionItemContent } from './AccordionItem.react';

describeWithDOM('Accordion item component', () => {
  it('should display an AccordionItem', () => {
    const renderedComponent = shallow(<AccordionItem />);
    const accordionItem = renderedComponent.find('.now-accordion-item');

    expect(accordionItem).to.exist;
  });

  it('should have a title and content', () => {
    const renderedComponent = mount(
      <AccordionItem title="My accordion item">
        <p>Wooo exciting</p>
      </AccordionItem>
    );

    const accordionTitle = renderedComponent.find('.accordion-item-title');
    const accordionContent = renderedComponent.find('.accordion-item-content');

    expect(accordionTitle.text()).to.equal('My accordion item');
    expect(accordionContent.text()).to.equal('Wooo exciting');
  });

  it('should have accept component titles', () => {
    const title = <h3>My accordion item</h3>;
    const renderedComponent = mount(
      <AccordionItem title={title}>
        <p>Wooo exciting</p>
      </AccordionItem>
    );

    const accordionTitle = renderedComponent.find('.accordion-item-title');

    expect(accordionTitle.text()).to.equal('My accordion item');
  });

  it('should call handleVisibility when the title is clicked', () => {
    const handleVisibility = sinon.spy();
    const renderedComponent = mount(
      <AccordionItem
        title="My accordion item"
        handleVisiblity={handleVisibility}>
        <p>Wooo exciting</p>
      </AccordionItem>
    );

    renderedComponent.find('.accordion-item-title').simulate('click');
    expect(handleVisibility.calledOnce).to.eql(true);
  });

  it('should set the maxHeight to 0 when not open', () => {
    const renderedComponent = mount(
      <AccordionItem
        title="My accordion item">
        <p>Wooo exciting</p>
      </AccordionItem>
    );
    const content = renderedComponent.find('.accordion-item-content');
    expect(content.props().style.maxHeight).to.eql(0);
  });

  it('should set the maxHeight to a default of 500 when open', () => {
    const renderedComponent = mount(
      <AccordionItem
        title="My accordion item"
        isOpen={true}>
        <p>Wooo exciting</p>
      </AccordionItem>
    );
    // cant test for actual scrollHeight as JSDOM doesn't support it
    const content = renderedComponent.find('.accordion-item-content');
    expect(content.props().style.maxHeight).to.eql(500);
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

  describe('Extended Accordion', () => {
    const title = <h3>My accordion item</h3>;

    it('should have a footer', () => {
      const renderedComponent = mount(
        <AccordionItem type="extended" title={title}>
          <p>Wooo exciting</p>
        </AccordionItem>
      );

      const accordionFooter = renderedComponent.find('.now-accordion__item-footer');
      expect(accordionFooter).to.have.length(1);
    });

    it('should call handleVisibility when the footer is clicked', () => {
      const handleVisibility = sinon.spy();
      const renderedComponent = mount(
        <AccordionItem
          type="extended"
          title={title}
          handleVisiblity={handleVisibility}>
          <p>Wooo exciting</p>
        </AccordionItem>
      );

      renderedComponent.find('.now-accordion__item-footer').simulate('click');
      expect(handleVisibility.calledOnce).to.eql(true);
    });
  });
});

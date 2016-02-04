import { expect } from 'chai';
import React from 'react';
import Accordion from './Accordion.react';
import AccordionItem from './AccordionItem.react';
import { describeWithDOM, mount, shallow } from 'enzyme';

describeWithDOM('Accordion component', () => {
  it('should display an accordion', () => {
    const renderedComponent = shallow(<Accordion />);
    const accordion = renderedComponent.find('.now-accordion');

    expect(accordion).to.exist;
  });

  it('should render accordion items', () => {
    const renderedComponent = shallow(
      <Accordion>
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
      </Accordion>
    );

    const accordion = renderedComponent.find('.now-accordion');
    const accordionItems = accordion.find(AccordionItem);

    expect(accordionItems.length).to.equal(3);
  });

  it('should add "now-accordion--standard" class to root element', () => {
    const renderedComponent = shallow(
      <Accordion>
        <AccordionItem />
      </Accordion>
    );

    const accordion = renderedComponent.find('.now-accordion');

    expect(accordion.props().className).to.contain('now-accordion--standard');
  });

  it('should add "now-accordion--extended" class to root element when type is "extended"', () => {
    const renderedComponent = shallow(
      <Accordion type="extended">
        <AccordionItem />
      </Accordion>
    );

    const accordion = renderedComponent.find('.now-accordion');

    expect(accordion.props().className).to.contain('now-accordion--extended');
  });

  it('should set prop type + id on all children', () => {
    const renderedComponent = shallow(
      <Accordion type="extended" id="top-id">
        <AccordionItem id="id0" />
        <AccordionItem id="id1" />
        <AccordionItem id="id2" />
        <AccordionItem id="id3" />
      </Accordion>
    );
    expect(renderedComponent.props().id).to.eql(`top-id`);
    renderedComponent.props().children.forEach((child, index) => {
      expect(child.props.type).to.eql('extended');
      expect(child.props.id).to.eql(`id${index}`);
    });
  });

  it('should open an accordion item when clicked on title', () => {
    const renderedComponent = mount(
      <Accordion>
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
      </Accordion>
    );

    let accordionItems = renderedComponent.find(AccordionItem);
    let accordionItem = accordionItems.first();


    accordionItem.find('.accordion-item-title').simulate('click');
    renderedComponent.update();

    accordionItems = renderedComponent.find(AccordionItem);
    accordionItem = accordionItems.first();
    const accordionItem2 = accordionItems.at(1);
    const accordionItem3 = accordionItems.at(2);

    expect(accordionItem.props().classes).to.include('visible');
    expect(accordionItem2.props().classes).to.be.undefined;
    expect(accordionItem3.props().classes).to.be.undefined;
  });

  it('should close an open accordion item when it is clicked on the title again', () => {
    const renderedComponent = mount(
      <Accordion>
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
      </Accordion>
    );

    const accordionItems = renderedComponent.find(AccordionItem);
    const accordionItem = accordionItems.first();
    const accordionItem2 = accordionItems.at(1);
    const accordionItem3 = accordionItems.at(2);

    accordionItem.find('.accordion-item-title').simulate('click');
    renderedComponent.update();

    expect(accordionItem.props().classes).to.include('visible');
    expect(accordionItem2.props().classes).to.be.undefined;
    expect(accordionItem3.props().classes).to.be.undefined;

    accordionItem.find('.accordion-item-title').simulate('click');
    renderedComponent.update();

    expect(accordionItem.props().classes).to.be.undefined;
    expect(accordionItem2.props().classes).to.be.undefined;
    expect(accordionItem3.props().classes).to.be.undefined;
  });
});

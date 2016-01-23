import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowNotification from '../../src/components/Notification/Notification.react';

describe('Notification component', () => {
  it('should render a notification', () => {
    const renderedComponent = shallow(<NowNotification/>);
    const component = renderedComponent.find('.now-notification');
    assert.ok(component);
  });

  it('should have a title', () => {
    const renderedComponent = shallow(<NowNotification title="A Title"/>);
    const component = renderedComponent.find('h6');
    assert.equal(component.text(), 'A Title');
  });

  it('should have some content', () => {
    const renderedComponent = shallow(<NowNotification>Some Content</NowNotification>);
    const component = renderedComponent.find('p');
    assert.equal(component.text(), 'Some Content');
  });

  it('should have the right colour background', () => {
    const renderedComponent = shallow(<NowNotification classes="green">Some Content</NowNotification>);
    const component = renderedComponent.find('.now-notification');
    assert.include(component.props().className, 'green');
  });

  it('should override the icon if the icon class is passed in', () => {
    const renderedComponent = shallow(<NowNotification classes="green warning-icon">Some Content</NowNotification>);
    const component = renderedComponent.find('.now-notification');
    assert.include(component.props().className, 'warning-icon');
  });

  it('should close the notification', () => {
    const renderedComponent = shallow(<NowNotification>Close me, close me</NowNotification>);
    const closeButton = renderedComponent.find('.close');

    assert.equal(renderedComponent.find('.now-notification').length, 1);

    closeButton.simulate('click');
    renderedComponent.update();

    assert.equal(renderedComponent.find('.now-notification').length, 0);
  });

  it('should not has a close icon if not dismissable', () => {
    const renderedComponent = shallow(<NowNotification dismissable={false}>Cant close me!</NowNotification>);
    const component = renderedComponent.find('.now-notification');

    assert.equal(component.find('.close').length, 0);
  });
});

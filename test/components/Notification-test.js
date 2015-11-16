var assert = require('chai').assert;
var should = require('chai').should();
var React;
var ReactDOM;
var TestUtils;

describe('Notification component', function(){
  var NowNotification;

  beforeEach(function() {
    React = require('react');
    ReactDOM = require('react-dom');
    TestUtils = require('react-addons-test-utils');
    NowNotification = require('../../src/components/Notification/Notification.react');
  });

  it('should render a notification', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification/>);
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification');
    should.exist(component);
  });

  it('should have a title', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification title='A Title'></NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'h3');
    assert.equal(ReactDOM.findDOMNode(component).textContent, "A Title");
  });

  it('should have some content', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification>Some Content</NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
    assert.equal(ReactDOM.findDOMNode(component).textContent, "Some Content");
  });

  it('should have the right colour background', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification classes='green'>Some Content</NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification');
    assert.include(ReactDOM.findDOMNode(component).className, "green");
  });

  it('should override the icon if the icon class is passed in', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification classes='green warning-icon'>Some Content</NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification');
    assert.include(ReactDOM.findDOMNode(component).className, "warning-icon");
  });

  it('should close the notification', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification>Close me, close me</NowNotification>);
    var closeButton = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'close');

    TestUtils.Simulate.click(closeButton);

    let err;
    try {
      TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification')
    } catch (e) {
      err = e;
    }

    assert.isDefined(err);
  });

  it('should not has a close icon if not dismissable', function() {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification dismissable={false}>Cant close me!</NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification');

    let err;
    try {
      TestUtils.findRenderedDOMComponentWithClass(component, 'close');
    } catch (e) {
      err = e;
    }

    assert.isDefined(err);
  });
});

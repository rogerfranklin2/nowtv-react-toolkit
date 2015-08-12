var React = require('react/addons');
var assert = require('chai').assert;
var should = require('chai').should();
var NowNotification = require('../../src/components/Notification/Notification.react');
var TestUtils = React.addons.TestUtils;

describe('Notification component', function(){
  it('should render a notification', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification/>);
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification');
    should.exist(component);
  });

  it('should have a title', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification title='A Title'></NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'h3');
    assert.equal(React.findDOMNode(component).textContent, "A Title");
  });

  it('should have some content', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification>Some Content</NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
    assert.equal(React.findDOMNode(component).textContent, "Some Content");
  });

  it('should have the right colour background', function () {
    var renderedComponent = TestUtils.renderIntoDocument(<NowNotification classes='green'>Some Content</NowNotification>);
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-notification');
    assert.include(React.findDOMNode(component).className, "green");
  });

});

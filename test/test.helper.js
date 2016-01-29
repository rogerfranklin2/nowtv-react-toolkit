import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TestUtils from 'react-addons-test-utils';
import chaiAsPromised from 'chai-as-promised';

const { assert, expect } = chai;
chai.should();
chai.expect();
chai.use(sinonChai);
chai.use(chaiAsPromised);

function shallowRenderComponent(Component, mockProps) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Component {...mockProps} />);
  return shallowRenderer.getRenderOutput();
}

function catchConsoleErrors() {
  let savedErrors = [];
  beforeEach(() => {
    savedErrors = [];

    sinon.stub(console, 'error', () => {
      const stack = new Error(Array.prototype.slice.call(arguments).join(' ')).stack;
      return savedErrors.push(arguments);
    });
  });

  afterEach(() => {
    console.error.restore();   // eslint-disable-line
  });

  return () => savedErrors;
}

export {
  React,
  ReactDOM,
  chai,
  sinon,
  sinonChai,
  assert,
  expect,
  TestUtils,
  shallowRenderComponent,
  catchConsoleErrors,
};

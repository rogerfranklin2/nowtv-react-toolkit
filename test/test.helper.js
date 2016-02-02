import sinon from 'sinon';

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
  catchConsoleErrors
};

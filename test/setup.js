var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body><div id="todo"></div></body></html>');
global.window = global.document.parentWindow;
global.navigator = {
    userAgent: 'node.js'
};

import React from 'react';
import { Link } from 'react-router';
import DocsApp from './js/components/App.react.js';
import AccordionWithButtons from './js/bugs/AccordionWithButtons.react.js';

class App extends React.Component {
  render() {
    return (<div>{ this.props.children }</div>);
  }
}
class Bugs extends React.Component {
  render() {
    return (
      <div>
        <h2>Bugs</h2>
        <ul>
          <li><Link to='/bugs/accordionWithButtons'>{'AccordionWithButtons'}</Link></li>
        </ul>
      </div>
    );

  }
}

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: DocsApp
    },
    { path: '/bugs',
      component: Bugs
    },
    { path: '/bugs/accordionWithButtons',
      component: AccordionWithButtons
    }
  ]
};

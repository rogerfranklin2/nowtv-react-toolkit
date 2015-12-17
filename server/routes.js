import React from 'react';
import { Link } from 'react-router';
import Accordion from '../src/components/Accordion/Accordion.react';
import Button from '../src/components/Button/Button.react';

const components = ['Accordion', 'Button']

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>NowTV Toolkit</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/Accordion',
      component: Accordion
    },
    {
      path: '/Button',
      component: Button
    }
  ]
};

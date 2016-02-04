import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class AccordionItemContent extends React.Component {

  constructor() {
    super();
    this.state = {
      maxHeight: 0
    };
  }

  getMaxHeight() {
    return ReactDOM.findDOMNode(this.refs.me).scrollHeight || 500;
  }

  componentDidMount() {
    this.setState({ maxHeight: this.getMaxHeight() });
  }

  render() {
    return (
      <div ref="me"
           className="accordion-item-content now-accordion__content--transition"
           style={{ maxHeight: this.props.isOpen ? this.state.maxHeight : 0 }}
           >
        {this.props.children}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string,
    handleVisiblity: PropTypes.func,
    isOpen: PropTypes.bool,
    title: PropTypes.node,
    type: PropTypes.oneOf(['extended', 'standard'])
  };

  static defaultProps = {
    type: 'standard'
  };

  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('now-accordion-item', [this.props.classes]);
    const context = this.props.isOpen ? 'closing' : 'opening';

    return (
      <div className={classes} id={this.props.id}>
        <a href="#"
           className="accordion-item-title"
           data-tracking-context={context}
           onClick={this.props.handleVisiblity}>
          {this.props.title}
        </a>

        <AccordionItemContent isOpen={this.props.isOpen}>
          {this.props.children}
        </AccordionItemContent>

        {this.props.type === 'extended' ?
          <a href="#" className="now-accordion__item-footer"
            onClick={this.props.handleVisiblity} />
          : null
        }
      </div>
    );
  }
}

export default AccordionItem;

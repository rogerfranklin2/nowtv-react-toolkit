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
    // todo: deprecate classes
    const {
      classes, className: cName, isOpen, handleVisiblity, title, children, type,
      ...props
    } = this.props;
    const className = classNames('now-accordion-item', [classes, cName]);
    const context = isOpen ? 'closing' : 'opening';

    return (
      <div className={className} {...props}>
        <a href="#"
           className="accordion-item-title"
           data-tracking-context={context}
           onClick={handleVisiblity}>
          {title}
        </a>

        <AccordionItemContent isOpen={isOpen}>
          {children}
        </AccordionItemContent>

        {type === 'extended' ?
          <a href="#" className="now-accordion__item-footer"
            onClick={handleVisiblity} />
          : null
        }
      </div>
    );
  }
}

export default AccordionItem;

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class AccordionItemContent extends React.Component {
  getMaxHeight() {
    return ReactDOM.findDOMNode(this.refs.me).scrollHeight || 500;
  }

  render() {
    const style = { maxHeight: this.props.isOpen ? (this.props.maxHeight || 500) : 0 };
    return (
      <div ref="me"
           className="accordion-item-content now-accordion__content--transition"
           style={style}>
        {this.props.children}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('now-accordion-item', [this.props.classes]);
    const context = this.props.isOpen ? 'closing' : 'opening';

    return (
      <div className={classes}>
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

AccordionItem.propTypes = {
  children: React.PropTypes.node,
  classes: React.PropTypes.string,
  handleVisiblity: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
  maxHeight: React.PropTypes.number,
  title: React.PropTypes.string,
  type: React.PropTypes.oneOf(['extended', 'standard'])
};
AccordionItem.defaultProps = {
  type: 'standard'
};

export default AccordionItem;

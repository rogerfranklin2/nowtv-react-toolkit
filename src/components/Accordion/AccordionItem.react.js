import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames('now-accordion-item', [this.props.classes]);

    return (
      <div className={classes} onClick={ this.props.setVisible }>
        <span className="accordion-item-title">{this.props.title}</span>

        <div className="accordion-item-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default AccordionItem;

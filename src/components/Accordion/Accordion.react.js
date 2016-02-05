import React from 'react';
import classNames from 'classnames';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openItem: null
    };
  }

  _itemClicked(id) {
    let openItem = id;

    if (id === this.state.openItem) {
      openItem = null;
    }

    this.setState({
      openItem
    });
  }

  render() {
    // todo: deprecate classes
    const { classes, className: cName, type, children, ...props } = this.props;
    const className = classNames('now-accordion', [classes, cName], `now-accordion--${type}`);

    const newChildren = React.Children.map(children, (child, index) => {
      const onItemClicked = (event) => {
        event.preventDefault();
        this._itemClicked(index);
      };

      const childProps = {
        handleVisiblity: onItemClicked,
        isOpen: this.state.openItem === index,
        type
      };

      if (index === this.state.openItem) {
        childProps.classes = 'visible';
      }

      return React.cloneElement(child, { ...childProps });
    });

    return (
      <div className={className} {...props}>
        {newChildren}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: React.PropTypes.node,
  classes: React.PropTypes.string,
  type: React.PropTypes.oneOf(['standard', 'extended'])
};

Accordion.defaultProps = {
  type: 'standard'
};
export default Accordion;

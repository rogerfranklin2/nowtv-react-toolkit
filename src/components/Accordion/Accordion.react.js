import React from 'react';
import classNames from 'classnames';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openItem: null
    };
  }

  _itemClicked(id, maxHeight) {
    let openItem = id;

    if (id === this.state.openItem) {
      openItem = null;
    }

    this.setState({
      openItem,
      maxHeight
    });
  }

  render() {
    const classes = classNames('now-accordion', [this.props.classes]);

    const newChildren = React.Children.map(this.props.children, (child, index) => {
      const onItemClicked = (event) => {
        event.preventDefault();
        const maxHeight = event.target.nextElementSibling.scrollHeight;
        this._itemClicked(index, maxHeight);
      };

      const newProps = {
        handleVisiblity: onItemClicked,
        isOpen: this.state.openItem === index,
        maxHeight: this.state.openItem === index ? this.state.maxHeight : 0
      };

      if (index === this.state.openItem) {
        newProps.classes = 'visible';
      }

      return React.cloneElement(child, { ...newProps });
    });

    return (
      <div className={classes}>
        {newChildren}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: React.PropTypes.node,
  classes: React.PropTypes.string
};

export default Accordion;

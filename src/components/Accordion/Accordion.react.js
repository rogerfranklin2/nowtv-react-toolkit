import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openItem: null
    }
  }

  render() {
    const classes = classNames('now-accordion', [this.props.classes]);

    const newChildren = React.Children.map(this.props.children, (child, index) => {
      const onItemClicked = () => { this._itemClicked(index); };

      let newProps = {
        setVisible: onItemClicked,
        isOpen: this.state.openItem === index
      };

      if (index === this.state.openItem) {
        newProps['classes'] = 'visible';
      }

      return React.cloneElement(child, { ...newProps });
    });

    return (
      <div className={classes}>
        { newChildren }
      </div>
    )
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
}

export default Accordion;

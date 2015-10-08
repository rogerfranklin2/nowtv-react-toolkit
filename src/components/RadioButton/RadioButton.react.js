import React from 'react';
import classNames from 'classnames';

class RadioButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { checked: (this.props.checked || false) };
        this.toggleChecked = this.toggleChecked.bind(this);
    }

    toggleChecked() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        var classes = [this.props.classes];

        if(this.state.checked) {
            classes.push("checked");
        }

        if(this.props.disabled) {
            classes.push("disabled");
        }

        const inputProps = Object.assign({}, this.props);
        delete inputProps.children;

        return (
          <label className={classNames('now-radio-button', classes)}>
              <input
                onChange={this.toggleChecked}
                checked={this.state.checked}
                type="radio"
                {...inputProps}
              />
              {this.props.children}
          </label>
       );
    }
}

export default RadioButton;

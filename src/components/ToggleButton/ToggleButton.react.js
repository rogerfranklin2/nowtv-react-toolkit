import React from 'react';
import classNames from 'classnames';

class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { checked: (this.props.checked || false) };
        this.toggleChecked = this.toggleChecked.bind(this);
        this.offText = this.props.offText || 'Off';
        this.onText = this.props.onText || 'On';
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

        return (
            <div className={classNames('now-toggle-container', classes)}>
                <span className='toggle-label off'>{this.offText}</span>
                <label className='now-toggle-button'>
                    <input
                        onClick={this.toggleChecked}
                        checked={this.state.checked}
                        type="button"
                        {...this.props}
                    />
                </label>
                <span className='toggle-label on'>{this.onText}</span>
            </div>
       );
    }
}

export default ToggleButton;
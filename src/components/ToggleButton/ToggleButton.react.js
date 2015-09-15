import React from 'react';
import classNames from 'classnames';

class ToggleButton extends React.Component {
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

        return (
            <div className={classNames('now-toggle-container', classes)}>
              { this.props.offText ? <span className='toggle-label off'>{this.props.offText}</span> : null }
                <label className='now-toggle-button'>
                    <input
                        onClick={this.toggleChecked}
                        checked={this.state.checked}
                        type="button"
                        {...this.props}
                    />
                </label>
              { this.props.onText ? <span className='toggle-label on'>{this.props.onText}</span> : null }
            </div>
       );
    }
}

export default ToggleButton;
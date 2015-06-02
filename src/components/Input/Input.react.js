import React from 'react';

class Input extends React.Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this);

        this.state = {
            requiredError: false
        };
	}

	handleChange(event) {
		console.log("HANDLE ", event.target.value.length == 0)
		if (event.target.value.length == 0){
    		this.setState({requiredError: true});	
		}
	}

    render() {
    	var required;
    	if (this.state.requiredError){
    		required = <span>This element is required</span>
    	}

        return (
        	<span>
        	<label for={this.props.name}>{this.props.name}</label>
            <input id={this.props.name} name={this.props.name} onChange={this.handleChange} placeholder={this.props.placeholder} className={"testInput"}></input>
            { required }
            </span>
        )
    }
}

export default Input;
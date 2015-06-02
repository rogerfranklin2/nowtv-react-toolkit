import React from 'react';

class Input extends React.Component {
	constructor(props){
		super(props)
	}

    render() {
        return (
        	<span>
				<label for={this.props.name}>{this.props.name}</label>
				<input id={this.props.name} name={this.props.name}  className={"testInput"}/>
            </span>
        )
    }
}

export default Input;
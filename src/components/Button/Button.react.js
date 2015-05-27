import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

let styles = {
	nowButton: {
		borderRadius: '20px',
		backgroundColor: 'white',
		border: '1px solid white',
		padding: '10px 35px',
		color: 'black',
		margin: '10px',
		outline: '0'
	},
	inverted: {
	  	backgroundColor: 'transparent',
	  	color: 'white'
	},
	green: {
		backgroundColor: 'green',
		color: 'green'
	}
}

function buildStyles(propStyles){
	let x = {}
	let stylesArray = propStyles.split(" ");
	assign(x, styles.nowButton)
	for(var i = 0; i < stylesArray.length; i++){
		assign(x, styles[stylesArray[i]]);	
	}
	return x;

}


class Button extends React.Component {
    render() {
        return (
            <button style={buildStyles(this.props.styles)} className={classNames('now-button', this.props.type)}>{this.props.children}</button>
        )
    }
}

export default Button;

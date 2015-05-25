import React from 'react';

let styles = {
	borderRadius: '5px',
	backgroundColor: 'Green',
	border: 0,
    padding: 0,
	color: 'black'
}



class Button extends React.Component {
    render() {
        return (
            <button style={styles} className={"now-button"}>{this.props.children}</button>
        )
    }
}

export default Button;

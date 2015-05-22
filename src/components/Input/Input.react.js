import React from 'react';

let styles = {
	borderRadius: '5px',
	border: 0,
    padding: 0,
	color: 'black'
}

class Input extends React.Component {
    render() {
        return (
            <input style={styles} className={"testInput"}></input>
        )
    }
}

export default Input;
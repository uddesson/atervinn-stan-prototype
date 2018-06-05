import React from 'react';

function Button(props) {
    return(
        <button
            onClick={props.onClick}
            value={props.value}
        >
            {props.content}
        </button>
    )
}

export default Button;
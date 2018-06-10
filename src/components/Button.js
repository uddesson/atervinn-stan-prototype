import React from 'react';

function Button(props) {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
            value={props.value}
            type={props.type}
        >
            {props.icon ? props.icon : null}
            <p className={props.type === 'nav' ? 'margin-small' : ''}>
                {props.content}
            </p>
        </button>
    );
}

export default Button;

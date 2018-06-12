import React from 'react';

function Button(props) {
    return (
        <React.Fragment>
            <button
                className={props.className}
                onClick={props.onClick}
                value={props.value}
                type={props.type}
            >
                {props.icon ? props.icon : null}
                <p
                    className={`pointer-none ${
                        props.type === 'nav' ? 'margin-small' : 'margin-none'
                    }`}
                >
                    {props.content}
                </p>
            </button>
        </React.Fragment>
    );
}

export default Button;

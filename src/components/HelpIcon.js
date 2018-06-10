import React from 'react';

function HelpIcon(props) {
    return (
        <svg
            className={`nav-icon ${props.helpView ? 'active--stroke' : ''}`}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            stroke="#FFFFFF"
        >
            <path
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.84,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"
            />
            <line
                strokeWidth="2"
                strokeMiterlimit="10"
                x1="30"
                y1="43"
                x2="30"
                y2="47"
            />
            <path
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M24,21c0-3,2-5,8-5c5,0,8,3,8,7s-6,7-6,7s-4,2-4,8v1"
            />
        </svg>
    );
}

export default HelpIcon;

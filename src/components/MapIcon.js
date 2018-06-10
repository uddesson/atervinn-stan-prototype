import React from 'react';

function MapIcon(props) {
    return (
        <svg
            className={`nav-icon ${props.mapView ? 'active--stroke' : ''}`}
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
            <g>
                <circle
                    fill="none"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    cx="32"
                    cy="19.001"
                    r="4"
                />
                <path
                    fill="none"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    d="M45,21.023C44.968,13.276,39.181,7,32,7s-13,6.276-13,14.023C19,31.046,31.979,47,31.979,47S45.043,31.046,45,21.023z"
                />
            </g>
            <polyline
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
                points="21,37 12,37 1,57 32,57 63,57 52,37 43,37"
            />
        </svg>
    );
}

export default MapIcon;

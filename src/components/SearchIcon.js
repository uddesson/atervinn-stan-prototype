import React from 'react';

function SearchIcon(props) {
    return (
        <svg
            className={`nav-icon ${
                props.searchView ? 'active--stroke active--stroke-width' : ''
            }`}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            stroke="#F1F5F8"
            strokeWidth="2"
        >
            <g>
                <circle
                    fill="none"
                    strokeMiterlimit="10"
                    cx="21"
                    cy="21"
                    r="20"
                />
                <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="35"
                    y1="35"
                    x2="41"
                    y2="41"
                />

                <rect
                    x="46.257"
                    y="37.065"
                    transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 121.9178 50.5)"
                    fill="none"
                    strokeMiterlimit="10"
                    width="8.485"
                    height="26.87"
                />
            </g>
        </svg>
    );
}

export default SearchIcon;

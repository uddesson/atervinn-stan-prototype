import React from 'react';

function Marker(props) {
    return (
        <div
            style={{ height: '10px', width: '10px', backgroundColor: 'red' }}
            lat={props.lat}
            lng={props.lng}
        >
            {props.text}
        </div>
    );
}

export default Marker;

import React from 'react';

function CurrentMarker(props) {
    return (
        <div lat={props.lat} lng={props.lng}>
            <div className="pin-colorful" />
            <div className="pulse-colorful" />
        </div>
    );
}

export default CurrentMarker;

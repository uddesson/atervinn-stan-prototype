import React from 'react';

function CurrentMarker(props) {
    return (
        <div lat={props.lat} lng={props.lng}>
            <div className="pin" />
            <div className="pulse" />
        </div>
    );
}

export default CurrentMarker;

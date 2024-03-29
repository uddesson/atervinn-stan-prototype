import React from 'react';
import RecyclingIcon from '../icons/icons8-recycling-96.png';
import GrillIcon from '../icons/icons8-grill-filled-80.png';

function Marker(props) {
    return (
        <div
            className="marker marker--normal marker--fixed"
            lat={props.lat}
            lng={props.lng}
        >
            <img
                className="marker__icon marker__icon--normal"
                src={
                    props.type === 'allmän återvinning'
                        ? RecyclingIcon
                        : GrillIcon
                }
                alt={
                    props.type === 'allmän återvinning'
                        ? 'allmän återvinning'
                        : 'återvinning för engångsgrill'
                }
            />
        </div>
    );
}

export default Marker;

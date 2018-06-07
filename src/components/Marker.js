import React from 'react';
import RecyclingIcon from '../icons/icons8-recycling-80.png';
import GrillIcon from '../icons/icons8-grill-80.png';

function Marker(props) {
    return (
        <div
            style={{
                width: '30px',
                height: '30px',
                backgroundColor: '#F8FAFC',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '0.25rem',
            }}
            lat={props.lat}
            lng={props.lng}
        >
            <img
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
                style={{ height: '20px', width: '20px', alignSelf: 'center' }}
            />
        </div>
    );
}

export default Marker;

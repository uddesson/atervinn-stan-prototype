import React from 'react';
import HeartIcon from '../icons/basic_elaboration_message_heart.svg';

function Placeholder() {
    return (
        <div className="flex">
            <p className="margin-none">
            Återvinn skräpet efter din snabblunch, fikapaus eller picknick.
            Snabbt och smidigt – mitt i stan!
            </p>
            <img className="align-baseline" src={HeartIcon} alt="Ett hjärta i en pratbubbla" />
        </div>
    );
}

export default Placeholder;

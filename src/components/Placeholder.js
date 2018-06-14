import React from 'react';
import HeartIcon from '../icons/basic_elaboration_message_heart.svg';

function Placeholder() {
    return (
        <React.Fragment>
            Återvinn skräpet efter din snabblunch, fikapaus eller picknick.
            Snabbt och smidigt – mitt i stan!
            <img
                className="margin-top-large center block"
                src={HeartIcon}
                alt="Ett hjärta i en pratbubbla"
            />
        </React.Fragment>
    );
}

export default Placeholder;

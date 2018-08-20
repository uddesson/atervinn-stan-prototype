import React from 'react';
import HeartIcon from '../icons/basic_elaboration_message_heart.svg';

function Placeholder(props) {
    return (
        <React.Fragment>
            Osäker på var eller hur ditt skräp ska återvinnas?
            Använd sökfunktionen. Du kan också gå direkt till
                <span class="link" data-txt="karta" onClick={props.toggleView}>
                    <span> </span>närmsta station.
                </span>
            <img
                className="margin-top-large center block"
                src={HeartIcon}
                alt="Ett hjärta i en pratbubbla"
            />
        </React.Fragment>
    );
}

export default Placeholder;

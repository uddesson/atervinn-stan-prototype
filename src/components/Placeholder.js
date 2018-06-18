import React from 'react';
import HeartIcon from '../icons/basic_elaboration_message_heart.svg';

function Placeholder(props) {
    return (
        <React.Fragment>
            Osäker på hur du ska återvinna ditt skräp?
            Använd sökfunktionen eller <span class="bold" data-txt="karta" onClick={props.toggleView}>hitta närmsta station.</span>
            <img
                className="margin-top-large center block"
                src={HeartIcon}
                alt="Ett hjärta i en pratbubbla"
            />
        </React.Fragment>
    );
}

export default Placeholder;

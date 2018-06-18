import React from 'react';
import Placeholder from './Placeholder';
import NoResultsIcon from '../icons/basic_elaboration_message_sad.svg';

function SearchOutput(props) {
    return (
        <p className="text-green-dark">
            {props.nameOfObject !== '' && (
                <span className="outlined capitalize">
                    {props.nameOfObject}
                </span>
            )}

            {props.textAttatchment}

            {props.placeholder && <Placeholder toggleView={props.toggleView} />}

            <span className="success">{props.sortedAs}</span>
            <span className="warning">{props.noResults}</span>

            {props.noResults && (
                <img
                    src={NoResultsIcon}
                    alt="En ledsen smiley i en pratbubbla"
                    className="icon-medium margin-top-large block center"
                />
            )}
        </p>
    );
}

export default SearchOutput;

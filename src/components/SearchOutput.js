
import React from 'react';
import Placeholder from './Placeholder';
import miscIcon from '../icons/icons8-disposal-80.png';

function SearchOutput(props){
    return(
        <p className="text-green-dark">
            {props.nameOfObject !== '' &&
                <span className="outlined capitalize">
                    {props.nameOfObject}
                </span>
            }

            {props.textAttatchment}

            {props.placeholder &&
                <Placeholder />
            }

            <span className="success">{props.sortedAs}</span>
            <span className="warning">{props.noResults}</span>

            {props.noResults &&
                <img src={miscIcon} alt="Papperskorg" className="block center"></img>
            }
        </p>
    );
}

export default SearchOutput;

import React from 'react';

function AutoCompleteResults(props){
    return(
        <span className="capitalize">
            <ul>
                {props.autoCompleteResults.map(function(item){
                    return(
                        <li
                            onClick={props.handleAutoCompleteSearch}
                            key={item}
                            value={item}
                            data-txt={item}
                            className="text-green-dark"
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </span>
    )
}

export default AutoCompleteResults;
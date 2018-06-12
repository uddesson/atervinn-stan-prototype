
import React from 'react';
import SearchInput from './SearchInput';

function HeroHeader(props){
    return(
        <div className="hero-header">

            <h1>Vad vill du återvinna?</h1>

            <SearchInput
                handleInput={props.handleInput}
                searchWord={props.searchWord}
                handleSearch={props.handleSearch}
            />
        </div>
    );
}

export default HeroHeader;
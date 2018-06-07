import React, { Component } from 'react';

class SearchInput extends Component {

    render(){
        return(
            <form onSubmit={this.props.handleSearch}>
                <label htmlFor="search" className="hidden">Vad vill du återvinna?</label>
                <br/>
                <input  name="search"
                        type="text"
                        placeholder="T.ex plastbestick"
                        onChange={this.props.setSeachWordToState}
                        value={this.props.searchWord}
                >
                </input>
                <input type="submit" value="Sök"></input>
            </form>
        )
    }
}

export default SearchInput;
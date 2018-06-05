import React, { Component } from 'react';

class SearchInput extends Component {

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.props.handleSearch}>
                <label htmlFor="search">Vad vill du slänga?</label>
                    <br/>
                    <input  name="search"
                            type="text"
                            placeholder="T.ex plastbestick"
                            onChange={this.props.setSeachWordToState}
                            value={this.props.searchWord}
                    >
                    </input>
                    <input type="submit"></input>
                </form>

                <div>
                    {/* XX kan källsorteras som plast på en av våra källsorteringsmoduler. */}
                </div>
            </React.Fragment>
        )
    }
}

export default SearchInput;
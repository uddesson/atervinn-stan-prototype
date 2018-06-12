import React, { Component } from 'react';

class SearchInput extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch} role="search">
                <label htmlFor="search" className="hidden">
                    Vad vill du återvinna?
                </label>
                <br />
                <input
                    name="search"
                    type="text"
                    placeholder="T.ex plastbestick"
                    onChange={this.props.handleInput}
                    value={this.props.searchWord}
                    autoComplete="off"
                />
                <input type="submit" value="Sök" className="margin-none" />
            </form>
        );
    }
}

export default SearchInput;

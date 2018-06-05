import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button';

class SearchView extends React.Component {

    handleSearch = (event) => {
        event.preventDefault();
        /* Check for results and return them here,
        also needs error and default output */
        console.log('Search output..')
    }

    render(){
        return (
            <div className="container">
                <SearchInput
                    setSeachWordToState={this.props.setSeachWordToState}
                    searchWord={this.props.searchWord}
                    handleSearch={this.handleSearch}
                />

                <Button
                    onClick={this.props.toggleView}
                    value={'karta'}
                    content={'Hitta närmsta'}
                />

            </div>
        )
    }
}

export default SearchView;
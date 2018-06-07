import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import searchData from '../searchData.json';

class SearchView extends React.Component {


    compatibleResults = searchData.filter(function(result){
        return result.compatible === true;
    })

    handleSearch = (event) => {
        event.preventDefault();
        /* Check for results and return them here,
        also needs error and default output */
        console.log('Search output..')
        console.log(searchData)
        console.log(this.compatibleResults)

        this.checkForMatch(this.props.searchWord);
    }

    checkForMatch = (searchWord) => {
        let matches = searchData.filter(function(match){
            return match.name === searchWord;
        })

        console.log(matches)
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
                <div></div>

            </div>
        )
    }
}

export default SearchView;
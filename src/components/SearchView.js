import React from 'react';
import HeroHeader from './HeroHeader';
import searchData from '../searchData.json';
import ShowNearestButton from './ShowNearestButton';
import AutoCompleteResults from './AutoCompleteResults';
import SearchOutput from './SearchOutput';

class SearchView extends React.Component {

    state = {
        searchWord: '',
        searchOutput: {
            name: '',
            sortedAs: '',
            noResults: ''
        },
        autoCompleteResults: '',
        deactivateSearch: false,
        showPlaceholder: true
    }

    handleInput = (event) => {
        let searchWord = event.target.value;
        this.setState({ searchWord, searchOutput: {name: '', sortedAs: ''}});

        let searchWordChars = searchWord.split('');

        if(searchWordChars.length >= 3){
            this.autoComplete(searchWord);
        }

        else if(searchWordChars.length === 0){
            this.setState({showPlaceholder: true, autoCompleteResults: []})
        }

        else {
            this.setState({
                searchOutput: { name: '', sortedAs: '', noResults: '' },
                autoCompleteResults: [],
                deactivateSearch: false,
                showPlaceholder: false
            })
        }
    };


    autoComplete = (searchWord) => {
        let formattedSearchWord = searchWord.toLowerCase();

        let data = searchData.map(function(singleData){
            return singleData.name;
        })

        let autoCompleteResults = [];

        for (let name of data){
            if(name.indexOf(formattedSearchWord) !== -1){
                autoCompleteResults.push(name);
            }
        }

        this.setState({autoCompleteResults, deactivateSearch: true})

        if(this.state.autoCompleteResults.length === 0){
            this.setState({deactivateSearch: false})
        }
    }

    handleSearch = (event) => {
        event.preventDefault();
        if(this.state.deactivateSearch === true){
            // Stop the search-button from doing anything
            return;
        } else {
            // Actually search
            this.checkForMatch(this.state.searchWord);
        }
    }

    handleAutoCompleteSearch = (event) => {
        event.preventDefault();
        let searchWord = event.target.dataset.txt;
        this.checkForMatch(searchWord)

        // Reset the output of autocomplete
        this.setState({autoCompleteResults: []})
    }

    checkForMatch = (searchWord) => {

        let matches = searchData.filter(function(match) {
            return match.name === searchWord;
        })

        if(matches.length === 0) {
            this.setState({
                searchOutput: {
                    name: '',
                    noResults: `Vi hittar inga resultat som matchar din sökning.
                                Testa något annat!`
                },
                showPlaceholder: false,
                autoCompleteResults: []
            })
        }

        else {
            let searchResults = matches.map(function(result){
                if(result.compatible === false){
                    return {
                        name: result.name,
                        sortedAs: result.sortedAs + '.',
                        text: ` kan inte återvinnas på en station i stan.
                                Det ska sorteras på en återvinningscentral som `,
                        compatible: result.compatible
                    }
                }
                else {
                    return {
                        name: result.name,
                        sortedAs: result.sortedAs + '.',
                        text: ` kan återvinnas i stan. Sorteras som `,
                        compatible: result.compatible
                    }
                }
            })

            searchResults = searchResults[0];

            this.setState({
                searchOutput: {
                    name: searchResults.name,
                    sortedAs: searchResults.sortedAs,
                    text: searchResults.text
                },
                showActionButton: searchResults.compatible
            })
        }
    }

    render(){
        return (
            <React.Fragment>

                <ShowNearestButton
                    toggleView={this.props.toggleView}
                />

                <HeroHeader
                    handleInput={this.handleInput}
                    searchWord={this.state.searchWord}
                    handleSearch={this.handleSearch}
                />

                {this.state.autoCompleteResults &&
                    <AutoCompleteResults
                        handleAutoCompleteSearch={this.handleAutoCompleteSearch}
                        autoCompleteResults={this.state.autoCompleteResults}
                    />
                }

                <div className="container-inner center line-height-extra">
                    <SearchOutput
                        nameOfObject={this.state.searchOutput.name}
                        textAttatchment={this.state.searchOutput.text}
                        placeholder={this.state.showPlaceholder}
                        sortedAs={this.state.searchOutput.sortedAs}
                        noResults={this.state.searchOutput.noResults}
                    />
                </div>

            </React.Fragment>
        )
    }
}

export default SearchView;
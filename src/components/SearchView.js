import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import searchData from '../searchData.json';

class SearchView extends React.Component {

    state = {
        searchOutput: {
            name: '',
            sortedAs: '',
            noResults: ''
        },
        showActionButton: true,
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.checkForMatch(this.props.searchWord);
    }

    checkForMatch = (searchWord) => {
        let matches = searchData.filter(function(match) {
            return match.name === searchWord;
        })

        if(matches.length === 0) {
            this.setState({
                searchOutput: { noResults: 'Vi hittar inga resultat som matchar din sökning.'},
                showActionButton: false
            })
        }

        else {
            let searchResults = matches.map(function(result){
                if(result.compatible === false){
                    return {
                        name: result.name,
                        sortedAs: result.sortedAs,
                        text: ' kan du inte återvinna i stan. Sorteras på en återvinningscentral som ',
                        compatible: result.compatible
                    }
                }
                else if(result.compatible === true){
                    return {
                        name: result.name,
                        sortedAs: result.sortedAs,
                        text: ' kan du återvinna i stan. Sorteras som ',
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
            <div className="container center">
                <h2>Vad vill du återvinna?</h2>

                <SearchInput
                    setSeachWordToState={this.props.setSeachWordToState}
                    searchWord={this.props.searchWord}
                    handleSearch={this.handleSearch}
                />

                
                <p>
                    <span className="red">{this.state.searchOutput.name}</span>
                    {this.state.searchOutput.text}
                    <span className="green">{this.state.searchOutput.sortedAs}</span>
                    <span className="pink">{this.state.searchOutput.noResults}</span>
                </p>

                {this.state.showActionButton &&
                    <Button
                        onClick={this.props.toggleView}
                        value={'karta'}
                        content={'Hitta närmsta'}
                        className={'btn__call-to-action'}
                    />
                }
            </div>
        )
    }
}

export default SearchView;
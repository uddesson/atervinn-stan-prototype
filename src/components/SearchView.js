import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import searchData from '../searchData.json';

class SearchView extends React.Component {

    state = {
        searchOutput: '',
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
                searchOutput: 'Vi hittar inga resultat som matchar din sökning',
                showActionButton: false
            })
        }

        else {
            let searchOutput = matches.map(function(result){
                if(result.compatible === false){
                    return {
                        text: result.name + ' ska sorteras som ' + result.sortedAs + ' på en återvinningscentral. Läs mer under "Hjälp".',
                        compatible: result.compatible
                    }
                }
                else if(result.compatible === true){
                    return {
                        text: result.name + ' kan du återvinna i stan. Sorteras som ' + result.sortedAs + '.',
                        compatible: result.compatible
                    }
                }
            })

            searchOutput = searchOutput[0];

            this.setState({
                searchOutput: searchOutput.text,
                showActionButton: searchOutput.compatible
            })
        }
    }


    render(){
        return (
            <div className="container">
                <h2>Vad vill du återvinna?</h2>

                <SearchInput
                    setSeachWordToState={this.props.setSeachWordToState}
                    searchWord={this.props.searchWord}
                    handleSearch={this.handleSearch}
                />

                <p>
                    {this.state.searchOutput}
                </p>

                {this.state.showActionButton &&
                    <Button
                        onClick={this.props.toggleView}
                        value={'karta'}
                        content={'Hitta närmsta ställe'}
                        className={'btn__call-to-action'}
                    />
                 }

            </div>
        )
    }
}

export default SearchView;
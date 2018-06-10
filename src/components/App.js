import React, { Component } from 'react';
import '../App.css';
import GoogleMap from './GoogleMap';
import Nav from './Nav.js';
import HelpView from './HelpView';
import SearchView from './SearchView';
import Header from './Header';
import locations from '../locations.json';

class App extends Component {
    state = {
        mapView: false,
        searchView: true,
        helpView: false,
        keyWord: 'sök', // Default, home screen
        searchWord: '',
    };

    // TODO: Refactor
    toggleView = event => {
        let keyWord = event.target.value;
        this.setState({ keyWord });

        if (keyWord === 'karta') {
            this.setState({
                mapView: true,
                helpView: false,
                searchView: false,
            });
        }
        if (keyWord === 'hjälp') {
            this.setState({
                helpView: true,
                mapView: false,
                searchView: false,
            });
        }
        if (keyWord === 'sök') {
            this.setState({
                searchView: true,
                mapView: false,
                helpView: false,
            });
        }
    };

    // Is called from SearchView -> SearchInput
    setSeachWordToState = event => {
        let searchWord = event.target.value;
        this.setState({ searchWord });
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                {this.state.searchView && (
                    <SearchView
                        setSeachWordToState={this.setSeachWordToState}
                        searchWord={this.state.searchWord}
                        /* Send along toggleview here as well,
                        because there is a "Hitta närmsta" button in SearchView,
                        that is set to toggle mapView */
                        toggleView={this.toggleView}
                    />
                )}

                {this.state.mapView && <GoogleMap locations={locations} />}
                {this.state.helpView && <HelpView />}

                <Nav
                    toggleView={this.toggleView}
                    searchView={this.state.searchView}
                    mapView={this.state.mapView}
                    helpView={this.state.helpView}
                />
            </React.Fragment>
        );
    }
}

export default App;

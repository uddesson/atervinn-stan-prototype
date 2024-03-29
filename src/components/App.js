import React, { Component } from 'react';
import '../App.css';
import GoogleMap from './GoogleMap';
import Nav from './Nav.js';
import HelpView from './HelpView';
import SearchView from './SearchView';
import Header from './Header';
import locations from '../locations.json';
import RandomLocations from '../currentLocations.json';

class App extends Component {
    state = {
        mapView: false,
        searchView: true,
        helpView: false,
        keyWord: 'sök' // Default, home screen
    };

    toggleView = event => {
        let keyWord = event.target.value;
        let alternativeKey = event.target.dataset.txt;

        this.setState({ keyWord });

        if (keyWord === 'karta' || alternativeKey === 'karta') {
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


    render() {

        const currentPosition = RandomLocations[Math.floor(Math.random() * RandomLocations.length)];

        return (
            <div className="container-outer">
                {this.state.searchView && (
                    <SearchView
                        /* Send along toggleview here as well,
                        because there is a "Hitta närmsta" button in SearchView,
                        that is set to toggle mapView */
                        toggleView={this.toggleView}
                    />
                )}

                {this.state.mapView &&
                    <GoogleMap
                        locations={locations}
                        currentPosition={currentPosition}
                    />
                }

                {this.state.helpView &&
                    <React.Fragment>
                        <Header />
                        <HelpView />
                    </React.Fragment>
                }

                <Nav
                    toggleView={this.toggleView}
                    searchView={this.state.searchView}
                    mapView={this.state.mapView}
                    helpView={this.state.helpView}
                />

            </div>
        );
    }
}

export default App;

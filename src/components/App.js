import React, { Component } from 'react';
import '../App.css';
import GoogleMap from './GoogleMap';
import Nav from './Nav.js';
import HelpView from './HelpView';
import SearchView from './SearchView';


class App extends Component {
  state = {
    showMap: false,
    showSearch: true,
    showHelp: false,
    view: 'sök' // Default, home screen
  }

  toggleView = (event) => {
    let view = event.target.value;
    this.setState({view})

    if(view === 'karta'){
      this.setState({showMap: true, showHelp: false, showSearch: false})
    }
    if(view === 'hjälp'){
      this.setState({showHelp: true, showMap: false, showSearch: false})
    }
    if(view === 'sök'){
      this.setState({showSearch: true, showMap: false, showHelp: false})
    }

  }

  // Is called from SearchView -> SearchInput
  setSeachWordToState = (event) => {
    let searchWord = event.target.value;
    this.setState({searchWord});
  }

  render() {
    return (
      <React.Fragment>

        {this.state.searchView &&
          <SearchView
            setSeachWordToState={this.setSeachWordToState}
            searchWord={this.state.searchWord}
            /* Send along toggleview here as well,
            because there is a "Hitta närmsta" button in SearchView,
            that is set to toggle mapView */
            toggleView={this.toggleView}
          />
        }

        {this.state.mapView && <GoogleMap />}
        {this.state.helpView && <HelpView />}

        <Nav toggleView={this.toggleView} />

      </React.Fragment>
    );
  }
}

export default App;
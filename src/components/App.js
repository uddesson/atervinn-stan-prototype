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

  render() {
    return (
      <React.Fragment>

        {this.state.showSearch && <SearchView />}
        {this.state.showMap && <GoogleMap />}
        {this.state.showHelp && <HelpView />}

        <Nav onClick={this.toggleView} />

      </React.Fragment>
    );
  }
}

export default App;
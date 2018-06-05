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
    view: 'sök'
  }

  toggleView = (event) => {
    let view = event.target.value;
    this.setState({view})

    if(this.state.view === 'karta'){
      this.setState({showMap: true})
    }
    if(this.state.view === 'hjälp'){
      this.setState({showHelp: true})
    }

  }

  render() {
    return (
      <React.Fragment>

        {this.state.showSearch && <SearchView />}
        {this.state.showMap && <GoogleMap />}
        {this.state.showHelp && <HelpView />}

        <nav className="grid">
            <button onClick={this.toggleView} value={'sök'}>sök</button>
            <button onClick={this.toggleView} value={'karta'}>karta</button>
            <button onClick={this.toggleView} value={'hjälp'}>hjälp</button>
        </nav>

      </React.Fragment>
    );
  }
}

export default App;
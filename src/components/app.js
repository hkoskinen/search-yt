import React, { Component } from 'react';
import SearchBar from './search-bar';
import './app.css';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
    searchTerm: ''
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Search YT</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;

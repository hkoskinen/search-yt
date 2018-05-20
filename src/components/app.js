import React, { Component } from 'react';
import './app.css';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Search YT</h1>
      </div>
    );
  }
}

export default App;

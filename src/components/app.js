import React, { Component } from 'react';
import SearchBar from './search-bar';
import SelectedVideo from './selected-video';
import VideoList from './video-list';
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
        <SelectedVideo video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

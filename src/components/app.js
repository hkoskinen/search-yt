import React, { Component } from 'react';
import SearchBar from './search-bar';
import SelectedVideo from './selected-video';
import VideoList from './video-list';
import './app.css';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
    searchTerm: 'blockchain'
  }

  fetchYoutubeVideos = (queryTerm) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${queryTerm}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            videos: data.items,
            selectedVideo: data.items[0]
          });
        }, error => {
          console.error(`Error fetching videos: ${error}`);
        }
      );
  }

  componentDidMount() {
    //this.fetchYoutubeVideos(this.state.searchTerm);
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Search YT</h1>
        <SearchBar />
        <SelectedVideo video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />

        <button onClick={() => this.fetchYoutubeVideos(this.state.searchTerm)}>FETCH</button>
      </div>
    );
  }
}

export default App;

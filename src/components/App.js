import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = search => {
    Youtube.get('/search', {
      params: {
        q: search,
      }
    }).then(response => this.setState({ videos: response.data.items }));
  }

  onVideoSelect = video => {
    console.log("From the app!", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;

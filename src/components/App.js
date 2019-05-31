import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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
    this.setState({ selectedVideo: video })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;

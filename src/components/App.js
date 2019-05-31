import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = search => {
    Youtube.get('/search', {
      params: {
        q: search,
      }
    }).then(response => this.setState({ videos: response.data.items }));
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

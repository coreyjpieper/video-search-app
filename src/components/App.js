import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/youtube';

class App extends React.Component {
  onSearchSubmit = search => {
    Youtube.get('/search', {
      params: {
        q: search,
      }
    }).then(response => console.log(response));
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

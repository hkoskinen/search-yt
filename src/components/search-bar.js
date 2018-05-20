import React, { Component } from 'react';
import './search-bar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" className="search-bar__input" />
        </form>
      </div>
    );
  }
}

export default SearchBar;

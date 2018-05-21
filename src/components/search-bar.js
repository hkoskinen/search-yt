import React, { Component } from 'react';
import './search-bar.css';

class SearchBar extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    this.setState({value: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) return;

    this.props.onSearchSubmit(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit}>
          <div className="search-bar__content">
            <input
              type="text"
              className="search-bar__input"
              onChange={this.onChange}
              value={this.state.value}
              placeholder="Search something fun..."
            />
            <button
              type="submit"
              className="search-bar__button"
              onClick={this.onSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

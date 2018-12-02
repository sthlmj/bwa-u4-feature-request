import React from 'react';
import './SearchBar.css'

/* This is the searchbar, it allows the user to search for song, artist, and album. */

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist"/>
                <a>SEARCH</a>
            </div>
        )
    }

}

export default SearchBar;
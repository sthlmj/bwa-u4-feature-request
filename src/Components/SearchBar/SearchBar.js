import React from 'react';
import './SearchBar.css'

/*
Purpose of SearchBar is to make it possible for users to search for tracks.
 */

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
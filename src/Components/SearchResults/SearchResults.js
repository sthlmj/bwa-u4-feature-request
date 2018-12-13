import React from 'react';
import './SearchResults.css'

import TrackList from '../TrackList/TrackList'

/*
Purpose of SearchResults is to render results of track search.
 */

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Search Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
            </div>
        )
    }
}

export default SearchResults;
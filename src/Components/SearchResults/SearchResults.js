import React from 'react';
import './SearchResults.css'
import TrackList from "../TrackList/TrackList";
import Track from "../Track/Track";


//TODO: Render the track name, artist, and album. 35.
class SearchResults extends React.Component {
    render() {
        return (
            //Adds a map method that renders a set of Track components on the tracks attribute.
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults.map(track => {
                    return <Track key={track.id} /> }
                    )} />
            </div>
        )
    }
}

export default SearchResults;
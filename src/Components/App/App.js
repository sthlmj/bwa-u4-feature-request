import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

/*
Purpose of App is to contain all components.
 */

class App extends React.Component {
    constructor(props) {
        super(props)

        //Re-check this array objects.
        this.state = {
            searchResults: [
                { name: 'Gold Slug' },
                { artist: 'DJ Khaled' },
                { album: 'You Mine' },
                { id : '101 Album ID' }
            ]
        }
    };

    render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults />
                    <Playlist />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
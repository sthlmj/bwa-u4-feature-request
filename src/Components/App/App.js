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

        this.state = {
            searchResults: [
                { name: 'Gold Slug' },
                { artist: 'DJ Khaled' },
                { album: 'You Mine' },
                { id : '101 Album ID' }
            ],
            playlistName: 'My Playlist',
            playlistTracks: [
                { name: 'Another One' },
                { artist: 'DJ Khaled' },
                { album: 'You Mine' },
                { id: '102 Album ID' }
            ]
        }

        //Bindings
        this.addTrack = this.addTrack.bind(this);
    };


    //Add tracks checks if the current song is in the playlistTracks state. if id is new, add the song to the end of the playlist.
    addTrack(track) {
        if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
    }

    //TODO
    removeTrack(track) {

    }

    render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults onAdd={this.addTrack} />
                    <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
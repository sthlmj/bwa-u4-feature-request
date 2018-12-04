import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const track = {
    artist: 'DJ Khaleed',
    name: 'You Mine',
    album: 'I Changed a Lot'
};

const tracks = [
    track,
    track,
    track
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {name: ''},
                {artist: ''},
                {album: ''},
                {id: ''}
            ]
        }
    }

    render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults searchResults={this.state.searchResults}/>
                    <Playlist tracks={tracks}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
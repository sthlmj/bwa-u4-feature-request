import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const track = {
    trackArtist: '2pac shakur',
    trackName: 'dear mama',
    trackAlbum: 'most wanted'
};

const tracks = [
    track,
    track,
    track
];

class App extends React.Component {

    render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults />
                    <Playlist tracks={tracks}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

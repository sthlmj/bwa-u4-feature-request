import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

/*
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
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{
                name: 'You Mine',
                artist: 'DJ Khaled',
                album: 'I Changed a Lot',
                id: '101 sample ID'
            }],
            tracks: [{
                name: 'Gold Slug',
                artist: 'DJ khaled',
                album: 'We da best',
                id: '102 sample ID'
            },
                {
                    name: 'Slim shady',
                    artist: 'Eminem',
                    album: 'Marshal materials',
                    id: '103 sample ID'
                }
            ]
        };
    }

    render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults searchResults={this.state.searchResults}/>
                    <Playlist />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
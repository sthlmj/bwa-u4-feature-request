import React from 'react';
import './Playlist.css'
import TrackList from "../TrackList/TrackList";

/*
Playlist allows users to add tracks to this playlist and save it to their spotify account.
 */

class Playlist extends React.Component {
    render(){
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                {/* <TrackList /> */}
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        )
    }
}

export default Playlist;
import React from 'react';
import './TrackList.css'
import Track from '../Track/Track'

const tracks = [
    {
        name: 'track-name1',
        artist: 'elton john1',
        album: 'foobaz1'
    },
    {
        name: 'track-name2',
        artist: 'elton john2',
        album: 'foobaz2'
    },
    {
        name: 'track-name3',
        artist: 'elton john3',
        album: 'foobaz3'
    }
    ]

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <h2>{tracks.name}</h2>
            </div>
        )
    }

}

export default TrackList;
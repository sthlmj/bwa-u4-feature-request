import React from 'react';
import './Track.css'

class Track extends React.Component {

    renderAction() {
        return ()
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.trackName}</h3>
                    <p>{`${this.props.track.trackArtist} | ${this.props.track.trackAlbum}`}</p>
                </div>
                <a className="Track-action">{/*<!-- + or - will go here -->*/}</a>
            </div>
        )
    }


}

export default Track;
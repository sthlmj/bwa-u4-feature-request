import React from 'react';
import './Track.css'

/*
Track component holds information like name, artist, album about each tracks.
 */

class Track extends React.Component {
    constructor(props) {
        super(props)
    }

    //TODO: re-check isRemoval, needs bindings.
    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>;
        } else {
            return <a className="Track-action" onClick={this.addTrack}>+</a>;
        }
    }

    addTrack() {
        this.props.onAdd(this.props.onAdd)
    };

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>${this.props.track.artist} | ${this.props.track.album}</p>
                </div>

            </div>
        )
    }


}

export default Track;
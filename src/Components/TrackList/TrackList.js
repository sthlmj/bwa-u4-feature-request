import React from 'react';
import './TrackList.css'

import Track from '../Track/Track'

/*
Purpose of TrackList is to build list of Tracks from Track component.
 */

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track
                                key={track.id}
                                track={track}
                                onAdd={this.props.onAdd}
                                isRemoval={this.props.isRemoval}
                                onRemove={this.props.onRemove}
                                />
                    })
                }
            </div>
        )
    }

}

export default TrackList;
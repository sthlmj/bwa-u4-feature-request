import React from 'react';
import './TrackList.css'

import Track from '../Track/Track'

/*
Purpose of TrackList is to build list of Tracks from Track component.
 */

/*
TODO Step 24:
For now, you will hard code three tracks. In a later assessment, we will replace the hard-coded values with tracks from Spotify.
 */


class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/*<!-- You will add a map method that renders a set of Track components  -->*/}
                {/* 34. re-check this again */}
                {
                    this.props.tracks.map(track => {
                        return <Track key={track.id} track={track} />
                    })
                }
            </div>
        )
    }

}

export default TrackList;
import React from 'react';
import './Track.css'

/*
Track component lets users adds or remove tracks to their playlist by selecting a + sign or - sign.
It holds info about song, artist, album.
 */
class Track extends React.Component {

    /*
    renderAction displays a - anchor tag if the isRemoval property is true,
    and a + anchor tag if the isRemoval property is false. Set the class name to Track-action.
     */
    renderAction() {
        if (this.props.isRemoval == true) {
            return <h1>-</h1>;
        } else {
            return <h1>+</h1>;
        }
    }

    //TODO: Fix rendering method on this.props.track.name
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{`${this.props.artist} | ${this.props.album}`}</p>
                </div>
                <a className="Track-action" isRemoval={true}></a>
            </div>
        )
    }


}

export default Track;
import React, {Component} from 'react';
import style from './Track.module.scss'
class Track extends Component {
    render(track) {
        return (
            <div>{JSON.stringify(track)}</div>
        );
    }
}




export default Track;
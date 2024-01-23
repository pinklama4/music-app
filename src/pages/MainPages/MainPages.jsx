import React, {Component} from 'react';
import style from './MainPages.module.scss'
import tracksList from '../../assets/trackList'
class MainPages extends Component {
    render() {
        return (
            <div className={style.search}>
                <>Поиск треков</>
                <div className={style.list}>
                    {tracksList.map((track) => <div>{JSON.stringify(track)}</div>)}
                </div>
            </div>
        );
    }
}

export default MainPages;
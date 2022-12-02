import styles from './Film.module.scss'
import classNames from 'classnames/bind';
import {Video} from 'video-react';
import Trailer1 from '~/Video/Trailer1.mp4'


const cx = classNames.bind(styles)

function Film(props) {
    const videoSrc = Trailer1;
    const poster = 'http://1.bp.blogspot.com/-mgyq0cjzGM8/VIqhitdXbyI/AAAAAAAAO88/j0zW9gaG-04/s1600/hinh-nen-phim-noi-tieng%2B(1).jpg'
    return ( 
        <div className={cx('wrapper')}>
            <Video
                src={videoSrc}
                width='100px'
                height='100px'

                
            />
        </div>
     );
}

export default Film;
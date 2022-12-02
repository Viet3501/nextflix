import ReactPlayer from 'react-player'
import className from 'classnames/bind';
import styles from './Intro.module.scss';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import { useState } from 'react';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);
function Intro({url2}) {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <div className={cx('IntroContainer')}>
            <div className={cx('infoIntro')}>
                <h1 className={cx('headingIntro')}>NETFLIX / Juxtapose</h1>
                <p className={cx('overviewIntro')}>NETFLIX / Juxtapose TBWA Chiat Day Tore Frandsen / The Sweet Shop</p>
            </div>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volumne={null}
                muted={isMuted}
                url="https://vimeo.com/145218574"
                className={cx('videoIntro')}
            />
            <div>
                {isMuted ? (
                    <VscMute onClick={() => setIsMuted(prev => !prev)} className={cx('btn-volumn')} />
                ) : (
                    <VscUnmute onClick={() => setIsMuted(prev => !prev)} className={cx('btn-volumn')} />
                )}
            </div>
            <div className={cx('fadeBottom')}></div>
        </div>
    );
}

export default Intro;

import Navbar from '../Navbar/Navbar';
import Film from './Film';
import styles from './Movies.module.scss';
import classNames from 'classnames/bind';
import Intro from '../Intro/Intro';
const cx = classNames.bind(styles);

function Movies() {
    return (
        <div className={cx('wrapper')}>
            <Navbar Film></Navbar>
            <Film />
        </div>
    );
}

export default Movies;

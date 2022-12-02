import { FaHome, FaHotjar, FaStar } from 'react-icons/fa';
import { MdTheaterComedy } from 'react-icons/md';
import { GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll } from 'react-icons/gi';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem/MenuItem';
const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('menuPane')}>
            <MenuItem name="Home" Icon={FaHome} />
            <MenuItem name="Trending" Icon={FaHotjar} />
            <MenuItem name="Top rated" Icon={FaStar} />
            <MenuItem name="Actions Movies" Icon={MdTheaterComedy} />
            <MenuItem name="Comedy Movies" Icon={GiNinjaHeroicStance} />
            <MenuItem name="Horror Movies" Icon={GiRomanToga} />
            <MenuItem name="Romance Movies" Icon={GiGhost} />
            <MenuItem name="Documentaries" Icon={GiBandageRoll} />
        </div>
    );
}

export default Menu;

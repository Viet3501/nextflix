import { FaHome } from 'react-icons/fa';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import { randomRgbaColor } from '~/utils';
const cx = classNames.bind(styles);
function MenuItem({name,Icon}) {
    return (
        <div className={cx('subMenu')}>
            <Icon style={{'color': randomRgbaColor(1)}} className={cx('icon')} />
            <span>{name}</span>
        </div>
    );
}

export default MenuItem;

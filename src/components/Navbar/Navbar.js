import images from '~/assets/images';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import styles from './Navbar.module.scss';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useScrollY } from '../hooks';

const cx = className.bind(styles);

function Navbar({Film}) {
    const scrollY = useScrollY();
    return (
        <div
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--black)' }}
            className={cx('wrapper',{Film:Film})}
        >
            <div className={cx('navContainer')}>
                <div className={cx('logo')}>
                    <img src={images.logo} />
                </div>
                
                <div style={scrollY < 50 ? { border: '1px solid transparent' } : { border: '1px solid #ccc' }} className={cx('navSearch')}>
                    <button className={cx('btn-search')}>
                        <MdSearch className={cx('iconSearch')}></MdSearch>
                    </button>
                    <input placeholder="Input title, genres, people" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

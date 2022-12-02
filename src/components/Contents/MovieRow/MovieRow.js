import className from 'classnames/bind';
import styles from './MovieRow.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SmoothHorizontalScrolling } from '~/utils';
import { Useviewport } from '~/components/hooks';
const cx = className.bind(styles);

function MovieRow({ movies, title, isNetFlix }) {
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = Useviewport();

    useEffect(() => {
        // fetch();
    });

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };
    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) {
                handleScrollRight();
            } else if (dragMove > dragDown) {
                handleScrollLeft();
            }
        }
    }, [dragDown, dragMove, isDrag]);
    const onDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };
    const onDragEnter = (e) => {
        setIsDrag(false);
    };
    const onDragEnd = (e) => {
        setDragMove(e.screenX);
    };
    return (
        <div className={cx('container')} draggable="false">
            <h1 className={cx('heading')}>{title}</h1>
            <div
                ref={sliderRef}
                className={cx('movieSlider')}
                draggable="true"
                onDragStart={onDragStart}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
                style={
                    isNetFlix && movies && movies.length > 0
                        ? {
                              gridTemplateColumns: `repeat(${movies.length},
                    ${
                        windowWidth > 1200
                            ? '360px'
                            : windowWidth > 992
                            ? '300px'
                            : windowWidth > 768
                            ? '250px'
                            : '200px'
                    })`,
                          }
                        : {
                              gridTemplateColumns: `repeat(${movies.length},
                    ${
                        windowWidth > 1200
                            ? '250px'
                            : windowWidth > 992
                            ? '200px'
                            : windowWidth > 768
                            ? '150px'
                            : '100px'
                    })`,
                          }
                }
            >
                {movies.map((movie, index) => (
                    <div ref={movieRef} className={cx('movieItem')} key={index} draggable="false">
                        <a href="/movie">
                            <img className={cx('movieImg')} src={movie} alt="phim hay" draggable="false" />
                        </a>
                        <div className={cx('movieName')}>Movie Name</div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleScrollLeft}
                className={isNetFlix ? cx('btn-left', { isNetFlix: isNetFlix }) : cx('btn-left')}
            >
                <FiChevronLeft />
            </button>
            <button
                onClick={handleScrollRight}
                className={isNetFlix ? cx('btn-right', { isNetFlix: isNetFlix }) : cx('btn-right')}
            >
                <FiChevronRight />
            </button>
        </div>
    );
}

export default MovieRow;

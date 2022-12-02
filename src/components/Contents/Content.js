import MovieRow from "../Contents/MovieRow/MovieRow";
import className from 'classnames/bind';
import styles from './Content.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNetFlixOriginals } from "../Store/action";
const cx = className.bind(styles);
export const movies = [
    'http://1.bp.blogspot.com/-mgyq0cjzGM8/VIqhitdXbyI/AAAAAAAAO88/j0zW9gaG-04/s1600/hinh-nen-phim-noi-tieng%2B(1).jpg',
    'http://4.bp.blogspot.com/-QdwR3Pc9Y64/VIqhu_jhaBI/AAAAAAAAO-I/_Cpx49lkgSg/s1600/hinh-nen-phim-noi-tieng%2B(2).jpg',
    'http://1.bp.blogspot.com/-mMbpa9xqCQM/VIqh1jxTGTI/AAAAAAAAO-w/7kdV9dBiqKE/s1600/hinh-nen-phim-noi-tieng%2B(3).jpg',
    'http://3.bp.blogspot.com/-LyScrQdpXgo/VIqh2je6R-I/AAAAAAAAO-4/ha9eStO1k0g/s1600/hinh-nen-phim-noi-tieng%2B(4).jpg',
    'http://3.bp.blogspot.com/-OVQrc-iZoVQ/VIqh5YdHExI/AAAAAAAAO_A/xiwTmO35toU/s1600/hinh-nen-phim-noi-tieng%2B(5).jpg',
    'http://3.bp.blogspot.com/-t_lA3itYJMA/VIqh_A3IT3I/AAAAAAAAO_I/jPoMTTp8AaM/s1600/hinh-nen-phim-noi-tieng%2B(6).jpg',
    'http://3.bp.blogspot.com/-9X9SPH0T3QM/VIqh_8Qg8aI/AAAAAAAAO_M/CvGuEvZikSY/s1600/hinh-nen-phim-noi-tieng%2B(8).jpg',
    'http://4.bp.blogspot.com/-fqR4qr8UttQ/VIqiBqWpfMI/AAAAAAAAO_g/g0tX2llz5EE/s1600/hinh-nen-phim-noi-tieng%2B(9).jpg',
    'http://2.bp.blogspot.com/-6a1hw09Wi5k/VIqhgZJ4FTI/AAAAAAAAO8w/u6u6JRKeJgc/s1600/hinh-nen-phim-noi-tieng%2B(10).jpg',
    'http://2.bp.blogspot.com/-tQyo98_Bj0g/VIqhiAzlITI/AAAAAAAAO84/Lo4A4kINeJI/s1600/hinh-nen-phim-noi-tieng%2B(11).jpg',
    'http://4.bp.blogspot.com/-7oD3iAW1iL4/VIqhjo8_iuI/AAAAAAAAO9I/Hp2KLWUvOMo/s1600/hinh-nen-phim-noi-tieng%2B(12).jpg',
    'http://4.bp.blogspot.com/-VfOxyi43V4c/VIqhl3te5rI/AAAAAAAAO9U/TqapMVfgs-c/s1600/hinh-nen-phim-noi-tieng%2B(13).jpg',
    'http://1.bp.blogspot.com/-mgyq0cjzGM8/VIqhitdXbyI/AAAAAAAAO88/j0zW9gaG-04/s1600/hinh-nen-phim-noi-tieng%2B(1).jpg',
    'http://4.bp.blogspot.com/-QdwR3Pc9Y64/VIqhu_jhaBI/AAAAAAAAO-I/_Cpx49lkgSg/s1600/hinh-nen-phim-noi-tieng%2B(2).jpg',
    'http://1.bp.blogspot.com/-mMbpa9xqCQM/VIqh1jxTGTI/AAAAAAAAO-w/7kdV9dBiqKE/s1600/hinh-nen-phim-noi-tieng%2B(3).jpg',
    'http://3.bp.blogspot.com/-LyScrQdpXgo/VIqh2je6R-I/AAAAAAAAO-4/ha9eStO1k0g/s1600/hinh-nen-phim-noi-tieng%2B(4).jpg',
    'http://3.bp.blogspot.com/-OVQrc-iZoVQ/VIqh5YdHExI/AAAAAAAAO_A/xiwTmO35toU/s1600/hinh-nen-phim-noi-tieng%2B(5).jpg',
    'http://3.bp.blogspot.com/-t_lA3itYJMA/VIqh_A3IT3I/AAAAAAAAO_I/jPoMTTp8AaM/s1600/hinh-nen-phim-noi-tieng%2B(6).jpg',
    'http://3.bp.blogspot.com/-9X9SPH0T3QM/VIqh_8Qg8aI/AAAAAAAAO_M/CvGuEvZikSY/s1600/hinh-nen-phim-noi-tieng%2B(8).jpg',
    'http://4.bp.blogspot.com/-fqR4qr8UttQ/VIqiBqWpfMI/AAAAAAAAO_g/g0tX2llz5EE/s1600/hinh-nen-phim-noi-tieng%2B(9).jpg',
    'http://2.bp.blogspot.com/-6a1hw09Wi5k/VIqhgZJ4FTI/AAAAAAAAO8w/u6u6JRKeJgc/s1600/hinh-nen-phim-noi-tieng%2B(10).jpg',
    'http://2.bp.blogspot.com/-tQyo98_Bj0g/VIqhiAzlITI/AAAAAAAAO84/Lo4A4kINeJI/s1600/hinh-nen-phim-noi-tieng%2B(11).jpg',
    'http://4.bp.blogspot.com/-7oD3iAW1iL4/VIqhjo8_iuI/AAAAAAAAO9I/Hp2KLWUvOMo/s1600/hinh-nen-phim-noi-tieng%2B(12).jpg',
    'http://4.bp.blogspot.com/-VfOxyi43V4c/VIqhl3te5rI/AAAAAAAAO9U/TqapMVfgs-c/s1600/hinh-nen-phim-noi-tieng%2B(13).jpg',
];
function Content() {
    const dispatch = useDispatch()
    const {NetFlixOriginals} = useSelector(state => state.infoMovies)

    useEffect(() => {
        dispatch(getNetFlixOriginals())
    },[dispatch])
    return ( 
        <div className={cx('wrapper')}>
            <MovieRow isNetFlix={true} movies={movies} title ='Netflix Originals' />
            <MovieRow movies={movies} title ='Trending Movies' />
            <MovieRow movies={movies} title ='Top Rated Movies' />
            <MovieRow movies={movies} title ='Action Movies' />
            <MovieRow movies={movies} title ='Comedy Movies' />
            <MovieRow movies={movies} title ='Horror Movies' />
            <MovieRow movies={movies} title ='Romance Movies' />
            <MovieRow movies={movies} title ='Documentaries Movies' />
        </div>
     );
}

export default Content
import axios from 'axios';
import * as Types from '~/components/Store/types';

const API_KEY = 'e9e9d8da18ae29fc430845952232787c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetFlixOriginals = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`);
        dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.result });
    } catch (error) {
        console.log('Get NetFlix Api error:', error);
        
    }
};

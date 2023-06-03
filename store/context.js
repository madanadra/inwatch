import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import axios from "axios";

export const InwatchContext = createContext();

export const Inwatch = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getBoxOffice = () => {
        !Array.isArray(state.boxOffice) || !state.boxOffice.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/BoxOffice/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'BOX_OFFICE', boxOffice: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getInTheaters = () => {
        !Array.isArray(state.inTheaters) || !state.inTheaters.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/InTheaters/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'IN_THEATERS', inTheaters: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() =>  { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getComingSoon = () => {
        !Array.isArray(state.comingSoon) || !state.comingSoon.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/ComingSoon/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'COMING_SOON', comingSoon: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getPopularMovies = () => {
        !Array.isArray(state.popularMovies) || !state.popularMovies.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/MostPopularMovies/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'POPULAR_MOVIES', popularMovies: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getPopularTvShows = () => {
        !Array.isArray(state.popularTvShows) || !state.popularTvShows.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/MostPopularTVs/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'POPULAR_TV_SHOWS', popularTvShows: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getTopMovies = () => {
        !Array.isArray(state.topMovies) || !state.topMovies.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/Top250Movies/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'TOP_MOVIES', topMovies: res.data.items})
            } else {
                dispatch({type: 'ERROR', error: true})
            }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getTopTvShows = () => {
        !Array.isArray(state.topTvShows) || !state.topTvShows.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/Top250TVs/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'TOP_TV_SHOWS', topTvShows: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }
    
    const getBoxOfficeAllTime = () => {
        !Array.isArray(state.boxOfficeAllTime) || !state.boxOfficeAllTime.length &&
        axios.get(`${process.env.NEXT_PUBLIC_IMDB_BASE_URL}/BoxOfficeAllTime/${process.env.NEXT_PUBLIC_IMDB_API_KEY}`)
        .then((res) => {
            if (res.data.items.length) {
                dispatch({type: 'BOX_OFFICE_ALL_TIME', boxOfficeAllTime: res.data.items})
            } else { dispatch({type: 'ERROR', error: true}) }
        }).catch(() => { dispatch({type: 'ERROR', error: true}) })
    }

    return (
    <InwatchContext.Provider value={{ state, dispatch, getBoxOffice, getInTheaters, getComingSoon, getPopularMovies, 
    getPopularTvShows, getTopMovies, getTopTvShows, getBoxOfficeAllTime }}>
        {children}
    </InwatchContext.Provider>
    );
}

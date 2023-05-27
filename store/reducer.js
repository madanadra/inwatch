export const initialState = {
    boxOffice: [],
    popularMovies: [],
    popularTvShows: [],
    topMovies: [],
    topTvShows: [],
    boxOfficeAllTime: [],
    comingSoon: [],
    inTheaters: []
};
  
export const reducer = (state, action) => {
    switch (action.type) {
        case 'BOX_OFFICE':
            return {
                ...state,
                boxOffice: action.boxOffice
            };
        case 'IN_THEATERS':
            return {
                ...state,
                inTheaters: action.inTheaters
            };
        case 'COMING_SOON':
            return {
                ...state,
                comingSoon: action.comingSoon
            };
        case 'POPULAR_MOVIES':
            return {
                ...state,
                popularMovies: action.popularMovies
            };
        case 'POPULAR_TV_SHOWS':
            return {
                ...state,
                popularTvShows: action.popularTvShows
            };
        case 'TOP_MOVIES':
            return {
                ...state,
                topMovies: action.topMovies
            };
        case 'TOP_TV_SHOWS':
            return {
                ...state,
                topTvShows: action.topTvShows
            };
        case 'BOX_OFFICE_ALL_TIME':
            return {
                ...state,
                boxOfficeAllTime: action.boxOfficeAllTime
            };
        default:
            return state;
    }
};
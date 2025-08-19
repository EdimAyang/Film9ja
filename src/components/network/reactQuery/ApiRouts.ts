export const BASE_URL = `${import.meta.env.VITE_BASE_URL}`

export const API_ROUTES = {
    movie: 'movie/popular',
    trending:'trending/movie/week',
    tv: 'trending/tv/week',
    moviePage: 'trending/movie/week?language=en-US&page=',
    tvPage: 'trending/tv/week?language=en-US&page=',
    search:'search/multi?query=',
    searchFilter: '&include_adult=false&language=en-US&page=',
    movieInfo:'movie/',
    tvInfo:'tv/',
}
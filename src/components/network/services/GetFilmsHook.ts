import { axiosInstance } from "../axios";
import { queryOptions } from "@tanstack/react-query";
import { API_ROUTES } from "../reactQuery/ApiRouts";
import { APIKEYS } from "../reactQuery/ApiKeys";
import { ApiResponse } from "../ApiResponse";
import { ICategories } from '../../../interface';


//get movies
 const getMovies = async ():Promise<ICategories[]>=>{
        const {data} = await axiosInstance.get(API_ROUTES.movie)
        return data.results
}

// get Series
 const getSeries = async ():Promise<ICategories[]>=>{
        const {data} = await axiosInstance.get(API_ROUTES.tv)
        return data.results
}

// get trending movies
 const getTrendingMovies = async ():Promise<ICategories[]>=>{
        const {data} = await axiosInstance.get(API_ROUTES.trending)
        return data.results
}

//get movies per page
 const getMoviesPerPage = async (page:number):Promise<ICategories[]> =>{
        const {data} = await  axiosInstance.get<ApiResponse>(`${API_ROUTES.moviePage}${page}`);
        return data.results
}

//movies hook
 const GetMovies = ()=>{
    return queryOptions({
        queryKey:['home movies'],
        queryFn:getMovies,
        
    })
    
}

//series hook
const GetSeries = ()=>{
    return queryOptions({
        queryKey:['home series'],
        queryFn:getSeries,
    })
}

//trending hook
export const GetTrendingMovies = ()=>{
    return queryOptions({
        queryKey:['home trending'],
        queryFn:getTrendingMovies,
    })
}

//movies per page hook
export const MoviesPerPage = (page:number) =>{
    return queryOptions({
        queryKey:[APIKEYS.moviesPages, page],
        queryFn:()=>getMoviesPerPage(page)
    })
}

export const HomePageQueries = {
    trending:GetTrendingMovies,
    movies:GetMovies,
    series:GetSeries,
}
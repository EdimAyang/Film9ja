import { axiosInstance } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "../reactQuery/ApiRouts";
import { APIKEYS } from "../reactQuery/ApiKeys";
import { ApiResponse } from "../ApiResponse";
import toast from "react-hot-toast";


//get movies
export const getMovies = async ()=>{
    try {
        const res = await axiosInstance.get<ApiResponse>(API_ROUTES.movie)
        return res.data.results
    } catch (error) {
        toast.error(`${error}`)
    }
}

// get Series
export const getSeries = async ()=>{
    try {
        const res = await axiosInstance.get<ApiResponse>(API_ROUTES.tv)
        return res.data.results
    } catch (error) {
        toast.error(`${error}`)
    }
}

// get trending movies
export const getTrendingMovies = async ()=>{
    try {
        const res = await axiosInstance.get<ApiResponse>(API_ROUTES.trending)
        return res.data.results
    } catch (error) {
        toast.error(`${error}`)
    }
}

//get movies per page
export const getMoviesPerPage = async (page:number) =>{
    try {
        const res = await  axiosInstance.get<ApiResponse>(`${API_ROUTES.moviePage}${page}`);
        return res.data.results
    } catch (error) {
        console.log(error)
    }
}

//movies hook
export const useGetMovies = ()=>{
    return useQuery({
        queryKey:[APIKEYS.movies],
        queryFn:getMovies,
    })
    
}

//series hook
export const useGetSeries = ()=>{
    return useQuery({
        queryKey:[APIKEYS.series],
        queryFn:getSeries,
    })
}

//trending hook
export const useGetTrendingMovies = ()=>{
    return useQuery({
        queryKey:[APIKEYS.trending],
        queryFn:getTrendingMovies,
    })
}

//movies per page hook
export const useGetMoviesPerPage = (page:number) =>{
    return useQuery({
        queryKey:[APIKEYS.moviesPages],
        queryFn:()=>getMoviesPerPage(page)
    })
}
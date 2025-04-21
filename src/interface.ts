import { ReactNode } from "react"

//Button interface
export interface Ibtn {
    children:string,
    size?:string,
    color?:string,
    color2?:string
}

//Login interface
 export interface ILogIn {
    state?:string
    state2?:string
}

//popular Movies

export interface ICategories {
        adult?:boolean
        backdrop_path:string
        id:number
        overview:string
        poster_path:string
        releaseDate:string
        title:string;
        popularity:number
        name:string
        original_name:string
        original_title:string
        origin_country:string

}[]

//Bars props
export  interface Ibars  {
    Bar?:boolean
    toggler?:() => void
}

//sideBar
export interface Iprops {
    active?:boolean | null
}

//Search
export interface MultiSearch {
    id:number
    media_type:string
    name:string
    overview:string
    popularity:number
    poster_path:string
    vote_count:number
    first_air_date:string
    backdrop_path:string
    adult:Boolean
    original_name:string
    original_title:string
    origin_country:string
    title:string
}

//Loader 

export interface ILoader {
    children?:ReactNode
    ref?:  (node?: Element | null) => void
}